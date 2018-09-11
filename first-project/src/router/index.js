import Router from "vue-router";
import Vue from "vue"

Vue.use(Router)

import home from "../components/home";

const router = new Router({
    mode:'history',
    routes:[
        {
            path:'/',
            component:home,
            name:"home"
        },
        // 动态路由匹配
        {
            path:'/about/:id',
            name:"详情",
            component:()=>import('../components/about')
        },
        {
            path:'/login',
            name:'login',
            component:()=>import('../components/login')
        }
    ]
})

export default router;