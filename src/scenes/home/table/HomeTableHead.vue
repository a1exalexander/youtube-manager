<template>
  <home-table-item-wrapper class="home-table-head">
    <div class="home-table-head__cell">
      <m-checkbox v-model="checkbox" />
    </div>
    <div class="home-table-head__cell">VIDEO</div>
    <div class="home-table-head__cell" :class='item.position' v-for="item in headItems" :key="item.name">
      <home-table-head-item
        :value="sortBy"
        :type="item.value"
        :direction="sortDirection"
        @click="(e) => toggleSortBy(e, item.type)"
      >{{ item.name }}</home-table-head-item>
    </div>
  </home-table-item-wrapper>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
import HomeTableItemWrapper from './HomeTableItemWrapper.vue';
import HomeTableHeadItem from './HomeTableHeadItem.vue';
import { CATALOG_SORT_SET } from '../../../store';

const headItems = [
  {
    value: 'name',
    type: 'string',
    position: '_left',
    name: 'title',
  },
  {
    value: 'date',
    type: 'date',
    position: '_left',
    name: 'posted date',
  },
  {
    value: 'views',
    type: 'number',
    position: '_right',
    name: 'views',
  },
  {
    value: 'likes',
    type: 'number',
    position: '_right',
    name: 'likes',
  },
  {
    value: 'dislikes',
    type: 'number',
    position: '_right',
    name: 'dislikes',
  },
  {
    value: 'comments',
    type: 'number',
    position: '_right',
    name: 'comments',
  },
  {
    value: 'engagement_ratio',
    type: 'number',
    position: '_right',
    name: 'engagement ratio',
  },
  {
    value: 'watch_time',
    type: 'number',
    position: '_right',
    name: 'watch time',
  },
  {
    value: 'watch_time_ratio',
    type: 'number',
    position: '_right',
    name: 'watch time ratio',
  },
  {
    value: 'click_through_rate',
    type: 'number',
    position: '_right',
    name: 'click through rate',
  },
  {
    value: 'ad_revenue',
    type: 'number',
    position: '_right',
    name: 'ad revenue',
  },
  {
    value: 'production_cost',
    type: 'number',
    position: '_right',
    name: 'production cost',
  },
  {
    value: 'roi',
    type: 'number',
    position: '_right',
    name: 'roi',
  },
];

export default {
  name: 'HomeTableHead',
  components: {
    HomeTableItemWrapper,
    HomeTableHeadItem,
  },
  props: {
    value: [String, Boolean],
    val: Boolean,
  },
  data() {
    return {
      headItems,
    };
  },
  computed: {
    ...mapState('catalog', ['sortBy', 'sortDirection']),
    checkbox: {
      set(e) {
        this.$emit('input', e);
      },
      get() {
        return this.value;
      },
    },
  },
  methods: {
    ...mapMutations('catalog', [CATALOG_SORT_SET]),
    toggleSortBy(sortBy, sortType) {
      const sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
      this[CATALOG_SORT_SET]({ sortBy, sortDirection, sortType });
    },
  },
};
</script>
<style lang="scss">
$style: home-table-head;
.#{$style} {
  border-bottom: 1px solid $G7;
  padding-bottom: 14px;
  &__cell {
    @include text($H10, 500, $G4);
    text-transform: uppercase;
    text-align: left;
    justify-self: start;
    &._left {
      text-align: left;
      justify-self: start;
    }
    &._right {
      text-align: right;
      justify-self: end;
    }
  }
}
</style>
