import Vue from 'vue';
import Router from 'vue-router';
import TodoList from '../components/TodoList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TodoList',
      component: TodoList,
    },
  ],
});
