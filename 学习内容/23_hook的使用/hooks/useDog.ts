import {reactive,onMounted} from 'vue';
import axios from 'axios';

export default function (){
  //数据
  let dogList = reactive([
    'https://images.dog.ceo//breeds//pembroke//n02113023_3913.jpg'
  ])
  //方法
  async function getDog() {
    /*   axios.get('https://dog.ceo/api/breed/pembroke/images/random').then(
        response =>{},
        error =>{}
      ) */
    try {
      let result = await axios.get('https://dog.ceo/api/breed/pembroke/images/random')
      console.log(result.data.message);
      dogList.push(result.data.message)
    } catch (error) {
      alert(error)
    }
  }
  //钩子
  onMounted(()=>{
    getDog()
  })
  //向外提供东西
  return {dogList,getDog}
}