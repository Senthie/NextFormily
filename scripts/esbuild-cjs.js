const esbuild = require('esbuild')
const fs = require('fs')
const path = require('path')

const cwd = process.cwd()
const walk = (dir) => {
  const out = []
  for (const e of fs.readdirSync(dir)) {
    const full = path.join(dir, e)
    if (fs.statSync(full).isDirectory()) {
      out.push(...walk(full))
    } else if (/\.tsx?$/.test(e) && !full.includes('__tests__')) {
      out.push(full)
    }
  }
  return out
}

const entryPoints = walk(path.join(cwd, 'src'))
esbuild.buildSync({
  entryPoints,
  outdir: path.join(cwd, 'lib'),
  format: 'cjs',
  target: 'esnext',
  bundle: false,
  sourcemap: true,
  logLevel: 'warning',
})
// 拷贝样式资源（less/scss）到 lib，保持相对结构（供 bundler 消费）
const outdir = path.join(cwd, 'lib')
const copyAssets = (dir, base) => {
  for (const e of fs.readdirSync(dir)) {
    const full = path.join(dir, e)
    if (fs.statSync(full).isDirectory()) {
      copyAssets(full, base)
    } else if (/\.(less|scss)$/.test(e)) {
      const rel = path.relative(base, full)
      const target = path.join(outdir, rel)
      fs.mkdirSync(path.dirname(target), { recursive: true })
      fs.copyFileSync(full, target)
    }
  }
}
copyAssets(path.join(cwd, 'src'), path.join(cwd, 'src'))
console.log('CJS transpiled:', entryPoints.length, 'files')
