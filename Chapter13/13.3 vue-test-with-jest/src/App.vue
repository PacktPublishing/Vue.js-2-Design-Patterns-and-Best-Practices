<template>
  <div>
    <h1>Parent Component</h1>
    <ul>
      <li v-for="friend in friendList" :key="friend.id">{{friend.name}}</li>
    </ul>

    <Person :friendList="friendList" />
    <Groceries />
  </div>
</template>

<script>
import Person from './components/Person';
import Groceries from './components/Groceries'
export default {
  data() {
    return {
      friendList: [{ id: 1, name: 'John Doe' }]
    }
  },
  components: {
    Person,
    Groceries
  }
}
</script>

<style>
.header {
  text-align:center;
  background-color:palevioletred;
  color: white;
}
</style>
