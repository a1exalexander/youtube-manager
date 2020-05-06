<template>
  <div class="home">
    <home-charts-scene />
    <m-divider class="home__divider" />
    <home-folders-scene />
    <home-search-scene />
    <home-filters-scene />
    <home-table-scene />
  </div>
</template>

<script>
import HomeChartsScene from '@/scenes/home/HomeChartsScene.vue';
import HomeFoldersScene from '@/scenes/home/HomeFoldersScene.vue';
import HomeSearchScene from '@/scenes/home/HomeSearchScene.vue';
import HomeFiltersScene from '@/scenes/home/HomeFiltersScene.vue';
import HomeTableScene from '@/scenes/home/HomeTableScene.vue';

export default {
  name: 'HomeView',
  components: {
    HomeChartsScene,
    HomeFoldersScene,
    HomeSearchScene,
    HomeFiltersScene,
    HomeTableScene,
  },
};
</script>
<style lang="scss">
.home {
  padding: 24px 0;
  &__divider {
    margin: 24px 40px 20px !important;
  }
}
</style>
