import type { RouteRecordRaw } from 'vue-router'
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home/index.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/expandCard',
    name: 'expandCard',
    component: () => import(/* webpackChunkName: "expandCard" */ '../views/expandCard/index.vue'),
  },
  {
    path: '/progressStep',
    name: 'progressStep',
    component: () => import(/* webpackChunkName: "progressStep" */ '../views/progressStep/index.vue'),
  },
  {
    path: '/rotateNavigation',
    name: 'rotateNavigation',
    component: () => import(/* webpackChunkName: "rotateNavigation" */ '../views/rotateNavigation/index.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
