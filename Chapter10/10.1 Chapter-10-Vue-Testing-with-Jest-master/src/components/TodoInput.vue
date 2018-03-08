<template>
  <form @submit.prevent="addTodo(todoName)">
    <input type="text" v-model="todoName">
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      todoName: ''
    } 
  },
  methods: {
    addTodo(name) {
      this.$emit('addTodo', name);
    }
  }
}
</script>

