<template>
  <div>
    <h1>Child Component</h1>
    <ul>
      <li v-for="friend in fList" :key="friend.id">{{friend.name}}</li>
    </ul>
    <button @click="addFriend">Add Friend</button>
  </div>  
</template>

<script>
export default {
  props: {
    friendList: {
      type: Array,
    }
  },
  data() {
    return {
      fList: this.friendList.slice()
    }
  },
  methods: {
    addFriend() {
      this.fList.push({ id: 2, name: 'Sarah Doe' })
    }
  }
}
</script>

<style>

</style>
