<template>
  <div class="">
      <h1>登录页面</h1>
      用户名：<input type="text" v-model='username'>
      <br>
      密码：<input type="password" v-model="password">
      <br>
      <button @click="handleSubmit">点击登录</button>
  </div>
</template>

<script>
import  axios  from "axios";

export default {
  name:"login",
  data() {
      return {
        username:'',
        password:''
      }
   },
   methods:{
       handleSubmit(){
         axios.post('http://localhost:3000/login').then(res=>{
           if(res.data.code == 200){
             alert('登录成功'),
             this.$router.push('/')
           }
         })
       }
   },
  components: {

  }
}
</script>

<style>
</style>
