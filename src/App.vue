<template>
  <m-col id="app" class="app">
    <m-transition>
      <the-navigation v-if="isNavigationVisible" />
    </m-transition>
    <m-transition>
      <router-view />
    </m-transition>
    <span v-if='$isDev' class="app__version">{{$appVersion}}</span>
  </m-col>
</template>
<script>
import { mapActions } from 'vuex';
import TheNavigation from './components/TheNavigation.vue';
import { routePath } from './router';
import { PROFILE_REQUEST } from './store';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
  methods: {
    ...mapActions({
      getProfile: `profile/${PROFILE_REQUEST}`,
    }),
  },
  computed: {
    isNavigationVisible() {
      const routes = [routePath.auth, routePath.resetPassword];
      return !routes.includes(this.$route?.path) && !routes.includes(window.location.pathname);
    },
  },
  created() {
    this.getProfile();
  },
};
</script>
<style lang="scss">
.app {
  min-height: 100vh;
  &__version {
    position: fixed;
    bottom: 32px;
    right: 32px;
    @include z-index(immortal);
    pointer-events: none;
  }
}
</style>
