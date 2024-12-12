<template>
  <div class="person">
    ???
  </div>
</template>

<script setup lang="ts" name="Person">
import { type PersonInter, type Persons } from '../types/index'

// let person: PersonInter = {id: '1',name: '张三',age: 60} 

// personList是一个数组， 并且里面每一项都符合PersonInter接口规范
/* let personList: Array<PersonInter> = [
  { id: '1', name: '张三', age: 60 },
  { id: '2', name: '李四', age: 6 },
  { id: '3', name: '王五', age: 60 }
] */

//在ts文件中指定好类型之后，此处可直接使用
let personList: Persons = [
  { id: '1', name: '张三', age: 60 },
  { id: '2', name: '李四', age: 6 },
  { id: '3', name: '王五', age: 60 }
]

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
