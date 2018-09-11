<template>
  <div class="">
      <h3>详情页</h3>
      动态路由参数{{$route.params.id}}
  </div>
</template>

<script>
export default {
  name:'about',
  // 实例对象创建之后页面未挂载之前触发
  created(){
      console.log(this.$route.params.id);
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
