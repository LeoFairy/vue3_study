import { ref,onMounted,computed } from 'vue';
export default function(){
  //数据
  let sum = ref(0)
  let bigSum = computed(()=>{
    return sum.value *10
  })
  //方法
  function add() {
    sum.value += 1
  }
  //钩子
  onMounted(()=>{
    add()
  })
  //向外部暴露
  return {sum,add,bigSum}
}