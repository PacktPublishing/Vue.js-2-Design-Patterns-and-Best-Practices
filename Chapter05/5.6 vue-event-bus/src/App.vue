<template>
  <div>
    <shopping-input></shopping-input>
    <shopping-list :shoppingList="shoppingList"></shopping-list>
    <button @click="stopListening()">Stop listening</button>
  </div>
</template>

<script>
import ShoppingInput from './components/ShoppingInput';
import ShoppingList from './components/ShoppingList';
import EventBus from './EventBus';

export default {
  methods: {
    stopListening() {
      EventBus.$off('addShoppingItem');
    },
  },
  components: {
    ShoppingInput,
    ShoppingList,
  },
  data() {
    return {
      shoppingList: [],
    };
  },
  created() {
    EventBus.$on('addShoppingItem', itemName => {
      this.shoppingList.push(itemName);
    });
  },
};
</script>

