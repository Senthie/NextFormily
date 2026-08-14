// less/scss 副作用导入（build:style 生成的 src/style.ts 会 import './xxx/style.less'）
declare module '*.less' {
  const styles: any
  export default styles
}
