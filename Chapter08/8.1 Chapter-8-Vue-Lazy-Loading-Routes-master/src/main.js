import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
Vue.use(VueRouter);

const Hello = () => import('./components/Hello');
const World = () => import('./components/World');

const routes = [
  { path: '/', redirect: '/hello' },
  { path: '/hello', component: Hello },
  { path: '/World', component: World },
];

const router = new VueRouter({
  routes,
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
