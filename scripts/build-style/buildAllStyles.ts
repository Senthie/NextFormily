import { build, getRollupBasePlugin } from './helper'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const buildAllStyles = async (outputFile: string) => {
  // 入口 src/style.ts 仅含 `import './xxx/style.less'` 标准 ESM 副作用导入，
  // 无需 TS 编译（rollup-plugin-typescript2 依赖 TS7 已移除的 API）。
  await build({
    input: 'src/style.ts',
    output: {
      file: outputFile,
    },
    plugins: [...getRollupBasePlugin()],
  })
}
