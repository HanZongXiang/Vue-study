<template>
  <div class="total">
      <h3>
       小计： {{$store.getters.totalPrice}}
      </h3>
  </div>
</template>

<script>
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

    }
   },
  components: {

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

</style>
