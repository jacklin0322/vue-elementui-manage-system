import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import 'lib-flexible'
import App from './App.vue'

// store
import store from '@/store/index'

// 菜单和路由设置
import router from './router'
import { frameInRoutes } from '@/router/routes'

Vue.config.productionTip = false
Vue.use(Element);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
