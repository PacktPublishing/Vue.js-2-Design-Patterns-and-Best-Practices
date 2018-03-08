<template>
  <div class="recipe">
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="recipe.image">
        </figure>
      </div>
      <div class="card-content has-text-centered">
        <div class="content">
          {{recipe.title}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['recipe']
}
</script>

<style>
.recipe {
  padding: 10px; 
  margin: 5px;
}
</style>
