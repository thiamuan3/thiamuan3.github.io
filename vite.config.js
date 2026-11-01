import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

// Build output goes to docs/ — GitHub Pages serves this repo from master/docs (plan D1).
export default defineConfig({
  base: '/',
  plugins: [vue(), tailwindcss()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
  },
})
