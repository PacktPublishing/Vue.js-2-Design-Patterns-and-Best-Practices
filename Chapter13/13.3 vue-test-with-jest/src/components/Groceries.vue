<template>
  <div>
    <ul>
      <li v-for="(item, index) in items" :key="item.id" @click="addQuantity(index)">
        {{item.name}} {{item.quantity}}
      </li>
    </ul>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Bananas'},
        { id: 2, name: 'Pizza', quantity: 2},
        { id: 3, name: 'Cheesecake', quantity: 5}
      ]   
    }
  },
  methods: {
    addQuantity(selected) {
      const selectedItem = this.items[selected];
      this.$set(selectedItem, 'quantity', 2)
      console.log(this.items);
    }
  }
}

</script>

<style>

</style>
