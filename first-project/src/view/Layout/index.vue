<template>
  <div class="container">
    <div class="header">
      <h3>头部</h3>
    </div>
    <div class="nav">
      <ul>
        <li>
          <router-link :to="{name:'home1'}">首页</router-link>
        </li>
        <li>
          <router-link to="about/998">详情页</router-link>
        </li>
        <li>
          <router-link :to="{name:'login1'}">登录页</router-link>
        </li>
      </ul>
    </div>
    <div class="main-content">
      <!--<h3>页面主题内容</h3>-->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
      name: "index"
  }
</script>

<style scoped lang="scss">
  $width:200px;
  .header{
    text-align: center;
    padding-left:$width;
    background: #0ff;
    height: 20%;
  }
  .nav{
    position: fixed;
    z-index: 999;
    top:0;
    bottom:0;
    left:0;
    width: $width;
    background:#273647 ;
  }
  .main-content{
    padding-left:$width;
    text-align: center;
    background: #409eff;
    height: 80%;
  }
  .nav{
    ul{
      padding-left:0;
    }
    li{
      list-style: none;
      height: 30px;
      width: $width;
      text-align: center;
    }
    a{
      text-decoration: none;
      color:#fff;
      font-size:16px;
      font-weight: bold;
      width: $width;
    }
  }
</style>
