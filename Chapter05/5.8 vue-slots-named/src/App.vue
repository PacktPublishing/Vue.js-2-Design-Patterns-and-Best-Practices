<template>
  <div id="app">

    <input type="text" v-model="message">
    <button @click="sendMessage()">+</button>

    <message v-for="message in messageList" :message-text="message.text" :key="message">
      <h2 slot="date">{{ message.date | date }}</h2>
    </message>
  </div>
</template>

<script>
import moment from 'moment';
import Message from './components/Message';

const convertDateToString = value => moment(String(value)).format('MM/DD/YYYY');

export default {
  data() {
    return {
      message: '',
      messageList: [],
    };
  },
  methods: {
    sendMessage() {
      if (this.message.length > 0) {
        this.messageList.push({ date: new Date(), text: this.message });
        this.message = '';
      }
    },
  },
  components: {
    Message,
  },
  filters: {
    date: convertDateToString,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
