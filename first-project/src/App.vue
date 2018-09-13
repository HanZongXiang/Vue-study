<template>
  <div id="app">
     <!-- <img src="./assets/logo.png">
    &lt;!&ndash; <HelloWorld/> &ndash;&gt;
    <router-view></router-view>
    <div>
      <ul>
        <li>
          <router-link v-bind:to='{name:"home"}'>首页</router-link>
        </li>
        <li>
          <router-link :to='{name:"详情",params:{id:"动态参数"}}'>详情页</router-link>
        </li>
        &lt;!&ndash; <a href="/about/110">a详情页</a> &ndash;&gt;
        <li>
          <router-link to='/login'>登录</router-link>
        </li>
      </ul>
    </div> -->
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
*{margin:0;padding: 0;}
/*#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
</style>
