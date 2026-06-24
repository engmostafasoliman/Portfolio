import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Deployed to GitHub Pages at https://engmostafasoliman.github.io/Portfolio/
// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  plugins: [react()],
  build: {
    target: 'es2020',
  },
})
