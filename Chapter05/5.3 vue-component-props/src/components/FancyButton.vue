<template>
  <button>
    {{buttonText}}
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: "Fancy Button!",
      required: true,
      validator: value => value.length > 3
    }
  },
}
</script>

<style scoped>
  button {
    border: 1px solid black;
    padding: 10px;
  }
</style>
