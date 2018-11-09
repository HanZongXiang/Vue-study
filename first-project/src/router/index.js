import Router from "vue-router";
import Vue from "vue";
import Nprogress from "nprogress";
import "nprogress/nprogress.css"

Vue.use(Router)

import home from "../components/home";
import index from "@/view/index";

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
        {
          path: '/index',
          component: index,
          name: "index",
          //声明页面标题
          meta: {
            title: '组件'
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
        },
        {
            path:'/main',
            component:()=>import('../view/Layout/index'),
            name:'main',
            meta:{
              title:'主页'
            },
            redirect:'./main/home',
            children:[
              {
                path:'home',
                component:home,
                name:"home1",
                //声明页面标题
                meta:{
                  title:'首页'
                }
              },
              // 动态路由匹配
              {
                path:'about/:id',
                component:()=>import('../components/about'),
                name:"about1",
                meta:{
                  title:'about1'
                },
              },
              {
                path:'login',
                component:()=>import('../components/login'),
                name:'login1',
                meta:{
                  title:'登录'
                },
              },
              {
                path:'vuexDemo',
                component: () => import('../components/vuexDemo'),
                name:'demo1',
                meta:{
                  title:'vuexDemo'
                }
              }
            ]
        },
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
