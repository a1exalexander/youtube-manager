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
    meta: { title: 'Media Scout' },
  },
  {
    path: '/auth',
    name: 'Auth',
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    meta: { title: 'Media Scout' },
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: () => import(/* webpackChunkName: "password" */ '../views/ResetPassword.vue'),
    meta: { title: 'Reset Password | Media Scout' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "setings" */ '../views/Settings.vue'),
    meta: { title: 'Settings | Media Scout' },
  },
  {
    path: '/video-details',
    name: 'VideoDetails',
    component: () => import(/* webpackChunkName: "video-details" */ '../views/VideoDetails.vue'),
    meta: { title: 'Video Details | Media Scout' },
  },
];

// Add components guide Route in Development mode
if (isDev) {
  routes.push({
    path: '/components',
    name: 'Components',
    meta: { title: 'Components | Media Scout' },
    component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue'),
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
