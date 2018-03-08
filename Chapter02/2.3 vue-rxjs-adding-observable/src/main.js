import Vue from 'vue';
import App from './App.vue';
import VueRx from 'vue-rx';
import Rx from 'rxjs';
// Import only the necessary modules
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'; //

// Use only Observable and Subject. Add more if needed.
Vue.use(VueRx, {
  Observable,
  Subject,
});

new Vue({
  el: '#app',
  render: h => h(App),
});
