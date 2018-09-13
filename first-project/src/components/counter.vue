<template>
  <div class="count">
    <button @click='reduce'>-</button>
    <strong>{{count}}</strong>
    <button @click='add'>+</button>
  </div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name:'counter',
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
        this.$store.commit('REDUCE_COUNT')
    },
    add () {
        this.$store.commit('ADD_COUNT')
    }
  },
  computed:{
    ...mapState(['count'])
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
