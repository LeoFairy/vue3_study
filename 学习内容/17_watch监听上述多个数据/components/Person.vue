<template>
  <div class="person">
    <h2>情况五： 监视上述的多个数据</h2>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <h2>汽车:{{ person.car.c1 }}</h2>
    <h2>汽车:{{ person.car.c2 }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改车</button>
  </div>
</template>

<script setup lang="ts" name="Person123">
import { reactive, watch } from 'vue'
//数据
let person = reactive({
  name: '张三',
  age: 18,
  car: {
    c1: '奔驰',
    c2: '宝马',
  }
})

function changeName() {
  person.name += '~'
}
function changeAge() {
  person.age += 1
}
function changeC1() {
  person.car.c1 = '奥迪'
}
function changeC2() {
  person.car.c2 = '大众'
}
function changeCar() {
  person.car = { c1: '雅迪', c2: '爱玛' }   //修改整个person 需要用Object.assign 但修改的是person里的属性就不用
}

// 情况五：监视上述的多个数据
watch([() => person.name, () => person.car.c1], (newValue, oldValue) => {
  console.log('person.name变化了', newValue, oldValue);

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