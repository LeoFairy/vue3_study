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
      talkList:JSON.parse(localStorage.getItem('talkList') as string) || []
    }
  }
})