<template>
  <div id="app">
    <h1>Shopping List</h1>
    <ul>
      <li v-for="item in groceries" v-bind:key="item.id">
        {{item.name}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      groceries: [
        {
          id: 1,
          name: 'Pizza',
          quantity: 1,
        },
        {
          id: 2,
          name: 'Hot Sauce',
          quantity: 5,
        },
        {
          id: 3,
          name: 'Salad',
          quantity: 1,
        },
        {
          id: 4,
          name: 'Water',
          quantity: 1,
        },
        {
          id: 4,
          name: 'Yoghurt',
          quantity: 1,
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: block;
}
</style>