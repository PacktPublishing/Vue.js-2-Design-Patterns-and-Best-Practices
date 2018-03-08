<template>
  <div>
    <h1>Name: {{dogName}}</h1>
    <button @click="woof">Woof</button>
  </div>
</template>

<script>
export default {
  props: ['dogName'],
  methods: {
    woof() {
      this.$emit('woof')
    }
  }
}
</script>

<style>

</style>
