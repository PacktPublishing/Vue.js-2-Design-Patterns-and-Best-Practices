<template>
  <button @click="showAlert">Show Alert</button>
</template>

<script>
export default {
  data () {
    return {
      message: 'Hello World!'
    }
  },
  methods: {
    showAlert() {
      alert(this.message);
    }
  }
}
</script>

<style>
</style>