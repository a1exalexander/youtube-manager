<template>
  <home-filter-button
    name="Production Cost"
    class="home-filter-production-cost"
    :value="value"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-production-cost__header">
      <m-radio name="view" val="all" v-model="value">All Views</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-production-cost__body">
      <m-radio
        name="view"
        val="custom"
        v-model="value"
        class="home-filter-production-cost__custom-radio"
      >Custom</m-radio>
      <m-input :disabled="value === 'all'" v-model="from" size="small" type="number">
        FROM
        <template #iconRight>
          <span class="home-filter-production-cost__symbol">$</span>
        </template>
      </m-input>
      <m-input :disabled="value === 'all'" v-model="to" size="small" type="number">
        TO
        <template #iconRight>
          <span class="home-filter-production-cost__symbol">$</span>
        </template>
      </m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props, getStringValue } from '../../../utils';

export default {
  name: 'HomeFilterProductionCost',
  components: {
    HomeFilterButton,
  },
  props,
  computed: {
    getStringValue,
    filter,
    from: filterGetSet('from', '0'),
    to: filterGetSet('to', '0'),
    value: filterGetSet('value', 'all'),
  },
};
</script>
<style lang="scss">
$style: home-filter-production-cost;
.#{$style} {
  &__header {
    @extend %filter-header;
  }
  &__body {
    @extend %filter-body;
  }
  &__custom-radio {
    @extend %custom-radio;
  }
  &__symbol {
    @extend %icon-right-symbol;
  }
}
</style>
