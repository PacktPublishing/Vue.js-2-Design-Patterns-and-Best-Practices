<template>
  <div id="app">
    <h1 v-bind:class="{ animated: toggle }">I fade in!</h1>
    <button @click="toggle = !toggle">Toggle {{toggle}}</button>
  </div> 
</template>

<script>
export default {
  data () {
    return {
      toggle: false
    }
  }
}
</script>

<style>
button {
  background-color: transparent;
  padding: 5px;
  border: 1px solid black;
}

h1 {
  opacity: 0;
}

@keyframes fade {
  from { opacity: 0; }
  to {opacity: 1; }
}

.animated {
  animation: fade 1s;
  opacity: 1;
}
</style>
