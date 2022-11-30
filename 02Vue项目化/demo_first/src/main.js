// 导入vue包  得到 Vue 构造函数
import Vue from 'vue'
// 导入 App.vue 根组件，将来要把 App.vue 中的模板结构，渲染到HTML页面中
import App from './App.vue'
import count from './components/count.vue'
import lifecycle from '@/components/lifeCycle.vue'
// 定义全局的组件
Vue.component('MyCount', count);
Vue.component('lifeCycle',lifecycle);

Vue.config.productionTip = false

// 创建 Vue 的实例函数
// new Vue({
//   render: h => h(App),
// }).$mount('#app')
new Vue({
  el: '#app',
  render: h => h(App),
})
