<template>
  <div id="app" class="app">
    <m-transition>
      <router-view />
    </m-transition>
  </div>
</template>
<script>
export default {
  name: 'App',
};
</script>
<style lang="scss">
.app {
  min-height: 100vh;
}
</style>
