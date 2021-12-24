/*
 * @Description: 
 * @Autor: wxp
 * @Date: 2021-12-23 13:57:06
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-23 13:57:06
 */
import { StateType } from './store'
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'
import { AxiosInstance } from 'axios'
declare module '@vue/runtime-core' {
  // 声明自己的 store state
  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<StateType>
    $http: AxiosInstance
  }
}