<template>
  <div class="">
    <h3>首页</h3>
    <router-link :to="{path:'/login',query:{userinfo:'Name is Tom'}}">跳转到登录</router-link>
  </div>
</template>

<script>
export default {
  name:'home',
  created(){
    console.log(this.$router)
    console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$route.params)
  },
  data() {
      return {

      }
   },
  components: {

  }
}
</script>

<style>
</style>
