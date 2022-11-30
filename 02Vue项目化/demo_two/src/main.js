import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // el: '#app', 
  render: h => h(App),
}).$mount('#app')  //$mount('#app')  指定渲染的范围
