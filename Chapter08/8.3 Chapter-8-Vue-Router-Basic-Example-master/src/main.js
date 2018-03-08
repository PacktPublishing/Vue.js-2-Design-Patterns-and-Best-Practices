import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App.vue';

Vue.use(VueRouter);

const Hello = { template: `<h1>Hello</h1>` };
const HelloName = {
  props: ['name'],
  template: `<h1>Hello {{ name }}</h1>`,
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    console.log(from);
    console.log(`Hello ${to.params.name}`);
    next();
  },
  beforeRouteEnter(to, from, next) {
    console.log(`I'm called before entering the route!`);
    next();
  },
  beforeRouteLeave(to, from, next) {
    console.log(`I'm called before leaving the route!`);
    console.log(
      `I have access to the component instance, here's proof! Name: ${
        this.name
      }`,
    );
    next();
  },
};

const routes = [
  { path: '/hello', component: Hello },
  { path: '/hello/:name', component: HelloName, props: true },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(`Route to`, to);
  console.log(`Route from`, from);
  next();
});

router.beforeResolve((to, from, next) => {
  console.log(`Before resolve:`);
  console.log(`Route to`, to);
  console.log(`Route from`, from);
  next();
});

router.afterEach((to, from) => {
  console.log(`After each:`);
  console.log(`Route to`, to);
  console.log(`Route from`, from);
});

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
