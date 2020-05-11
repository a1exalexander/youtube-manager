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
import { routeName } from './router';
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
      return ![routeName.auth, routeName.resetPassword].includes(this.$route?.name);
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
