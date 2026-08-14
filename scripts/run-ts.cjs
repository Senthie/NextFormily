/**
 * run-ts.cjs — 用 esbuild 将 TS/TSX 入口打包为 CJS 临时文件后执行。
 *
 * 背景：仓库已迁移到 TypeScript 7（原生编译器），ts-node@9.1.1 不兼容
 * (peer typescript <7)。此脚本替代 ts-node 运行构建期 TS 脚本
 * （如 antd 的 create-style / build-style）。
 *
 * 用法：node ../../scripts/run-ts.cjs <entry.ts> [--watch]
 */
const path = require('path')
const fs = require('fs')
const os = require('os')

// 优先使用较新 esbuild（>=0.20，如 vite 附带），旧版 0.12 无法 bundle glob@13(ESM+node:)
let esbuild
{
  const pnpmRoot = path.join(__dirname, '..', 'node_modules', '.pnpm')
  const candidates = []
  try {
    if (fs.existsSync(pnpmRoot)) {
      candidates.push(
        ...fs
          .readdirSync(pnpmRoot)
          .filter((d) => /^esbuild@/.test(d))
          .sort()
          .reverse()
          .map((d) => path.join(pnpmRoot, d, 'node_modules', 'esbuild')),
      )
    }
  } catch {}
  candidates.push(
    path.join(__dirname, '..', 'node_modules', 'esbuild'),
    path.join(
      __dirname,
      '..',
      'node_modules',
      'vite',
      'node_modules',
      'esbuild',
    ),
  )
  for (const c of candidates) {
    try {
      const mod = require(c)
      if (mod && mod.build) {
        esbuild = mod
        break
      }
    } catch {}
  }
}
if (!esbuild || !esbuild.build) {
  console.error('[run-ts] esbuild not found')
  process.exit(1)
}

const entry = process.argv[2]
if (!entry) {
  console.error('Usage: node run-ts.cjs <entry.ts>')
  process.exit(1)
}

const absEntry = path.resolve(process.cwd(), entry)
// 输出到仓库内 .cache（Node 可从仓库 node_modules 解析 external 依赖）
const cacheDir = path.join(__dirname, '..', 'node_modules', '.cache')
fs.mkdirSync(cacheDir, { recursive: true })
const outfile = path.join(
  cacheDir,
  `run-ts-${Date.now()}-${path.basename(entry)}.cjs`,
)

const buildOptions = {
  entryPoints: [absEntry],
  outfile,
  bundle: true,
  platform: 'node',
  format: 'cjs',
  target: 'node18',
  // 内置 node: 模块与运行时模块一律 external，避免被打包
  external: [
    'node:*',
    'rollup',
    'rollup-plugin-*',
    'rollup-plugin-typescript2',
    'less',
    'less-plugin-npm-import',
    'postcss',
  ],
  logLevel: 'silent',
}

const run = async () => {
  try {
    await esbuild.build(buildOptions)
    require(outfile)
  } catch (err) {
    console.error('[run-ts] build failed:', err.message)
    process.exit(1)
  } finally {
    try {
      fs.unlinkSync(outfile)
    } catch {}
  }
}

run()
