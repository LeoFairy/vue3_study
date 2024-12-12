<template>
  <div class="app">
    <h2 id="title2">你好</h2>
    <h1 ref="title1">你好</h1>
    <button @click="showLog">点我输出h1这个元素</button>
    <button @click="showLog3">测试</button>
    <Person ref="ren" />
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref } from 'vue';

let title1 = ref()
let ren = ref()

function showLog() {
  console.log(title1.value);
}

function showLog3() {
  console.log(ren.value); //ref放在组件上，会出现person组件的实例对象， 但是内容会被保护起来

  //子组件如果使用defineExpose暴露 才可以展示
}

</script>


<style scoped></style>
