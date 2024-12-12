<template>
  <div class="app">
    <Person v-if="isShow" />
  </div>
</template>

<script lang="ts" setup name="App">
import Person from './components/Person.vue'
import { ref, onMounted } from 'vue';
let isShow = ref(true)

//挂载
onMounted(() => {
  console.log('子-挂载完毕');
})
</script>

<style></style>
