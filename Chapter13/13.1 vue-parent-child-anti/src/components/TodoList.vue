<template>
  <div>
    <input type="text" v-model="itemName" @keydown.enter="addTodo()">
    <ul>
      <todo-item v-for="todo in todos" :key="todo.id" :todo="todo" />
    </ul>
  </div>
</template>

<script>
import uuid from 'uuid/v4';
import TodoItem from './TodoItem';

export default {
  data() {
    return {
      todos: [{ id: uuid(), name: 'Clean the car', complete: false}],
      itemName: ''
    }
  },
  components: {
    TodoItem
  },
  methods: {
    addTodo() {
      this.todos = [...this.todos, { id: uuid(), name: this.itemName}];
    }
  }
}
</script>

<style>

</style>
