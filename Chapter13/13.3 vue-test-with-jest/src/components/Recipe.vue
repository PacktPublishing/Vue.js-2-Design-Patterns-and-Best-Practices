<template>
  <div class="card">
    <h1>{{recipe.title}}</h1>
    <p>{{recipe.subtitle}}</p>
  </div>
</template>

<script>
export default {
  props: {
    recipe: {
      type: Object
    }
  },
}

</script>

<style>
  .card {
    border: 1px solid black;
    margin: 10px;
    border-radius: 20px;
    padding: 5px;
    background-color: papayawhip;
  }
  .card:nth-of-type(even) {
    background-color:burlywood;
  }
</style>
