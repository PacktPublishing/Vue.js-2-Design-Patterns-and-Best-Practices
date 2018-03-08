<template>
  <div>
    <fancy-button></fancy-button>
    <button>I'm another button!</button>
  </div>
</template>

<script>
import FancyButton from './components/FancyButton.vue';

export default {
  components: {
    'fancy-button': FancyButton
  }
}
</script>

<style>

</style>
