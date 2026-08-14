import SideEffectsFlagPlugin from 'webpack/lib/optimize/SideEffectsFlagPlugin'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { sideEffects, name: baseName } = require('../package.json')

// webpack 5 的 moduleHasSideEffects 需显式传入 cache（glob→RegExp 缓存）
const hasSideEffect = (moduleName: string, flagValue: any) =>
  SideEffectsFlagPlugin.moduleHasSideEffects(moduleName, flagValue, new Map())

test('sideEffects should be controlled manually', () => {
  // if config in pkg.json changed, please ensure it is covered by jest.
  expect(sideEffects).toStrictEqual([
    'dist/*',
    'esm/*.js',
    'lib/*.js',
    'src/*.ts',
    '*.less',
    '**/*/style.js',
  ])
})

test('dist/*', () => {
  // eg. import "@next-formily/antd/dist/antd.css"
  expect(
    hasSideEffect('dist/antd.css', 'dist/*')
  ).toBeTruthy()
  expect(
    hasSideEffect(
      'dist/formily.antd.umd.development.js',
      'dist/*'
    )
  ).toBeTruthy()
  expect(
    hasSideEffect(
      'dist/formily.antd.umd.production.js',
      'dist/*'
    )
  ).toBeTruthy()
})

test('esm/*.js & lib/*.js', () => {
  // expected to be truthy
  // eg. import FormilyAntd from "@next-formily/antd/esm/index"
  expect(
    hasSideEffect('esm/index.js', 'esm/*.js')
  ).toBeTruthy()
  expect(
    hasSideEffect('lib/index.js', 'lib/*.js')
  ).toBeTruthy()

  // expected to be falsy
  // eg. import Input from "@next-formily/antd/esm/input/index" => will be compiled to __webpack_require__("./node_modules/@next-formily/antd/esm/input/index.js")
  // It should be removed by webpack if not used after imported.
  expect(
    hasSideEffect('esm/input/index.js', 'esm/*.js')
  ).toBeFalsy()
  expect(
    hasSideEffect(
      'esm/array-base/index.js',
      'esm/*.js'
    )
  ).toBeFalsy()
  expect(
    hasSideEffect('lib/input/index.js', 'lib/*.js')
  ).toBeFalsy()
})

test('*.less', () => {
  //  eg. import "@next-formily/antd/lib/input/style.less"
  expect(
    hasSideEffect(
      `${baseName}/lib/input/style.less`,
      '*.less'
    )
  ).toBeTruthy()
})

test('**/*/style.js', () => {
  // eg. import "@next-formily/antd/lib/input/style" will be compiled to  __webpack_require__("./node_modules/@next-formily/antd/lib/input/style.js")
  // so we can match the `*style.js` only, not `**/*/style*` may be cause someting mismatch like `@next-formily/antd/lib/xxx-style/index.js`
  const modulePathArr = [
    'lib/input/style.js',
    `${baseName}/lib/input/style.js`,
    `./node_modules/${baseName}/style.js`,
  ]

  modulePathArr.forEach((modulePath) => {
    const hasSideEffects = hasSideEffect(
      modulePath,
      '**/*/style.js'
    )
    expect(hasSideEffects).toBeTruthy()
  })
})
