<template>
  <m-col class="home-table-scene">
    <home-table-head />
    <m-transition>
      <home-table-empty key="empy" v-if="false" />
      <div key="table" v-else>
        <home-table-section-header>Catalog results:</home-table-section-header>
        <ul class="home-table-scene__list">
          <home-table-item />
          <home-table-item />
        </ul>
        <home-table-section-header>Global results:</home-table-section-header>
        <ul class="home-table-scene__list">
          <home-table-item v-for='item in 20' :key='item' />
        </ul>
      </div>
    </m-transition>
  </m-col>
</template>
<script>
import HomeTableHead from './components/HomeTableHead.vue';
import HomeTableEmpty from './components/HomeTableEmpty.vue';
import HomeTableItem from './components/HomeTableItem.vue';
import HomeTableSectionHeader from './components/HomeTableSectionHeader.vue';

export default {
  name: 'HomeTableScene',
  components: {
    HomeTableHead,
    HomeTableEmpty,
    HomeTableItem,
    HomeTableSectionHeader,
  },
};
</script>
<style lang="scss">
$style: home-table-scene;
.#{$style} {
  flex: 1 1;
  background-color: $dark;
}
</style>
