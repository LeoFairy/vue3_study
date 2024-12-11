<template>
  <div class="person">
    <h2>一辆{{ car.brand }} 价值{{ car.price }}万</h2>
    <button @click="changePrice">修改汽车的价格</button>
    <br>
    <h2>游戏列表：</h2>
    <ul>
      <li v-for="game in games" :key="game.id">{{ game.name }}</li>
    </ul>
    <button @click="changeFirstGame"> 修改第一个游戏的名字</button>
    <hr>
    <h2> 测试：{{ obj.a.b.c }}</h2>
    <button @click="changeObj">测试</button>
  </div>
</template>

<script setup lang="ts" name="Person123">
import { reactive } from 'vue';

let car = reactive({
  brand: '奔驰',
  price: 100
})
let games = reactive([
  { id: '001', name: '王者荣耀' },
  { id: '002', name: '原神' },
  { id: '003', name: '蛋仔派对' },
])
let obj = reactive({
  a: {
    b: {
      c: 666
    }
  }
})

function changePrice() {
  car.price += 10
}
function changeFirstGame() {
  games[0].name = '英雄联盟'
}
function changeObj() {
  obj.a.b.c = 777
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
