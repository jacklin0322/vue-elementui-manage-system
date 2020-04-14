import Vue from 'vue'
import App from './App.vue'

// Element-UI
// import { Button, Select, Message } from 'element-ui'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// store
import store from './store'
// px2rem
import 'lib-flexible'

// 菜单和路由设置
import router from './router'
import menuHeader from '@/menu/header'
import menuAside from '@/menu/aside'
import { frameInRoutes } from '@/router/routes'

Vue.config.productionTip = false
// Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
// Vue.prototype.$message = Message
// Vue.use(Button)
// Vue.use(Select)
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
