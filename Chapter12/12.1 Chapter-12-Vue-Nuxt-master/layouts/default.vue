<template>
  <div>
    <navigation-bar></navigation-bar>
    <section class="section">
      <nuxt class="container"/>
    </section>
  </div>
</template>

<script>
import NavigationBar from '../components/NavigationBar'

export default {
  components: {
    NavigationBar
  }
}
</script>
