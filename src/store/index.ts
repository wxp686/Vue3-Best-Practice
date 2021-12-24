/*
 * @Description:
 * @Autor: wxp
 * @Date: 2021-12-23 11:37:03
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-23 12:17:58
 */
import { createStore, Store, useStore as baseUseStore } from "vuex"
import { InjectionKey } from 'vue';
import ceshi, { stateType as ceshiStateType } from './ceshi'

export interface StateType {
  ceshi: ceshiStateType
}

export const key: InjectionKey<Store<StateType>> = Symbol()

const store = createStore<StateType>({
  modules: {
    ceshi: ceshi
  }
})

export function useStore() {
  return baseUseStore(key)
}
export default store