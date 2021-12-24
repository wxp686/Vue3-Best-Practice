/*
 * @Description: 
 * @Autor: wxp
 * @Date: 2021-12-22 14:30:35
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-23 13:51:49
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

interface ImportMetaEnv {
  readonly VITE_CC: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}