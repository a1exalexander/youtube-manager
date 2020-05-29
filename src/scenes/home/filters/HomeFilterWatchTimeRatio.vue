<template>
  <home-filter-button
    :value="getPercentsValue"
    name="Watch Time Ratio"
    class="home-filter-watch-time-ratio"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-watch-time-ratio__header">
      <m-radio name="clickRate" val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-watch-time-ratio__body">
      <m-radio
        name="clickRate"
        val="custom"
        v-model="value"
        class="home-filter-watch-time-ratio__custom-radio"
      >Custom</m-radio>
      <m-input
        class="home-filter-watch-time-ratio__input"
        v-model="custom"
        size="small"
        type="number"
        :disabled="value === 'all'"
      >
        FROM 0 TO 100
        <template #iconRight>
          <span class="home-filter-watch-time-ratio__percents">%</span>
        </template>
      </m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props, getPercentsValue } from '../../../utils';

export default {
  name: 'HomeFilterWatchTimeRatio',
  components: {
    HomeFilterButton,
  },
  props,
  computed: {
    filter,
    value: filterGetSet('value', 'all'),
    custom: filterGetSet('custom', 0),
    getPercentsValue,
  },
};
</script>
<style lang="scss">
$style: home-filter-watch-time-ratio;
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
  &__percents {
    @extend %icon-right-symbol;
  }
}
</style>
