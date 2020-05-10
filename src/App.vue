<template>
  <m-col id="app" class="app">
    <the-navigation />
    <m-transition>
      <router-view />
    </m-transition>
  </m-col>
</template>
<script>
import TheNavigation from './components/TheNavigation.vue';

export default {
  name: 'App',
  components: {
    TheNavigation,
  },
};
</script>
<style lang="scss">
.app {
  min-height: 100vh;
}
</style>
