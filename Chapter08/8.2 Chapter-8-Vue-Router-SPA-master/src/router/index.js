import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import { userRoutes } from '../components/user/user.routes';

const routes = [...userRoutes];

const router = new VueRouter({
  routes,
});

export default router;
