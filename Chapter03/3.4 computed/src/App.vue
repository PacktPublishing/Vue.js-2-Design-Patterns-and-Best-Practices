<template>
  <h1>Name: {{ reversedName }}</h1>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Paul'
    }
  },
  computed: {
    reversedName() {
      return this.firstName.split('').reverse().join('')
    }
  }
}
</script>

<style>

</style>
