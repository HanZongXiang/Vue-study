<template>
  <div>
    <div class="top">
      <h3>首页</h3>
      <router-link :to="{path:'/login',query:{userinfo:'Name is Tom'}}">跳转到登录</router-link>
      <br>
      <button class="my-btn" @click="handleGetData">发送数据</button>
      <button class="my-btn" @click="getJsonp">获取jsonp数据</button>
      <button class="my-btn" @click="getJsonp2">插件获取jsonp数据</button>
      <button class="my-btn" @click="getNoSimple">post非简单请求</button>
      <button class="my-btn" @click="handleVue">vue脚手架跨域</button>
    </div>

    <div class="divider"></div>

    <div class="counter" style="border:1px solid #000;display:flex">
      <!-- <comA :price="price" :count="count"></comA>
      <comB :count="count" @add="add" @reduce="reduce"></comB> -->
      <comA></comA>
      <comB></comB>
      <h2>单价：{{this.$store.state.price}}</h2>
    </div>

    <div class="divider"></div>
    <div>
      <input type="text" name="" id="" v-model="count">
      <button class="my-btn" @click="CHANGE_COUNT(count)">改变值</button>
      <br>
      <button class="my-btn" @click="handleAsync">异步操作</button>
    </div>
  </div>
</template>

<script>
import comA from './comA';
import comB from './comB';
import { mapMutations } from "vuex";
import axios from "axios";

export default {
  name:'home',
  components: {
    comA,
    comB
  },
  data () {
    return {
      count:0,
      // price:20
    }
  },
  methods:{
    // changeCount () {
    //   this.$store.commit('CHANGE_COUNT',this.count)
    // },
    ...mapMutations(['CHANGE_COUNT']),
    handleGetData () {
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
    },
    // reduce () {
    //   this.count--
    // },
    // add () {
    //   this.count++
    // }
    handleAsync () {
    //   setTimeout(() => {
    //     this.CHANGE_COUNT(this.count)
    //   },2000)
      this.$store.dispatch('handleAsyncAction',8888)
    }
  },
  created(){
    // console.log(this.$router)
    // console.log(this.$route)
    // console.log(this.$route.query)
    // console.log(this.$route.params)
  },
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
h2{
  margin:35px 0 0 10px;
}
.counter{
  justify-content: space-around
}
.top{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.divider{
  width: 100%;
  margin:100px 0;
  height: 3px;
  background: black;
}
input{height: 48px;font-size: 26px;}
</style>
