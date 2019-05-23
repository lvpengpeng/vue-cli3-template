<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import { getActivityInfo } from "../service/api/home";
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  async created(){
    const user={
      activityId: "5ce655f8166f5807ab14f421",
      userId: "20150227010000008482"
    }
    const { activityInfo } = await getActivityInfo();
    console.log(activityInfo)
  }
}
</script>
