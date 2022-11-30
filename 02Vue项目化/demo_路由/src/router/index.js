import Vue from 'vue'
import VueRouter from 'vue-router'
import Left from '@/components/Left.vue'
import Movie from '@/components/movie.vue'
import Right from '@/components/Right.vue'
import Login from '@/components/login.vue'
import Main from '@/components/main.vue'

import Tab1 from '@/components/tab/tab1.vue'
import Tab2 from '@/components/tab/tab2.vue'

// 把 VueRouter 安装为 Vue 项目的插件
Vue.use(VueRouter)

// 创建路由的实例对象 
const router = new VueRouter({
  // 路由对应关系
  routes: [
    // 路由规则
    { path: '/', redirect: '/left' },
    { path: '/left', component: Left },
    // :mid--动态参数，用于传输对应的电影id
    // 可以为路由规则开启 props 传参，方便拿到动态参数的值
    { path: '/movie/:mid', component: Movie, props: true },
    {
      path: '/right',
      component: Right,
      // 重定向
      redirect: '/right/tab1',
      children: [
        // 默认子路由
        // { path: '', redirect: 'tab1' },
        { path: 'tab1', component: Tab1 },
        { path: 'tab2', component: Tab2 }
      ]
    },
    { path: '/login', component: Login }, 
    { path: '/main', component: Main }
  ]
})

// 为 router 实例对象，声明全局前置导航守卫
// 只要发生了路由的跳转，必然会触发 beforeEach 指定的 function 回调函数
router.beforeEach(function (to, from, next) {
  // to：将要访问的路由的信息对象，from：将要离开的路由的信息对象，next()：路由放行
  if (to.path === '/main') {
    // 判断是否有 token
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else { 
      next('/login')
    }
  } else { 
    // 路由不是后台主页，直接放行
    next()
  }
})

export default router