<template>
  <div>
    <app-category v-for="category in categories" :key="category.id" :category="category"></app-category>
  </div>
</template>

<script>
import Category from '../components/Category'
import axios from 'axios'

export default {
  asyncData ({ req, params }) {
    return axios.get(`http://localhost:3001/categories`)
      .then((res) => {
        return {
          categories: res.data
        }
      })
  },
  components: {
    'app-category': Category
  }
}
</script>

<style>

</style>