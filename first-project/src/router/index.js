import Router from "vue-router";
import Vue from "vue";
import Nprogress from "nprogress";
import "nprogress/nprogress.css"

Vue.use(Router)

import home from "../components/home";

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:home,
            name:"home",
          //声明页面标题
          meta:{
              title:'首页'
          }
        },
        // 动态路由匹配
        {
            path:'/about/:id',
            component:()=>import('../components/about'),
            name:"详情",
            meta:{
              title:'详情'
            },
        },
        {
            path:'/login',
            component:()=>import('../components/login'),
            name:'login',
            meta:{
              title:'登录'
            },
        }
    ]
})

// 当前路由加载前
router.beforeEach((to,from,next)=>{
  Nprogress.start();
  // console.log('to',to);
  // console.log('from',from);
  // 必须调用next挂载页面
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to,from)=>{
  Nprogress.done();
})

export default router;
