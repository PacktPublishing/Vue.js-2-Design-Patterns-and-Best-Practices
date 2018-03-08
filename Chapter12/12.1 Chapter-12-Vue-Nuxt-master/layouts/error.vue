<template>
  <div>
    <div class="has-text-centered" v-if="error.statusCode === 404">
      <img src="https://images.pexels.com/photos/127028/pexels-photo-127028.jpeg" alt="">
        <h1 class="title">Page not found: 404</h1>
        <h2 class="subtitle">
          <nuxt-link  to="/">Back to the home page</nuxt-link>
        </h2>
    </div>
    <div v-else class="has-text-centered">
      <h1 class="title">An error occured.</h1>
      <h2 class="subtitle">
        <nuxt-link  to="/">Back to the home page</nuxt-link>
      </h2>
    </div>
  </div>
</template>

<script>

export default {
  props: ['error']
}
</script>
