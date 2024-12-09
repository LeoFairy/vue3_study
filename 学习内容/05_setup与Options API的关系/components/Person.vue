<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel"> 查看联系方式</button>
    <hr>
    <h2>测试:{{ a }}</h2>
    <h2>测试:{{ c }}</h2>

    <button @click="test">测试 </button>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Person',
    data () {
      return {
        a: 100,
        c:this.name
      }
    },
    methods: {
      test() { 
        console.log('~~')
      }
    },
    setup() {
      //setup中的this是 undefined
      //数据  此时数据不是响应式的
      let name = '张三'
      let age = 18
      let tel = '138888888888'

      //方法
      function changeName() { 
        name = 'zhang-san' //修改了name， 页面还没变化
        
      }
      function changeAge() { 
        age += 1 //修改了age， 页面还没变化
        
      }
      function showTel() { 
        alert(tel)

      }

      return {
        name,age,changeName,changeAge,showTel
      }

      //setup的返回值也可以是一个渲染函数
      //return ()=>'哈哈'
    },
  } 
</script>

<style scoped>
  .person{
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
  }
  button{
    margin:0 5px
  }
</style >