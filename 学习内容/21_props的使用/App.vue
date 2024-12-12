<template>
  <div class="app">
    <Person a="哈哈" :list="personList" />
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { reactive } from 'vue';
import { type Persons } from '@/types'

let personList = reactive<Persons>([
  { id: '1', name: '张三', age: 60 },
  { id: '2', name: '李四', age: 6 },
  { id: '3', name: '王五', age: 60, }
])


</script>

<style></style>
