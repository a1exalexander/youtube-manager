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
          <home-table-item
            v-for="video in getCatalog"
            :key="video.id"
            :video="video"
            v-model="selected"
          />
        </ul>
      </div>
    </m-transition>
  </m-col>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import HomeTableHead from './table/HomeTableHead.vue';
import HomeTableEmpty from './table/HomeTableEmpty.vue';
import HomeTableItem from './table/HomeTableItem.vue';
import HomeTableSectionHeader from './table/HomeTableSectionHeader.vue';
import { CATALOG_SELECTED_SET } from '../../store';

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
    };
  },
  methods: {
    ...mapMutations('catalog', [CATALOG_SELECTED_SET]),
  },
  computed: {
    ...mapGetters('catalog', ['getCatalog', 'isSearch', 'isEmpty']),
    ...mapState('catalog', { getSelected: (state) => state.selected }),
    selected: {
      get() {
        return this.getSelected;
      },
      set(e) {
        this[CATALOG_SELECTED_SET](e);
      },
    },
  },
  watch: {
    async selectedAll() {
      await this.$nextTick();
      if (this.selectedAll) {
        this[CATALOG_SELECTED_SET]([...this.getCatalog.map(({ id }) => id)]);
      } else {
        this[CATALOG_SELECTED_SET]([]);
      }
    },
  },
};
</script>
<style lang="scss">
$style: home-table-scene;
.#{$style} {
  background-color: $dark;
}
</style>
