<template>
  <div class="person">
    <h1 ref="title1">中国</h1>
    <h2 id="title2"> 北京</h2>
    <h3>vue</h3>
    <button @click="showLog1">点我输出h2这个元素（使用id 不推荐会冲突）</button>
    <button @click="showLog2">点我输出h1这个元素 （使用ref）</button>
  </div>
</template>

<script setup lang="ts" name="Person123">
import { ref, defineExpose } from 'vue';

//创建一个title1,用于存储ref标记的内容
let title1 = ref()
let a = ref(0)
let b = ref(1)
let c = ref(2)

function showLog1() {
  console.log(document.getElementById('title2')); // 会出现id冲突问题， 与其他组件冲突 只会有第一个使用的出现
}

function showLog2() {
  console.log(title1.value); // 会出现id冲突问题， 与其他组件冲突 只会有第一个使用的出现
}

defineExpose({ a, b, c })
</script>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

li {
  font-size: 20px;
}
</style>
