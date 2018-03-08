<template>
  <div>
    <navigation-bar />
    <div class="container">
      <message-list :messages="messages" />
      <message-form />
    </div>
    <connection-status :isConnected="isConnected" />
  </div>
</template>

<script>
import MessageForm from './components/MessageForm.vue';
import MessageList from './components/MessageList.vue';

export default {
  data() {
    return {
      isConnected: false,
      messages: [],
    };
  },
  components: {
    MessageList,
    MessageForm,
  },
  sockets: {
    connect() {
      this.isConnected = true;
    },
    disconnect() {
      this.isConnected = false;
    },
    chatMessage(messages) {
      this.messages = messages;
    },
  },
};
</script>

<style>
.container {
  width: 300px;
  margin: 0 auto;
}
</style>
