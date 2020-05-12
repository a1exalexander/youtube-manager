<template>
  <m-col class="home-table-scene">
    <home-table-head
      v-model="selectedAll"
      :val="selectedAll && getCatalog.length === selected.length"
    />
    <m-transition>
      <home-table-empty key="empy" v-if="isEmpty" />
      <div key="table" v-else>
        <home-table-section-header :visible="isSearch">Catalog results:</home-table-section-header>
        <ul class="home-table-scene__list">
          <home-table-item
            v-for="video in getCatalog"
            :key="video.id"
            :video="video"
            v-model="selected"
          />
        </ul>
        <home-table-section-header :visible="isSearch">Global results:</home-table-section-header>
        <ul class="home-table-scene__list" v-if="isSearch && !isEmpty">
          <home-table-item v-for="video in getCatalog" :key="video.id" :video="video" />
        </ul>
      </div>
    </m-transition>
  </m-col>
</template>
<script>
import { mapGetters } from 'vuex';
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
  data() {
    return {
      selectedAll: false,
      selected: [],
    };
  },
  computed: {
    ...mapGetters('catalog', ['getCatalog', 'isSearch', 'isEmpty']),
  },
  watch: {
    async selectedAll() {
      await this.$nextTick();
      if (this.selectedAll) {
        this.selected = [...this.getCatalog.map(({ id }) => id)];
      } else {
        this.selected = [];
      }
    },
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
