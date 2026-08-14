import { defineConfig } from 'dumi'
import fs from 'fs'
import path from 'path'

// 将 @next-formily/* 与旧包名 @formily/* 都映射到各包 src，
// 使文档 demo 可直接引用源码，无需先构建产物。
const alias: Record<string, string> = {}
const packagesDir = path.resolve(__dirname, 'packages')
for (const name of fs.readdirSync(packagesDir)) {
  const pkgDir = path.join(packagesDir, name)
  if (!fs.existsSync(path.join(pkgDir, 'package.json'))) continue
  alias[`@next-formily/${name}`] = path.join(pkgDir, 'src')
  alias[`@formily/${name}`] = path.join(pkgDir, 'src')
}

export default defineConfig({
  alias,
  // GitHub Pages 部署到子路径（https://senthie.github.io/NextFormily/）
  // 若部署到自有域名/根路径，改为 base: '/' 与 publicPath: '/' 即可
  base: '/NextFormily/',
  publicPath: '/NextFormily/',
  exportStatic: {},
  resolve: {
    docDirs: ['docs'],
  },
})
