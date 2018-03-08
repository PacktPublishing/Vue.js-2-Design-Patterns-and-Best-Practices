<template>
  <div>
    <input type="text" v-model="id" />      <p>Name: {{user.name}}</p>
    <p>Email: {{user.email}}</p>
    <p>Id: {{user.id}}</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      user: {}
    }
  },
  methods: {
    getDataForUser() { 
      axios.get(`https://jsonplaceholder.typicode.com/users/${this.id}`)
        .then(res => this.user = res.data);
    }
  },
  watch: {
    id() {
      this.getDataForUser();
      console.log(`Got data for user: `, this.id);
    }
  }
}
</script>

<style>

</style>
