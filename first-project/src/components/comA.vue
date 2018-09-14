<template>
  <div class="total">
      <h3>
       小计： {{$store.getters.totalPrice}}
      </h3>
      <p>{{msg}}</p>
  </div>
</template>

<script>
// import bus from "../bus";

export default {
  name:'comA',
  // props:{
  //   price:{
  //     type:Number
  //   },
  //   count:{
  //     type:Number
  //   }
  // },
  data() {
    return {
      msg:''
    }
   },
  components: {

  },
  created () {
    this.$bus.$on('sendData',msg => {
      this.msg = msg
    })
  },
  methods: {

  },
  computed:{
    //   total () {
    //       return this.$store.state.count * this.$store.state.price
    //   }
  }
}
</script>

<style scoped lang="scss">
.total{
    margin-left: 10px;
  margin-right: 10px;
  font-weight: normal;
  font-size: 22px;
  margin-top: 10px;
    h3{
        margin-top: 20px;
    }
}
p{
  margin-top: 80px;
}
</style>
