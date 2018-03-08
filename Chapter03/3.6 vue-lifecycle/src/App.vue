<template>
  <div>
    <h1>{{msg}}</h1>
    <button @click="msg = 'Updated Hook'">Update Message
    </button>
    <button @click="remove">Destroy instance</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    remove() {
      this.$destroy();
    }
  },
  beforeCreate() {
    console.log("Before create");
  },
  created() {
    console.log("Created");
  },
  beforeMount() {
    console.log("Before mount");
  },
  mounted() {
    console.log("Mounted");
  },
  beforeUpdate() {
    console.log("Before updated");
  },
  updated() {
    console.log("Updated");
  },
  beforeDestroy() {
    console.log("Before destroy");
  },
  destroyed() {
    console.log("Destroyed");
  }
}
</script>

<style>
</style>
