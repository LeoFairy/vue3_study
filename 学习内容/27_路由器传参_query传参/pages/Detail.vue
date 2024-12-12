<template>
  <ul class="news-list">
    <li>编号：{{ query.id }}</li>
    <li>标题：{{ query.title }}</li>
    <li>内容：{{ query.content }}</li>
  </ul>
</template>

<script setup lang="ts" name="About">
import { toRefs } from 'vue';
import { useRoute } from 'vue-router'

let route = useRoute()
console.log('~', route);
// 从响应式数据上解构得到的数据会失去响应式  所以要用toRefs 使其仍然是响应式的数据
let { query } = toRefs(route)

</script>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list>li {
  line-height: 30px;
}
</style>