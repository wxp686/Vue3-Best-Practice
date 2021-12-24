/*
 * @Description: 
 * @Autor: wxp
 * @Date: 2021-12-22 14:30:35
 * @LastEditors: wxp
 * @LastEditTime: 2021-12-24 12:15:20
 */
import { createApp, h, render } from 'vue'
import http from './http'
import router from './router'
import store, { key } from './store'
import myWorker from './pages/worker.ts?worker'
import App from './App.vue'
import { returnErrorDom } from './utils/index'

// 批量导入
const modules = import.meta.glob('./pages/*.vue')
console.log(modules)

// web worker
const worker = new myWorker()
console.log('worker', worker)

const app = createApp(App)

app.use(http).use(router).use(store, key)

// 全局错误处理
app.config.errorHandler = (err, vm, info) => {
  console.log(err, vm, info)
}

// mixin
app.mixin({
  errorCaptured(err, vm, info) {
    if (info === 'render function' && vm?.$el) {
      // 解决在mounted后导致的渲染错误而引发组件坍塌的问题
      const offsetHeight = vm?.$el.offsetHeight
      const offsetWidth = vm?.$el.offsetWidth
      const cloneNode = returnErrorDom.cloneNode(true) as HTMLDivElement
      cloneNode.style.width = offsetWidth + 'px'
      cloneNode.style.height = offsetHeight + 'px'
      vm?.$el.parentNode.insertBefore(cloneNode, vm?.$el.nextSibling)
    }
    return false
  },
  mounted() {
  }
})

app.mount('#app')
