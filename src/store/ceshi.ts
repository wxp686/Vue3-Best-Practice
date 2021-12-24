/*
 * @Description: 
 * @Autor: wxp
 * @Date: 2021-12-23 11:42:43
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-23 12:29:19
 */
import type { Module } from "vuex"

export interface stateType {
  count: 1
}

const ceshi: Module<stateType, any> = {
  namespaced: true,
  state: {
    count: 1
  },
  mutations: {
    add(state) {
      console.log(state.count)
      state.count++
    }
  }
}

export default ceshi