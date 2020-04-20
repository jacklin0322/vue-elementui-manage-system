import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store/index'
import util from '@/libs/util.js'

// 路由数据
import routes from './routes'

// fix vue-router NavigationDuplicated
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return VueRouterPush.call(this, location).catch(err => err)
}
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (location) {
  return VueRouterReplace.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

// 导出路由 在 main.js 里使用
const router = new VueRouter({
  mode: 'history',
  routes
})

/**
 * 路由守卫
 * 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登录
 */
router.beforeEach((to, from, next) => {

  // 验证当前路由 否需要登录验证
  if (to.matched.some(r => r.meta.auth)) {
    // 这里暂时将cookie里是否存有token作为验证是否登录的条件
    // 请根据自身业务需要修改
    const token = util.cookies.get('token')
    console.log('token---', token)
    if (token && token !== 'undefined') {
      next()
    } else {
      // 没有登录的时候跳转到登录界面
      // 携带上登陆成功之后需要跳转的页面完整路径
      next({
        name: 'login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  } else {
    // 不需要身份校验 直接通过
    next()
    router.push('/')
  }
})

router.afterEach(to => {  
  // 更改标题
  util.title(to.meta.title)
})

export default router