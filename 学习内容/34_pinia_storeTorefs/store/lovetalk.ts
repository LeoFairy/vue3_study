import { defineStore } from "pinia";
import axios from "axios";
import { nanoid } from "nanoid";

export const useTalkStore = defineStore('talk',{
  actions:{
    async getTalk(){
      //下面这个写法是连续解构+重命名
      let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
      // console.log(result.data.content);
      let obj = { id: nanoid(), title}
      this.talkList.unshift(obj)
    }
  },
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