<template>
  <div id="app">

    <h1 v-bind:class="{ 'red': red, 'strike-through': strikeThrough }">Vue Bindings</h1>

    <input type="checkbox" name="" id="" v-model="red" >
    <span>Red</span>

    <input type="checkbox" name="" id="" v-model="strikeThrough" >
    <span>Strike Through</span>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      red: false,
      strikeThrough: false
    }
  }
}
</script>

<style>
.red {
  color: red;
}

.strike-through {
  text-decoration: line-through;
}
</style>


