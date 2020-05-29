<template>
  <home-filter-button name="Date Range" :value="value" @remove="() => $emit('remove')">
    <m-col class="home-filter-date-range">
      <m-radio
        class="home-filter-date-range__radio"
        name="date-range"
        :val="item"
        v-model="value"
        v-for="item in filters"
        :key="item"
      >{{item}}</m-radio>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props } from '../../../utils';

export default {
  name: 'HomeFilterDateRange',
  components: {
    HomeFilterButton,
  },
  props,
  data() {
    return {
      filters: ['all', 'today', 'last week', 'last month', 'last year'],
    };
  },
  computed: {
    filter,
    value: filterGetSet('value', 'all'),
  },
};
</script>
<style lang="scss">
$style: home-filter-date-range;
.#{$style} {
  min-width: 132px;
  padding: 3px 0;
  &__radio {
    margin: 0 16px 12px;
    &:last-of-type {
      margin-bottom: 0px;
    }
  }
}
</style>
