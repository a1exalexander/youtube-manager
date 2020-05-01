<template>
  <div id="app" class="app">
    <the-navigation />
    <m-transition>
      <router-view />
    </m-transition>
  </div>
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
