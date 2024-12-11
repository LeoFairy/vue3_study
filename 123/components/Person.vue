<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
  </div>
</template>

<script setup lang="ts" name="Person123">
import { ref } from 'vue';

let car = ref({
  brand: '奔驰',
  price: 100
})


function changePrice() {
  car.value.price += 10
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
