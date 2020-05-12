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
import HomeFilterButton from '../components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterViews',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      filters: ['all', 'today', 'last week', 'last month', 'last year'],
      value: 'all',
    };
  },
};
</script>
<style lang="scss">
$style: home-filter-date-range;
.#{$style} {
  &__radio {
    margin: 6px 16px;
    &:first-of-type {
      margin-top: 3px;
    }
    &:last-of-type {
      margin-bottom: 3px;
    }
  }
}
</style>
