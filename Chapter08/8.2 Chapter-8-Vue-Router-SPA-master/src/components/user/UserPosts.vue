<template>
  <div>
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
import { API } from '../../utils/api';
export default {
  data() {
    return {
      posts: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm =>
      API.get(`posts?userId=${to.params.userId}`)
        .then(response => (vm.posts = response.data))
        .catch(err => console.error(err)),
    );
  },
};
</script>