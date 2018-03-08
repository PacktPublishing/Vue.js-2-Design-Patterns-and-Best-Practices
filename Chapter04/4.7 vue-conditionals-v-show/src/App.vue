<template>
  <div id="app">
    <article v-show="admin">
      <header>Protected Content</header>
      <section class="main">
        <h1>If you can see this, you're an admin!</h1>
      </section>
    </article>

    <button @click="admin = !admin">Flip permissions</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      admin: true
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
  background: transparent;
  font-size: 130%;
  padding: 10px;
  border: 1px solid black;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
