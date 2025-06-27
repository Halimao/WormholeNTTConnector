import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0', // 监听所有网络接口
    port: 8888,      // 默认端口
  },
  plugins: [react()],
  build: {
    outDir: 'docs',
  }
})