<template>
  <div>
    <h1>TodoList</h1>

    <TodoInput @addTodo="addTodo($event)"></TodoInput>

    <ul>
      <TodoItem v-for="todo in todos" v-bind:key="todo.id" :todo="todo">{{todo.name}}</TodoItem>
    </ul>
  </div>
</template>

<script>
import uuid from 'uuid/v4';

import TodoItem from './TodoItem';
import TodoInput from './TodoInput';

export default {
  components: {
    TodoItem,
    TodoInput
  },
  data() {
    return {
      todos: [],
      todoName: ''
    };
  },
  methods: {
    addTodo(name) {
      this.todos = [...this.todos, { id: uuid(), name }];
      return this.todos;
    },
  },
};
</script>


<style>
ul,
li {
  list-style: none;
  margin-left: 0;
  padding-left: 0;
}
</style>
