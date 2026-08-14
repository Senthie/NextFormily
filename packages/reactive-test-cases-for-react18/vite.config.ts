import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

// 将 @next-formily/* 映射到各包 src，便于 demo 直接引用源码
const alias = {}
const packagesDir = path.resolve(__dirname, '../../packages')
for (const name of fs.readdirSync(packagesDir)) {
  const pkgDir = path.join(packagesDir, name)
  if (!fs.existsSync(path.join(pkgDir, 'package.json'))) continue
  alias[`@next-formily/${name}`] = path.join(pkgDir, 'src')
}

export default defineConfig({
  root: __dirname,
  resolve: { alias },
  server: { port: 4001 },
})
