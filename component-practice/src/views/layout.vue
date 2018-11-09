<template>
  <div>
    <upload v-model="imgUrl"></upload>
  </div>
</template>

<script>
import upload from '@/components/upload-img'

export default {
  name:'',
  data() {
    return {
      imgUrl:'http://pbl.yaojunrong.com/FhERhmPrvrUpL5quse_y_UWe_3Vb'
    }
  },
  components: {
    upload
  },
  methods: {
    uploadImg (url) {
      this.imgUrl = url
    }
  }
}
</script>

<style scoped>
</style>
