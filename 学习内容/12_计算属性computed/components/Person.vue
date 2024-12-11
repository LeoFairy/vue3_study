<template>
  <div class="person">
    姓： <input type="text" v-model="firstName"><br>
    名：<input type="text" v-model="lastName"><br>
    <button @click="changeFullName"> 将全名更改为li-si</button>
    <br>
    全名：<span>{{ fullName }}</span>
  </div>
</template>


<script setup lang="ts" name="Person123">
import { ref, computed } from 'vue'

let firstName = ref('zhang')
let lastName = ref('san')

//方法没有缓存 computed是有缓存的 ， 只有依赖的属性发生变化的时候才会改变
// 只可读不可修改的计算属性：
/* let fullName = computed(() => {
  return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
}) */

//可读可以修改的计算属性：
let fullName = computed({
  get() {
    return firstName.value.slice(0, 1).toUpperCase() + firstName.value.slice(1) + '-' + lastName.value
  },
  set(val) {
    const [str1, str2] = val.split('-')
    firstName.value = str1
    lastName.value = str2
    console.log('set');

  }
})


function changeFullName() {
  console.log(fullName.value);
  fullName.value = 'li-si'
}
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
