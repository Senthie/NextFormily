#!/usr/bin/env node
/**
 * 统一版本编辑器 —— NextFormily monorepo
 *
 * 用法：
 *   node scripts/bump-version.cjs <新版本> [--dry-run] [--include-test-packages]
 *
 * 示例：
 *   node scripts/bump-version.cjs 3.1.2            # 仅升级 10 个正式包 @next-formily/*
 *   node scripts/bump-version.cjs 3.1.2 --dry-run  # 预览不改写
 *   node scripts/bump-version.cjs 2.3.8 --include-test-packages  # 连 benchmark / react18 测试包一起
 *
 * 作用：
 *   1. 升级 packages/* 下正式发布包（@next-formily/*）的 version
 *   2. 同步包间 workspace:* 依赖版本（保持包间依赖版本与包版本一致）
 *   3. 同步 pnpm-workspace.yaml 的 minimumReleaseAgeExclude（追加新版本号）
 *   4. 同步 examples/* 中对 @next-formily/* 的依赖版本（^ 范围自动吃到新版本，仅精确版本需改）
 *
 * 说明：
 *   - 默认只动 packages/*（正式包），不碰 benchmark / reactive-test-cases-for-react18 等测试包
 *   - 幂等：重复运行相同版本不会重复追加
 */
const fs = require('node:fs')
const path = require('node:path')

const ROOT = path.resolve(__dirname, '..')
const PKGS_DIR = path.join(ROOT, 'packages')
const WS_FILE = path.join(ROOT, 'pnpm-workspace.yaml')
const EX_DIR = path.join(ROOT, 'examples')

// ---------- CLI 参数 ----------
const args = process.argv.slice(2)
const newVersion = args.find(a => /^\d+\.\d+\.\d+/.test(a))
const dryRun = args.includes('--dry-run')
const includeTest = args.includes('--include-test-packages')

if (!newVersion) {
  console.error('用法: node scripts/bump-version.cjs <新版本> [--dry-run] [--include-test-packages]')
  process.exit(1)
}

// ---------- 工具 ----------
function readJson(file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'))
}
function writeJson(file, obj) {
  fs.writeFileSync(file, JSON.stringify(obj, null, 2) + '\n')
}
const isFormal = name => /^@next-formily\//.test(name) && !/benchmark|test-cases/.test(name)
const isTestPkg = name => /benchmark|test-cases/.test(name)

// ---------- 收集包 ----------
const pkgDirs = fs.readdirSync(PKGS_DIR).filter(d => {
  return fs.existsSync(path.join(PKGS_DIR, d, 'package.json'))
})

const targets = []
const skipped = []
for (const d of pkgDirs) {
  const file = path.join(PKGS_DIR, d, 'package.json')
  const p = readJson(file)
  if (isFormal(p.name)) targets.push({ d, file, pkg: p })
  else if (isTestPkg(p.name)) {
    if (includeTest) targets.push({ d, file, pkg: p })
    else skipped.push({ d, name: p.name, version: p.version })
  }
}

console.log(`目标版本: ${newVersion}${dryRun ? '  [DRY-RUN 仅预览]' : ''}`)
console.log(`将升级 ${targets.length} 个包:`)
targets.forEach(t => console.log(`  - ${t.pkg.name}  ${t.pkg.version} -> ${newVersion}`))
if (skipped.length) {
  console.log(`跳过测试包(可用 --include-test-packages 包含):`)
  skipped.forEach(s => console.log(`  - ${s.name}@${s.version}`))
}

// ---------- 1) 升级包 version + 同步包间依赖 ----------
const apply = []
for (const t of targets) {
  const old = t.pkg.version
  const patch = { version: newVersion }

  // 同步 dependencies / devDependencies / peerDependencies 中指向其它正式包的 workspace:* 或精确版本
  for (const section of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    const deps = t.pkg[section] || {}
    for (const [name, spec] of Object.entries(deps)) {
      if (name.startsWith('@next-formily/')) {
        if (spec === 'workspace:*' || spec === 'workspace:^' || spec === 'workspace:~') {
          // 保持 workspace 协议不变（pnpm publish 时会自动转换）
          continue
        }
        if (spec === old || spec === `^${old}` || spec === `~${old}` || spec === `=${old}`) {
          deps[name] = spec.replace(old, newVersion)
          patch[section] = deps
        }
      }
    }
  }
  apply.push({ file: t.file, old, patch })
}

// ---------- 2) 同步 pnpm-workspace.yaml minimumReleaseAgeExclude ----------
let wsContent = fs.readFileSync(WS_FILE, 'utf8')
const wsChanged = { before: wsContent, after: wsContent }
if (wsContent.includes('minimumReleaseAgeExclude')) {
  // 找到每个 '@next-formily/xxx@旧版' 追加 ' || 新版本'
  wsChanged.after = wsContent.replace(
    /(@next-formily\/[a-z0-9-]+)@([0-9][^\s'"]*)/g,
    (full, name, ver) => {
      if (ver.split(' || ').includes(newVersion)) return full // 已包含，幂等
      return `${name}@${ver} || ${newVersion}`
    }
  )
}

// ---------- 3) 同步 examples 精确版本引用（可选增强） ----------
const exampleEdits = []
if (fs.existsSync(EX_DIR)) {
  for (const ex of fs.readdirSync(EX_DIR)) {
    const pkgFile = path.join(EX_DIR, ex, 'package.json')
    if (!fs.existsSync(pkgFile)) continue
    const p = readJson(pkgFile)
    for (const section of ['dependencies', 'devDependencies', 'peerDependencies']) {
      const deps = p[section] || {}
      for (const [name, spec] of Object.entries(deps)) {
        if (name.startsWith('@next-formily/')) {
          const m = spec.match(/^(\^|~|=)?(\d+\.\d+\.\d+)$/)
          if (m) {
            exampleEdits.push({ file: pkgFile, name, old: spec, next: (m[1] || '') + newVersion })
          }
        }
      }
    }
  }
}

// ---------- 输出 ----------
console.log('\n=== 变更预览 ===')
apply.forEach(a => console.log(`  ${path.relative(ROOT, a.file)}: version ${a.old} -> ${newVersion}${a.patch.dependencies ? ' (+依赖同步)' : ''}`))
if (wsChanged.after !== wsChanged.before) console.log(`  pnpm-workspace.yaml: minimumReleaseAgeExclude 追加 ${newVersion}`)
exampleEdits.forEach(e => console.log(`  ${path.relative(ROOT, e.file)}: ${e.name} ${e.old} -> ${e.next}`))

if (dryRun) {
  console.log('\n[DRY-RUN] 未写入任何文件')
  process.exit(0)
}

// ---------- 写入 ----------
for (const a of apply) {
  const p = readJson(a.file)
  p.version = newVersion
  for (const section of ['dependencies', 'devDependencies', 'peerDependencies', 'optionalDependencies']) {
    if (a.patch[section]) p[section] = a.patch[section]
  }
  writeJson(a.file, p)
}
if (wsChanged.after !== wsChanged.before) fs.writeFileSync(WS_FILE, wsChanged.after)
for (const e of exampleEdits) {
  const p = readJson(e.file)
  const section = ['dependencies', 'devDependencies', 'peerDependencies'].find(s => p[s] && p[s][e.name])
  p[section][e.name] = e.next
  writeJson(e.file, p)
}

console.log(`\n✅ 已完成，${targets.length} 个包升级到 ${newVersion}`)
