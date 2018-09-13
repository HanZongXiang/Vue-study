<template>
  <div class="">
    <h3>首页</h3>
    <router-link :to="{path:'/login',query:{userinfo:'Name is Tom'}}">跳转到登录</router-link>
    <br>
    <button class="my-btn" @click="handleGetData">发送数据</button>
    <button class="my-btn" @click="getJsonp">获取jsonp数据</button>
    <button class="my-btn" @click="getJsonp2">插件获取jsonp数据</button>
    <button class="my-btn" @click="getNoSimple">post非简单请求</button>
    <button class="my-btn" @click="handleVue">vue脚手架跨域</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name:'home',
  methods:{
    handleGetData(){
      axios.get('http://localhost:3000/getMsg',{withCredentials:true}).then(res => {
        console.log(res);
      }).catch(err => {
        console.log('err',err);
      })
    },
    getJsonp(){
      let script = document.createElement('script');
      let body = document.body;
      script.src = 'http://localhost:3000/getJsonp?callback=getData';
      body.appendChild(script)
    },
    getJsonp2(){
      /* jsonp('http://localhost:3000/getJsonp',{
        param:'callback',
        name:'getData'
      },function getData(res) {
        console.log(res);
      }) */
    },
    getNoSimple() {
      axios.post('http://localhost:3000/noSimple',{username:'wangcai'},{withCredentials:true}).then(res => {
        console.log(res);
      })
    },
    handleVue() {
      axios.get('/api/getMsg').then(res => {
        console.log(res);
      })
    }
  },
  created(){
    // console.log(this.$router)
    // console.log(this.$route)
    // console.log(this.$route.query)
    // console.log(this.$route.params)
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
.my-btn{
  width: 100px;
  height: 50px;
  border-radius:4px;
  background-color: #000;
  color:#fff;
  line-height: 50px;
  text-align: center;
  border:none;
  outline:none;
}
.my-btn:active{
  background-color: #3a8ee6;
}
</style>
