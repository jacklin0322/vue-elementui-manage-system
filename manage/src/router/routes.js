import layoutCommon from '@/layout/common'
/**
 * 主框架页面
 */
const frameIn = [
  {
    path: '/',
    redirect: { name: 'index' },
    component: layoutCommon,
    children: [
      {
        path: 'index',
        name: 'index',
        meta: {
          auth: true
        }
        // component: import('')
      }
    ]
  }
]
/**
 * 主框架外页面
 */
const frameOut = [
  // Login
  {
    path: '/login',
    name: 'login'
    // component: import('')
  }
]
/**
 * 错误页面
 */
const errorPage = [
  {
    path: '*',
    name: '404'
    // component: import('')
  }
]
export default [
  ...frameIn,
  ...frameOut,
  ...errorPage
]
