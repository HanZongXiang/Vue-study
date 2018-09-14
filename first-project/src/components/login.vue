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
  created(){
    // console.log(this.$router)
    // console.log(this.$route)
    console.log(this.$route.query)
    console.log(this.$route.params)
  },
  data() {
      return {
        username:'',
        password:''
      }
   },
   methods:{
       handleSubmit(){
         axios.post('http://localhost:3000/login',{
           username:this.username,
           password:this.password
         }).then(res=>{
           if(res.data.code == 200){
             alert('登录成功');
             this.$router.push('/main/home')
           }else{
             alert('登录失败')
           }
         })
       }
   },
  components: {

  }
}
</script>

<style>
button{
    width: 100px;
    height: 50px;
    border-radius:4px;
    background-color: #000;
    color:#fff;
    line-height: 50px;
    text-align: center;
    font-size: 22px;
    border:none;
    outline:none;  
  }
</style>
