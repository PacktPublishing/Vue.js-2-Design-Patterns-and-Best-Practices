<template>
  <div id="app">
    <input type="checkbox" v-model="checked">
    <span>Am I checked? {{checked ? 'Yes' : 'No' }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
     name: '',
     checked: false,
     selected: false
    }
  }
}
</script>