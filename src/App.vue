<template>
  <m-col id="app" class="app">
    <m-transition>
      <the-navigation v-if="isNavigationVisible" />
    </m-transition>
    <m-transition>
      <router-view />
    </m-transition>
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
}
</style>
