<template>
  <div id="app">
    <ul>
      <li v-for="person in people" v-bind:key="person.id">
        {{person.name}} {{person.dob | date}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      people: [
        {
          id: 1,
          name: 'Paul',
          dob: new Date(2000, 5, 29),
        },
        {
          id: 2,
          name: 'Terry',
          dob: new Date(1994, 10, 25),
        },
        {
          id: 3,
          name: 'Alex',
          dob: new Date(1973, 4, 15),
        },
        {
          id: 4,
          name: 'Deborah',
          dob: new Date(1954, 2, 5),
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

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
