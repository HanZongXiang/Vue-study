<template>
  <div class="main-wrap">
    <header class="header">头部组件</header>
    <div class="main-content" ref="main">
      <ul>
        <li v-for="(item,index) in listData" :key="index">
          {{item}}
        </li>
      </ul>
    </div>
    <footer class="footer">
      <input type="text" v-model="text" @keyup.enter="handleClick">
      <button @click="handleClick">评论</button>
    </footer>
  </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name:'',
  data() {
    return {
      text: '',
      BS: null,
      listData: [
        '列表项内容1',
        '列表项内容2',
        '列表项内容3',
        '列表项内容4',
        '列表项内容5',
        '列表项内容6',
        '列表项内容',
        '列表项内容',
        '列表项内容',
        '列表项内容',
        '列表项内容',
        '列表项内容',
        '列表项内容',
        '列表项内容'
      ]
    }
  },
  components: {

  },
  methods: {
    handleClick() {
      this.listData.push(this.text)
      this.text = ''
      this.$nextTick(() => {
        this.BS.refresh()
        let main = this.$refs.main
        let scrollTop = main.scrollHeight - main.offsetHeight
        this.BS.scrollTo(0,-scrollTop, 300)
      })
    },
    initScroll() {
      this.$nextTick(() => {
      let main = this.$refs.main
      this.BS = new BetterScroll(main,{mouseWheel: true,scrollbar: true})
      })
    },
  
  },
  mounted() {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
    document.getElementById('app').style.overflow = 'auto'
    this.initScroll()
  },
  // 组件卸载触发
  beforeDestroy() {
    document.documentElement.style.overflow = 'auto'
    document.body.style.overflow = 'auto'
    document.getElementById('app').style.overflow = 'auto'
  }
}
</script>

<style scoped lang="scss">
.main-wrap {
  height: 100%;
  overflow: hidden;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;

  .header {
    height: 45px;
    line-height: 45px;
    text-align: center;
    background: #f00;
    color: #fff;
  }

  .main-content {
    flex: 1;
    overflow-y: hidden;
    // -webkit-overflow-scrolling: touch;
    background: rgba(255,255,0,.5);

    li {
      height: 50px;
      line-height: 50px;
      padding-left: 20px;
      list-style: none;
      color: #fff;
    }
  }

  .footer {
    display: flex;
    justify-content: space-between;
    input {
      -webkit-appearance: none;
      flex:1;
      outline: none;
      display: block;
      height: 43px;
      line-height: 45px;
      border: 1px solid #000;
      padding: 0 10px;
    }
    button {
      width: 80px;
      height: 45px;
      outline: none;
    }
  }
}
</style>
