import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Settings from '../views/Settings.vue';
import VideoDetails from '../views/VideoDetails.vue';
import { isDev } from '../config';
import { scrollMiddleware, authMiddleware, metaMiddleware } from './middlewares';
import { routePath, routeName } from './routes';

Vue.use(VueRouter);

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
  scrollBehavior: scrollMiddleware,
  routes,
});

router.beforeEach(metaMiddleware);
router.beforeEach(authMiddleware);

export default router;
