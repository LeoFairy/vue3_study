<template>
  <div class="person">
    <h2>需求：当水温达到80度，或者水位达到80cm，给服务器发送请求</h2>
    <h2>当前水温：{{ temp }}℃</h2>
    <h2>当前水位：{{ height }}cm</h2>
    <button @click="changeTemp">点我水温+10</button>
    <button @click="changeHeight">点我水位+10</button>
  </div>
</template>

<script setup lang="ts" name="Person123">

import { ref, watch, watchEffect, } from 'vue';
//数据
let temp = ref(10)
let height = ref(0)
//方法
function changeTemp() {
  temp.value += 10
}
function changeHeight() {
  height.value += 10
}

//监视： watch实现   必须指定需要监视谁
watch([temp, height], (Value) => {
  // console.log('水温或水位发生变化', Value);
  let [newTemp, newHeight] = Value
  if (newTemp >= 60 || newHeight >= 80) {
    console.log('给服务器发送请求');
  }
})

//监视： watchEffect实现  要用到谁就会自动监视谁
watchEffect(() => {
  if (temp.value >= 60 || height.value >= 80) {
    console.log('给服务器发送请求');
  }
})

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
