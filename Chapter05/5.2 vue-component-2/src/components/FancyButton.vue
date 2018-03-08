<template>
  <button>
    {{buttonText}}
  </button>
</template>

<script>
export default {
  data() {
    return {
      buttonText: 'Hello World!'
    }
  }
}
</script>

<style scoped>
  button {
    border: 1px solid black;
    padding: 10px;
  }
</style>
