const fs = require('fs')
const path = require('path')

const cwd = process.cwd()
const src = path.join(cwd, 'src')
const out = path.join(cwd, 'esm')

const walk = (dir, base, acc) => {
  for (const e of fs.readdirSync(dir)) {
    const full = path.join(dir, e)
    if (fs.statSync(full).isDirectory()) walk(full, base, acc)
    else if (/\.(less|scss)$/.test(e)) acc.push(path.relative(base, full))
  }
  return acc
}

let count = 0
for (const rel of walk(src, src, [])) {
  const target = path.join(out, rel)
  fs.mkdirSync(path.dirname(target), { recursive: true })
  fs.copyFileSync(path.join(src, rel), target)
  count++
}
console.log('esm assets copied:', count)
