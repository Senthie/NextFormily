import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

const ext = path.resolve(__dirname, 'src/extension')
const outDir = path.resolve(__dirname, 'package')

// 拷贝 manifest 与静态资源到产物目录
function copyExtensionAssets() {
  return {
    name: 'copy-extension-assets',
    closeBundle() {
      fs.mkdirSync(outDir, { recursive: true })
      fs.cpSync(path.resolve(__dirname, 'assets'), outDir, {
        recursive: true,
      })
      fs.copyFileSync(path.join(ext, 'manifest.json'), path.join(outDir, 'manifest.json'))
    },
  }
}

export default defineConfig({
  build: {
    outDir,
    emptyOutDir: true,
    target: 'esnext',
    rollupOptions: {
      input: {
        popup: path.resolve(__dirname, 'popup.html'),
        devtools: path.resolve(__dirname, 'devtools.html'),
        devpanel: path.resolve(__dirname, 'devpanel.html'),
        background: path.join(ext, 'background.ts'),
        backend: path.join(ext, 'backend.ts'),
        content: path.join(ext, 'content.ts'),
        inject: path.join(ext, 'inject.ts'),
      },
      output: {
        entryFileNames: 'js/[name].bundle.js',
        chunkFileNames: 'js/[name].bundle.js',
        assetFileNames: 'assets/[name].[ext]',
      },
    },
  },
  plugins: [copyExtensionAssets()],
})
