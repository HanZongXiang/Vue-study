<template>
  <div class="count">
    <button @click='reduce'>-</button>
    <strong>{{count}}</strong>
    <button @click='add'>+</button>
    <!-- {{price}} -->
    <br>
    <button style="width:200px" @click="handleClick">兄弟组件传值</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
// import bus from "../bus";

export default {
  name:'comB',
  // props:{
  //   count:{
  //     type:Number
  //   }
  // },
  data() {
    return {
      msg:'来自兄弟组件B的内容'
    }
   },
  components: {

  },
  methods: {
    reduce () {
        // this.$emit('reduce')
        this.$store.commit('REDUCE_COUNT')
    },
    add () {
        // this.$emit('add')
        this.$store.commit('ADD_COUNT')
    },
    handleClick () {
      this.$bus.$emit('sendData',this.msg)
    }
  },
  computed:{
    // count () {
    //   return this.$store.state.count
    // }
    ...mapState(['count','price'])
  }
}
</script>

<style scoped>
  .count{
     line-height: 100px;
  }
  button{
    width: 100px;
    height: 50px;
    border-radius:4px;
    background-color: #000;
    color:#fff;
    line-height: 50px;
    text-align: center;
    font-size: 26px;
    border:none;
    outline:none;  
  }
  strong{
      font-size: 26px;
  }
</style>
