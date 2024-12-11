<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <button @click="changeCar">修改汽车</button>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>

  </div>
</template>

<script setup lang="ts" name="Person123">
import { reactive, ref } from 'vue';

//数据
let car = reactive({
  brand: '奔驰',
  price: 100
})

let sum = ref(0)

//方法
function changePrice() {
  car.price += 10
}
function changeCar() {
  // car = { brand: '奥拓', price: 1 } //重新分配以后不是响应式的了
  Object.assign(car, { brand: '奥拓', price: 1 })
}
function changeSum() {
  sum.value += 1
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
