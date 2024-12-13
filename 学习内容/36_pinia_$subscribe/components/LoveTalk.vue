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
import { useTalkStore } from '../store/lovetalk';
import { storeToRefs } from 'pinia';

const talkstore = useTalkStore()
const { talkList } = storeToRefs(talkstore)

talkstore.$subscribe((mutate, state) => {
  console.log('talkstore里面的数据发生变化');
  localStorage.setItem('talkList', JSON.stringify(state.talkList))

})

function getLoveTalk() {
  talkstore.getTalk()
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