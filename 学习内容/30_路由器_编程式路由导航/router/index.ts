//创建一个路由器，并暴露出去

//第一步：引入createRouter
import {createRouter,createWebHistory,createWebHashHistory} from 'vue-router'

//引入路由组件
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import News from '../pages/News.vue'
import Detail from '../pages/Detail.vue'

//第二步： 创建路由器
const  router = createRouter({
  history:createWebHistory(), //路由器的工作模式
  // history:createWebHashHistory(),
  //路由规则
  routes:[
    {
      name:'zhuye',
      path:'/home',
      component:Home
    },
     {
      name:'xinwen',
      path:'/news',
      component:News,
      children:[
        { 
          name:'xiang',
          path:'detail', //子路由路径不用写/
          component:Detail,

          //第一种写法， 将路由收到的所有params参数作为props传给路由组件 【要用defineProps接收】
          // props:true

          // 第二种写法:函数写法 可以自己决定内容  作为props传给路由
          props(route){
            return route.query
          }


          // 第三种写法： 对象写法 （会写死内容 不推荐）
      /*     props:{
            a:100,
            b:200
          } */
        }
      ]
    },
     {
      name:'guanyu',
      path:'/about',
      component:About
    },
    /* 路由重定向 */
    {
      path:'/',
      redirect:'/home'
    }
  ]
})

//暴露出去
export default router