import { glob } from 'glob'
import path from 'path'
import fs from 'fs-extra'

const main = async () => {
  // glob 9+ 移除回调式 API，改用 Promise 式
  // 用 process.cwd() 而非 __dirname：run-ts.cjs 打包后 __dirname 指向临时目录
  const files = await glob('./*/style.less', {
    cwd: path.resolve(process.cwd(), './src'),
  })
  const normalize = (p: string) => (p.startsWith('./') ? p : `./${p}`)

  await fs.writeFile(
    path.resolve(process.cwd(), './src/style.ts'),
    `// auto generated code
${files
  .map((p) => {
    return `import '${normalize(p)}'\n`
  })
  .join('')}`,
    'utf8'
  )
  await fs.writeFile(
    path.resolve(process.cwd(), './src/style.less'),
    `// auto generated code
${files
  .map((p) => {
    return `@import '${normalize(p)}';\n`
  })
  .join('')}`,
    'utf8'
  )
}

main().catch((err) => console.error(err))
