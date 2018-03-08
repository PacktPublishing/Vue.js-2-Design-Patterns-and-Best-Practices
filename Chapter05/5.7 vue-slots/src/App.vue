<template>
  <div id="app">
    <message>
      <h2>What are you doing today?</h2>
    </message>
    <message>
      <h2>Learning about Slots in Vue.</h2>
    </message>
  </div>
</template>

<script>
import Message from './components/Message';

export default {
  components: {
    Message
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
