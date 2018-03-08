<template>
  <div>
    <input v-model="itemName">
    <button @click="addShoppingItem()">Add Shopping Item</button>
  </div>
</template>

<script>
import EventBus from '../EventBus';

export default {
  data() {
    return {
      itemName: ''
    }
  },
  methods: {
    addShoppingItem() {
      if(this.itemName.length > 0) {
        EventBus.$emit('addShoppingItem', this.itemName)
        this.itemName = "";
      }
    }
  },
}
</script>

<style>

</style>
