<template>
  <home-filter-button
    name="Impressions"
    class="home-filter-impressions"
    :value="value"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-impressions__header">
      <m-radio name="view" val="all" v-model="value">All Views</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-impressions__body">
      <m-radio
        name="view"
        val="Custom"
        v-model="value"
        class="home-filter-impressions__custom-radio"
      >Custom</m-radio>
      <m-input :disabled="value === 'all'" v-model="from" size="small" type="number">FROM</m-input>
      <m-input :disabled="value === 'all'" v-model="to" size="small" type="number">TO</m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props } from '../../../utils';

export default {
  name: 'HomeFilterImpressions',
  components: {
    HomeFilterButton,
  },
  props,
  computed: {
    filter,
    from: filterGetSet('from', '0'),
    to: filterGetSet('to', '0'),
    value: filterGetSet('value', 'all'),
  },
};
</script>
<style lang="scss">
$style: home-filter-impressions;
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
}
</style>
