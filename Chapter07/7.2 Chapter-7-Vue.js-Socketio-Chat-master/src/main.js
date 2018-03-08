import Vue from 'vue';
import VueSocketIo from 'vue-socket.io';
import SocketIo from 'socket.io-client';

import App from './App.vue';
import ConnectionStatus from './components/ConnectionStatus.vue';
import Navbar from './components/Navbar.vue';

export const Socket = SocketIo(`http://localhost:3000`);
Vue.use(VueSocketIo, Socket);

Vue.component('connection-status', ConnectionStatus);
Vue.component('navigation-bar', Navbar);

new Vue({
  el: '#app',
  render: h => h(App),
});
