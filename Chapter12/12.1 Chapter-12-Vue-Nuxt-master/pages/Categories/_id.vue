<template>
  <div>
    <app-recipe v-for="recipe in recipes" :key="recipe.id" :recipe="recipe"></app-recipe>
  </div>
</template>

<script>
import Recipe from '@/components/Recipe'
import axios from 'axios'

export default {
  validate ({ params }) {
    return !isNaN(+params.id)
  },
  asyncData ({ req, params }) {
    return axios.get(`http://localhost:3001/recipes?categoryId=${params.id}`)
      .then((res) => {
        return {
          recipes: res.data
        }
      })
  },
  components: {
    'app-recipe': Recipe
  }
}
</script>
