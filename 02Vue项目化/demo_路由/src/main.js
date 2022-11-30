import Vue from 'vue'
import App from './App.vue'
// 导入路由模块
import router from '@/router/index.js'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 在 Vue 项目中，想要把路由用起来，必须把路由实例对象，通过下面的方式进行挂载
  // router：路由实例对象
  router
}).$mount('#app')
