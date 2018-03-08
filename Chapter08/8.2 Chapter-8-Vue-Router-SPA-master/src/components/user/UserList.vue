<template>
  <ul>
    <li v-for="user in users" :key="user.id">
      <router-link :to="{ path: `/${user.id}` }">
      {{user.name}}
      </router-link>
    </li>
  </ul>  
</template>

<script>
import { API } from '../../utils/api';
export default {
  data() {
    return {
      users: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    API.get(`users`)
      .then(response => next(vm => (vm.users = response.data)))
      .catch(error => next(error));
  },
};
</script>
