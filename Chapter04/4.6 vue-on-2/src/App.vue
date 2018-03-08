<template>
  <div id="app">
    <ul>
      <li v-for="p in people" v-bind:key="p.id" >
        {{p}}
      </li>
    </ul>

    <form v-on:submit.prevent="addPerson">
      <input type="text" v-model="person" />
      <button>Add {{ person}} </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      person: '',
      people: []
    }
  },
  methods: {
    addPerson() {
      this.people = this.people.concat(
        {id: this.people.length, name: this.person}
      );
      this.person = '';
    }
  }
}
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

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

button {
  background-color: transparent;
  border: 1px solid black;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
