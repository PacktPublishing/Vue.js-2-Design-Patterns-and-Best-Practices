<template>
 <div id="app">
  <transition name="fadeIn"
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut">
    <h1 v-if="toggle">I fade in and out!</h1>
  </transition>
  <button @click="toggle = !toggle">Toggle Heading</button>
 </div> 
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
};
</script>