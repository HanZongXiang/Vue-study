import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/test')
    },
    {
      path: '/second',
      component: () => import('@/views/second')
    },
    {
      path: '/third',
      component: () => import('@/views/third')
    }
  ]
})
