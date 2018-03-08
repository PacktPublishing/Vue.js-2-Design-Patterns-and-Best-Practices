<template>
  <div id="app">
    <article v-if="role === 'admin'">
      <header>You're an admin!</header>
      <section class="main">
        <h1>If you can see this, you're an admin!</h1>
      </section>
    </article>
    <article v-else-if="role === 'user'">
      <header>You're a user!</header>
      <section class="main">
        <h1>Enjoy your stay!</h1>
      </section>
    </article>
    <article v-else-if="role === 'guest'">
      <header>You're a guest!</header>
      <section class="main">
        <h1>Maybe you should make an account.</h1>
      </section>
    </article>
    <h1 v-else>You have no role!</h1>
    <button @click="getRole()">Switch Role</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      role: '',
      roleList: this.returnRole(),
    };
  },
  methods: {
    getRole() {
      /**
       * Calling this.roleList.next() gives us an Iterator object with the interface of:
       * { value: string, done: boolean}
       * We can therefore check to see whether this was the >last< yielded value with done, or get the result by calling .value
       */
      this.role = this.roleList.next().value;
    },
    *returnRole() {
      yield 'guest';
      yield 'user';
      yield 'admin';
    },
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
