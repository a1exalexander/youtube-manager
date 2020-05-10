import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Team from '../views/Team.vue';
import Settings from '../views/Settings.vue';
import VideoDetails from '../views/VideoDetails.vue';
import { isDev } from '../config';
import scrollBehavior from './scroll';

Vue.use(VueRouter);

export const routePath = {
  home: '/',
  auth: '/auth',
  team: '/team',
  resetPassword: '/reset-password',
  settings: '/settings',
  videoDetails: '/video-details',
  components: '/components',
};

export const routeName = {
  home: 'Home',
  auth: 'Auth',
  team: 'Team',
  resetPassword: 'ResetPassword',
  settings: 'Settings',
  videoDetails: 'VideoDetails',
  components: 'Components',
};

const routes = [
  {
    path: '*',
    redirect: routePath.home,
  },
  {
    path: routePath.home,
    name: routeName.home,
    component: Home,
    meta: { title: 'Media Scout' },
  },
  {
    path: routePath.auth,
    name: routeName.auth,
    component: () => import(/* webpackChunkName: "auth" */ '../views/Auth.vue'),
    meta: { title: 'Media Scout' },
  },
  {
    path: routePath.resetPassword,
    name: routeName.resetPassword,
    component: () => import(/* webpackChunkName: "password" */ '../views/ResetPassword.vue'),
    meta: { title: 'Reset Password | Media Scout' },
  },
  {
    path: routePath.settings,
    name: routeName.settings,
    component: Settings,
    meta: { title: 'Settings | Media Scout' },
  },
  {
    path: `${routePath.videoDetails}/:id`,
    name: routeName.videoDetails,
    component: VideoDetails,
    meta: { title: 'Video Details | Media Scout' },
  },
  {
    path: routePath.team,
    name: routeName.team,
    component: Team,
    meta: { title: 'Team | Media Scout' },
  },
];

// Add components guide Route in Development mode
if (isDev) {
  routes.push({
    path: routePath.components,
    name: routeName.components,
    meta: { title: 'Components | Media Scout' },
    component: () => import(/* webpackChunkName: "components" */ '../views/Components.vue'),
  });
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
