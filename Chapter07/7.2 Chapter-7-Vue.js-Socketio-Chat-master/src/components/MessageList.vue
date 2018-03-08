<template>
  <div>
    <span v-for="message in messages" :key="message.id">
      <strong>{{message.username}}: </strong> {{message.message}}
    </span>
  </div>
</template>

<script>
export default {
  props: ['messages'],
};
</script>

<style scoped>
div {
  overflow: scroll;
  height: 150px;
  margin: 10px auto 10px auto;
  padding: 5px;
  border: 1px solid gray;
}
span {
  display: block;
  padding: 2px;
}
</style>
