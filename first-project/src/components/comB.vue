<template>
  <div class="count">
    <button @click='reduce'>-</button>
    <strong>{{count}}</strong>
    <button @click='add'>+</button>
    <!-- {{price}} -->
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name:'comB',
  // props:{
  //   count:{
  //     type:Number
  //   }
  // },
  data() {
    return {

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
