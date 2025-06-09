import { defineConfig } from 'vite'

export default defineConfig({
  root: '.', // root folder where index.html is
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})
