<template>
  <div id="app">
    <label>Name:</label>
    <input type="text" v-model="name">
    <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
     name: ''
    }
  }
}
</script>