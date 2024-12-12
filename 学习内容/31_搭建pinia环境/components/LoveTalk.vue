<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :keys="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
let talkList = reactive([
  { id: '01', title: '你今天有点怪，怪可爱的' },
  { id: '02', title: '心里给你留了一块地，我的死心塌地' },
  { id: '03', title: '蓝莓草莓蔓越莓，今天你想我了没' },
])

async function getLoveTalk() {

  let { data } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  // console.log(result.data.content);
  let obj = { id: nanoid(), title: data.content }
  //放到数组中
  talkList.unshift(obj)

  //下面这个写法是连续解构+重命名
  /*   let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
    // console.log(result.data.content);
    let obj = { id: nanoid(), title}
    talkList.unshift(obj) */

}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>