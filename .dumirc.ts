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
  // 声明支持的语言（suffix 模式）：
  // zh-CN 无后缀（默认，路由即 /guide），en-US 带后缀（/guide/en-US）
  // 注意：必须用 suffix 模式，避免首页 CTA 按钮生成 /zh-CN/guide 这种 exportStatic 未生成的路由
  locales: [
    { id: 'zh-CN', name: '简体中文', suffix: '' },
    { id: 'en-US', name: 'English', suffix: 'en-US' },
  ],
  resolve: {
    docDirs: ['docs'],
  },
})
