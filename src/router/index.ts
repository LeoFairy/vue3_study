//创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter,createWebHistory} from 'vue-router'

//引入路由组件
import Home from '../components/Home.vue'
import About from '../components/About.vue'
import News from '../components/News.vue'

//第二步： 创建路由器
const  router = createRouter({
  history:createWebHistory(), //路由器的工作模式
  //路由规则
  routes:[
    {
      path:'/home',
      component:Home
    },
     {
      path:'/news',
      component:News
    },
     {
      path:'/about',
      component:About
    },
  ]
})

//暴露出去
export default router