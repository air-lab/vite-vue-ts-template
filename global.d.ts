/// <reference types="vite/client" />

declare type EnvConfig = {
  TEST: string
}

interface ImportMeta extends EnvConfig {
  readonly env: ImportMetaEnv
}

declare module '*.vue' {
  import { defineComponent } from 'vue'
  export default defineComponent
}
