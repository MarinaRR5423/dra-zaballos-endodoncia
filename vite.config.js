import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        adressage: resolve(import.meta.dirname, 'adressage/index.html'),
      },
    },
  },
})
