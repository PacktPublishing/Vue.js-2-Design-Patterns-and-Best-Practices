<template>
  <div>
    <span v-if="isConnected === true" class="bar connected">
      Connected to the server.
    </span>
    <span v-else class="bar disconnected">
      Disconnected from the server.
    </span>
  </div>
</template>

<script>
export default {
  props: ['isConnected'],
};
</script>

<style>
.bar {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding: 5px;
}

.connected {
  background: greenyellow;
  color: black;
}

.disconnected {
  background: red;
  color: white;
}
</style>
