import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// 将 @next-formily/* 解析到仓库本地 tsc 构建的 esm 产物
// （tsc 已正确擦除类型导入，规避 esbuild/原生 ESM 对 `export type` re-export 的限制）
const formilyPkg = (name: string) =>
  path.resolve(__dirname, `../../packages/${name}/esm/index.js`)

// @next-formily/antd 的 esm 产物中保留了对 `./xxx/style.less` 的导入（样式侧），
// 但 tsc 不会拷贝 less 源文件到 esm 目录，这里将产物里的 less 引用重定向到源码 less
const antdLessRedirect = (): Plugin => ({
  name: 'formily-antd-less-redirect',
  resolveId(source, importer) {
    if (!source.endsWith('.less') || !importer) return null
    if (
      !importer.includes(
        `${path.sep}packages${path.sep}antd${path.sep}esm${path.sep}`,
      )
    ) {
      return null
    }
    const resolved = path.resolve(path.dirname(importer), source)
    if (resolved.includes(`${path.sep}esm${path.sep}`)) {
      return resolved.replace(
        `${path.sep}esm${path.sep}`,
        `${path.sep}src${path.sep}`,
      )
    }
    return null
  },
})

export default defineConfig({
  plugins: [react(), antdLessRedirect()],
  resolve: {
    alias: {
      '@next-formily/antd': formilyPkg('antd'),
      '@next-formily/react': formilyPkg('react'),
      '@next-formily/core': formilyPkg('core'),
      '@next-formily/json-schema': formilyPkg('json-schema'),
      '@next-formily/shared': formilyPkg('shared'),
      '@next-formily/reactive': formilyPkg('reactive'),
      '@next-formily/reactive-react': formilyPkg('reactive-react'),
      '@next-formily/validator': formilyPkg('validator'),
      '@next-formily/grid': formilyPkg('grid'),
      '@next-formily/path': formilyPkg('path'),
    },
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  server: {
    port: 5173,
    host: '127.0.0.1',
  },
})
