<template>
  <div class="recipe-list">
    <Recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"/>
  </div>
</template>

<script>
import Recipe from './Recipe';

export default {
  data() {
    return {
      recipes: [
        { id: 1, title: 'Strawberry Cheesecake', subtitle: `It doesn't get yummier than this!`},
        { id: 2, title: 'Lemon Meringue Pie', subtitle: `It doesn't get yummier than this!`},
        { id: 3, title: 'Apple Crumble', subtitle: `It doesn't get yummier than this!`},
        { id: 4, title: 'Blackberry Crumble', subtitle: `It doesn't get yummier than this!`}
      ]
    }
  },
  components: {
    Recipe
  }
}
</script>

<style>
.recipe-list {
  text-align: center;
  width: 30vw;
  margin: 0 auto;
}
</style>
