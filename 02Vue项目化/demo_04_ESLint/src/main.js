import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

Vue.config.productionTip = false

// 全局配置 axios 的请求根路径
axios.defaults.baseURL = 'http://www.liulongbin.top:3006'
// 把 axios 挂载到 Vue.prototype 上，供每个 .vue 组件的实例直接使用
Vue.prototype.$http = axios

new Vue({
  render: (h) => h(App)
}).$mount('#app')
