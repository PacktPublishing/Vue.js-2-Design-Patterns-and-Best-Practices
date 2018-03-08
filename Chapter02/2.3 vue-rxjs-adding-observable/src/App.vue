<template>
  <div id="app">
    <ul>
      <li v-for="(person,index) in people$" :key="index">{{person}}</li>
    </ul>
  </div>
</template>

<script>
// Required to create an Observable stream
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  /**
   * Bind to Observable using the subscriptions object.
   * Allows us to then access the values of people$ inside of our template.
   * Similar to the Async pipe within Angular
   **/
  subscriptions() {
    const people$ = Observable.of(['Paul', 'Katie', 'Bob'])

    return {
      people$
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

li {
  display: block;
  margin: 0 10px;
  font-size:40px;
}

a {
  color: #42b983;
}
</style>
