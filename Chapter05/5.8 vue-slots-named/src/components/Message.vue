<template>
  <div>
    <slot name="date"></slot>
    <slot></slot>
    <h1>{{messageText}}</h1>
  </div>
</template>

<script>
export default {
  props: ['messageText']
}
</script>
