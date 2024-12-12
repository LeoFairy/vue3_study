import { defineStore } from "pinia";

export const useTalkStore = defineStore('talk',{
  //真正存储数据的地方
  state(){
    return{
      talkList:[
        { id: '01', title: '你今天有点怪，怪可爱的' },
        { id: '02', title: '心里给你留了一块地，我的死心塌地' },
        { id: '03', title: '蓝莓草莓蔓越莓，今天你想我了没' },
      ]
    }
  }
})