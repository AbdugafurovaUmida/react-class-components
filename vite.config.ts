import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@components': path.resolve(__dirname, './src/core/components'),
      '@api': path.resolve(__dirname, './src/core/api'),
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
})
