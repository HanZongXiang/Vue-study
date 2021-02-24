<template>
  <div>
    <mybtn>
      我的按钮
    </mybtn>
    <nameSlot :text="text">
      <!-- 左边的内容
      <span slot="right">右边的内容</span> -->
      <template>
        左边的内容
      </template>
      <!-- scope是所有属性的集合 -->
      <template slot-scope="scope" slot="right">
        <h1>
          {{scope.msg}}
          <!-- 其他内容 -->
        </h1>
      </template>
    </nameSlot>
    <div>
      <todoList :todos="todos">
        <template  slot-scope="scope">
          <div>
            {{scope.itemValue}}1111
          </div>
          <div>
            <span v-if="scope.itemValue.isComplete">✓</span>
            {{scope.itemValue.todo}}
          </div>
        </template>
      </todoList>
    </div>
  </div>
</template>

<script>
import mybtn from '@/components/btn'
import nameSlot from '@/components/nameSlot'
import todoList from '@/components/todo-list'

export default {
  name:'index',
  data() {
    return {
      text:'父组件的按钮',
      todos:[
        { 
          id:1,
          isComplete:true,
          todo:"todo1"
        },
        { 
          id:2,
          isComplete:false,
          todo:"todo2"
        },
        { 
          id:3,
          isComplete:true,
          todo:"todo3"
        },
      ]
    }
  },
  components: {
    mybtn,
    nameSlot,
    todoList
  },
  methods: {

  }
}
</script>

<style scoped>
</style>
