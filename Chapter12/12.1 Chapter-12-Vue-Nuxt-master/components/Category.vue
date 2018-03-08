<template>
  <div class="card">
    <header class="card-header">
      <p class="card-header-title">
        {{category.name}}
      </p>
    </header>
    <div class="card-content">
      <div class="content">
        {{category.description}}
      </div>
    </div>
    <footer class="card-footer">
      <nuxt-link :to="categoryLink" class="card-footer-item">View</nuxt-link>
    </footer>
  </div>
</template>

<script>

export default {
  props: ['category'],
  computed: {
    categoryLink () {
      return `/categories/${this.category.id}`
    }
  }
}
</script>

<style scoped>
div {
  margin: 10px;
}
</style>
