<template>
  <li @click="completeTodo(todo)">{{todo.name}}</li>
</template>

<script>
export default {
  props: ['todo'],
  methods: {
    completeTodo(todo) {
     // this.$parent.$options.methods.completeTodo(todo);
      this.todo = [{id: 1, name: 'Do the dishes.'}];
      this.$emit('completeTodo', todo)
    }
  }
}
</script>

<style>

</style>
