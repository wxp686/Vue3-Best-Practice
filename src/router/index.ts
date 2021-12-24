import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
// **
const routes: RouteRecordRaw[] = [
  {
    path: '/ceshi',
    component: () => import('../pages/ceshi.vue'),
  },
  {
    path: '/helloWorld',
    component: () => import('../pages/HelloWorld.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../pages/not.vue')
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})