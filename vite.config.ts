import { resolve } from 'node:path'

import { defineConfig } from 'vite'

import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'

const alias = [
  { find: '@app', replacement: resolve('./src/app') },
  { find: '@assets', replacement: resolve('./src/assets') }
]

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy({
      targets: ['defaults', 'not IE 11', 'Edge 15-18', 'Safari > 9.1', 'chrome >= 50']
    })
  ],
  resolve: {
    alias
  }
})
