<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkstore.talkList" :keys="talk.id">
        {{ talk.title }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts" name="LoveTalk">
import { reactive } from 'vue';
import axios from 'axios';
import { nanoid } from 'nanoid';
import { useTalkStore } from '../store/lovetalk';

const talkstore = useTalkStore()

async function getLoveTalk() {
  /* //下面这个写法是连续解构+重命名
    let { data:{content:title} } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
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