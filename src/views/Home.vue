<template>
  <m-col class="home">
    <!-- <home-charts-scene /> -->
    <m-container>
      <m-divider class="home__divider" />
    </m-container>
    <home-folders-scene />
    <home-search-scene />
    <home-filters-scene />
    <home-table-scene />
  </m-col>
</template>

<script>
import { mapActions } from 'vuex';
// import HomeChartsScene from '@/scenes/home/HomeChartsScene.vue';
import HomeFoldersScene from '@/scenes/home/HomeFoldersScene.vue';
import HomeSearchScene from '@/scenes/home/HomeSearchScene.vue';
import HomeFiltersScene from '@/scenes/home/HomeFiltersScene.vue';
import HomeTableScene from '@/scenes/home/HomeTableScene.vue';
import { CATALOG_REQUEST } from '../store';

export default {
  name: 'HomeView',
  components: {
    // HomeChartsScene,
    HomeFoldersScene,
    HomeSearchScene,
    HomeFiltersScene,
    HomeTableScene,
  },
  methods: {
    ...mapActions({
      getCatalog: `catalog/${CATALOG_REQUEST}`,
    }),
  },
  created() {
    this.getCatalog();
  },
};
</script>
<style lang="scss">
.home {
  flex: 1 1;
  padding: 24px 0 0;
  &__divider {
    margin: 24px 0 20px !important;
  }
}
</style>
