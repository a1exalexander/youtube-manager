<template>
  <m-col class="home">
    <home-charts-scene />
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
import HomeChartsScene from '@/scenes/home/HomeChartsScene.vue';
import HomeFoldersScene from '@/scenes/home/HomeFoldersScene.vue';
import HomeSearchScene from '@/scenes/home/HomeSearchScene.vue';
import HomeFiltersScene from '@/scenes/home/HomeFiltersScene.vue';
import HomeTableScene from '@/scenes/home/HomeTableScene.vue';
import { CATALOG_REQUEST, CHARTS_ACCOUNT_REQUEST, CATALOG_FOLDERS_REQUEST } from '../store';

export default {
  name: 'HomeView',
  components: {
    HomeChartsScene,
    HomeFoldersScene,
    HomeSearchScene,
    HomeFiltersScene,
    HomeTableScene,
  },
  methods: {
    ...mapActions({
      getCatalog: `catalog/${CATALOG_REQUEST}`,
      getFolders: `catalog/${CATALOG_FOLDERS_REQUEST}`,
      getCharts: `charts/${CHARTS_ACCOUNT_REQUEST}`,
    }),
  },
  created() {
    this.getCatalog();
    this.getFolders();
    this.getCharts();
  },
};
</script>
<style lang="scss">
.home {
  flex: 1 1;
  padding: 24px 0 40px;
  &__divider {
    margin: 24px 0 20px !important;
  }
}
</style>
