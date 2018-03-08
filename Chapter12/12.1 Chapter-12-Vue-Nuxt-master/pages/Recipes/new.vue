<template>
  <form @submit.prevent="submitRecipe">
    <div class="field">
      <label class="label">Recipe Title</label>
      <input class="input" :class="{ 'is-danger': $v.title.$error}" v-model.trim="title" @input="$v.title.$touch()" type="text">
      <p class="help is-danger" v-if="!$v.title.required && $v.title.$dirty">Title is required</p>
      <p class="help is-danger" v-if="!$v.title.minLength && $v.title.$dirty">Title must be at least 4 characters.</p>
    </div>

    <div class="field">
      <label class="label">Recipe Image URL</label>
      <input class="input" :class="{ 'is-danger': $v.image.$error}" v-model.trim="image" @input="$v.image.$touch()" type="text">
      <p class="help is-danger" v-if="!$v.image.required && $v.image.$dirty">Image URL is required</p>
    </div>

    <div class="field">
      <label class="label">Steps</label>
      <textarea class="textarea" rows="5" :class="{ 'is-danger': $v.steps.$error}" v-model="steps" @input="$v.steps.$touch()" type="text">
      </textarea>
      <p class="help is-danger" v-if="!$v.steps.required && $v.steps.$dirty">Recipe steps are required.</p>
      <p class="help is-danger" v-if="!$v.steps.minLength && $v.steps.$dirty">Steps must be at least 30 characters.</p>
    </div>

    <div class="field">
      <label class="label">Category</label>
      <div class="control">
        <div class="select">
          <select v-model="categoryId" @input="$v.categoryId.$touch()">
            <option value="1">Dessert</option>
            <option value="2">Healthy Eating</option>
          </select>
        </div>
      </div>
    </div>

    <button :disabled="$v.$invalid" class="button is-primary">Add</button>
  </form>
</template>

<script>
import axios from 'axios'
import { required, minLength } from 'vuelidate/lib/validators'

export default {
  data () {
    return {
      title: '',
      image: '',
      steps: '',
      categoryId: 1
    }
  },
  validations: {
    title: {
      required,
      minLength: minLength(4)
    },
    image: {
      required
    },
    steps: {
      required,
      minLength: minLength(30)
    }
  },
  methods: {
    submitRecipe () {
      const recipe = { title: this.title, image: this.image, steps: this.steps, categoryId: Number(this.categoryId) }
      axios.post('http://localhost:3001/recipes', recipe)
    }
  }
}
</script>

<style>

</style>
