import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 使用 Nexus 发布的 @next-formily/* 3.1.1 包（node_modules 真实依赖），
// 不再 alias 到本地源码。antd 包 esm 自带 less（copy-less.js 已拷贝），vite 直接编译。
export default defineConfig({
  plugins: [react()],
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
