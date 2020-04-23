import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import { isDev } from '../utils';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
];

// Add components guide Route in Development mode
if (isDev) {
  routes.push({
    path: '/components',
    name: 'Components',
    component: () =>
      import(/* webpackChunkName: "components" */ '../views/Components.vue'),
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
