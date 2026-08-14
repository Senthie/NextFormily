import path from 'path'
import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import externalGlobals from 'rollup-plugin-external-globals'
import injectProcessEnv from 'rollup-plugin-inject-process-env'
import dts from 'rollup-plugin-dts'
import terser from '@rollup/plugin-terser'

const presets = () => {
  const externals = {
    antd: 'antd',
    react: 'React',
    'react-is': 'ReactIs',
    'mobx-react-lite': 'mobxReactLite',
    'react-dom': 'ReactDOM',
    '@ant-design/icons': 'icons',
    '@next-formily/reactive-react': 'Formily.ReactiveReact',
    '@next-formily/reactive': 'Formily.Reactive',
    '@next-formily/path': 'Formily.Path',
    '@next-formily/shared': 'Formily.Shared',
    '@next-formily/validator': 'Formily.Validator',
    '@next-formily/core': 'Formily.Core',
    '@next-formily/json-schema': 'Formily.JSONSchema',
    '@next-formily/react': 'Formily.React',
  }
  return [
    typescript({
      tsconfig: './tsconfig.build.json',
      tsconfigOverride: {
        compilerOptions: {
          module: 'ESNext',
          declaration: false,
        },
      },
    }),
    resolve(),
    commonjs(),
    externalGlobals(externals, {
      exclude: ['**/*.{less,sass,scss}'],
    }),
  ]
}

const createEnvPlugin = (env) => {
  return injectProcessEnv(
    {
      NODE_ENV: env,
    },
    {
      exclude: '**/*.{css,less,sass,scss}',
      verbose: false,
    }
  )
}

const inputFilePath = path.join(process.cwd(), 'src/index.ts')

const noUIDtsPackages = [
  'formily.core',
  'formily.validator',
  'formily.shared',
  'formily.path',
  'formily.json-schema',
  'formily.reactive',
]

export const removeImportStyleFromInputFilePlugin = () => ({
  name: 'remove-import-style-from-input-file',
  transform(code, id) {
    // 样式由 build:style 进行打包，所以要删除入口文件上的 `import './style'`
    if (inputFilePath === id) {
      return code.replace(`import './style';`, '')
    }

    return code
  },
})

export default (filename, targetName, ...plugins) => {
  const base = [
    {
      input: 'src/index.ts',
      output: {
        format: 'umd',
        file: `dist/${filename}.umd.development.js`,
        name: targetName,
        sourcemap: true,
        amd: {
          id: filename,
        },
        globals: {
          '@next-formily/json-schema': 'Formily.JSONSchema',
        },
      },
      external: ['react', 'react-dom', 'react-is', '@next-formily/json-schema'],
      plugins: [...presets(), ...plugins, createEnvPlugin('development')],
    },
    {
      input: 'src/index.ts',
      output: {
        format: 'umd',
        file: `dist/${filename}.umd.production.js`,
        name: targetName,
        sourcemap: true,
        amd: {
          id: filename,
        },
        globals: {
          '@next-formily/json-schema': 'Formily.JSONSchema',
        },
      },
      external: ['react', 'react-dom', 'react-is', '@next-formily/json-schema'],
      plugins: [
        ...presets(),
        terser(),
        ...plugins,
        createEnvPlugin('production'),
      ],
    },
  ]

  if (noUIDtsPackages.includes(filename)) {
    base.push({
      input: 'esm/index.d.ts',
      output: {
        format: 'es',
        file: `dist/${filename}.d.ts`,
      },
      plugins: [dts(), ...plugins],
    })
    base.push({
      input: 'esm/index.d.ts',
      output: {
        format: 'es',
        file: `dist/${filename}.all.d.ts`,
      },
      plugins: [
        dts({
          respectExternal: true,
        }),
        ...plugins,
      ],
    })
  }

  return base
}
