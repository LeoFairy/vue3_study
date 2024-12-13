import { defineStore } from "pinia";

export const useCountStore = defineStore('count',{
  //actions；里面放置的方法 用于响应组件中的动作
  actions:{
    increment(value:number){
      console.log('increment调用了',value);
      //修改数据
      if(this.sum<10){
        console.log(this.sum); //this指的是当前的store
        this.sum+=value 
     }
    }
  },
  //真正存储数据的地方
  state(){
    return{
      sum:6,
      school:'vue',
      address:'北京',
    }
  },
  getters:{
    bigSum :state => state.sum *10,
/*     upperSchool(state){
      return state.school.toUpperCase()
    } */
    upperSchool():string{
      return this.school.toUpperCase()
    }
  }
})