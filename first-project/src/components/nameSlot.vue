<template>
  <div class="box clearfix">
    <div class="left">
      <slot></slot>
    </div>
    <div class="right">
      <slot name="right" :msg="changeText">
        <!-- {{text}} -->
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name:'',
  props: {
    text:String
  },
  data() {
    return {

    }
  },
  computed: {
    changeText() {
      return this.text + '子组件的数据'
    } 
  }
}
</script>

<style scoped>
.clearfix::after{
  content:'';
  display:block;
  clear: both;
}

.box{
  border:1px solid #333;
  border-radius: 2px;
  width: 500px;
  line-height: 40px;
}
.left{
  float: left;
  font-size: 14px;
  color:#333;
}
.right{
  float: right;
  font-size: 12px;
  color:#555;
}
</style>
