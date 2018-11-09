<template>
  <div class="">
    <ul>
      <li v-for="item in todos" :key="item.id">
        <slot :itemValue = "item">
          {{item.todo}}
        </slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'todoList',
  props: {
    todos:Array
  },
  data() {
    return {
      todos:this.todos
    }
  },
  components: {

  },
  methods: {

  }
}
</script>

<style scoped>
</style>
