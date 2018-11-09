import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const components = {
  layout:() => import('@/views/layout')
}

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name:'layout',
      component:components.layout
    }
  ]
})
