import Vue from 'vue';
import App from './App.vue';
import { convertDateToString } from './filters/date/date.filter';

Vue.filter('date', convertDateToString);

new Vue({
  el: '#app',
  render: h => h(App),
});
