<template>
  <home-filter-button
    :value="value"
    name="Watch Time"
    class="home-filter-watch-time"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-watch-time__header">
      <m-radio name="clickRate" val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-watch-time__body">
      <m-radio
        name="clickRate"
        val="Custom"
        v-model="value"
        class="home-filter-watch-time__custom-radio"
      >Custom</m-radio>
      <m-input
        placeholder="00:00:00"
        v-model="from"
        size="small"
        class="home-filter-watch-time__input"
        maxlength="8"
        icon-right="time"
        :disabled="value === 'all'"
      >FROM</m-input>
      <m-input
        placeholder="00:00:00"
        v-model="to"
        size="small"
        maxlength="8"
        icon-right="time"
        :disabled="value === 'all'"
      >TO</m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props, timeOff, time } from '../../../utils';

export default {
  name: 'HomeFilterWatchTime',
  components: {
    HomeFilterButton,
  },
  props,
  computed: {
    filter,
    from: filterGetSet('from', '00:00:00', { type: 'number', maskGet: time, maskSet: timeOff }),
    to: filterGetSet('to', '00:00:00', { type: 'number', maskGet: time, maskSet: timeOff }),
    value: filterGetSet('value', 'all'),
  },
};
</script>
<style lang="scss">
$style: home-filter-watch-time;
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
    @extend %input-symbol;
    @include svg(13px, $G6);
  }
  &__input {
    margin-bottom: 10px;
  }
}
</style>
