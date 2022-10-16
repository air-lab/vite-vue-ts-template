import path from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [
      {
        find: '@app',
        replacement: path.resolve('./src/app')
      },
      {
        find: '@assets',
        replacement: path.resolve('./src/assets')
      }
    ]
  }
})
