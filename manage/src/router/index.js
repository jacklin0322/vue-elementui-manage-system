import Vue from 'vue'
import VueRouter from 'vue-router'

// import store from '@/store/index'
// import Home from '../views/Home.vue'
// Vue.use(VueRouter)

// 导入路由数据
import routes from './routes'

Vue.use(VueRouter)

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home
//   },
//   {
//     path: '/about',
//     name: 'About',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
// ]

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  routes
})

export default router
