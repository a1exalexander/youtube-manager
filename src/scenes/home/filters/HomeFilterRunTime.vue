<template>
  <home-filter-button name="Run Time" :value="value" @remove="() => $emit('remove')">
    <m-col class="home-filter-run-time">
      <m-radio class="home-filter-run-time__radio" name="run-time" val="all" v-model="value">All</m-radio>
      <m-divider color="#373c54" :offset="12" />
      <m-radio
        class="home-filter-run-time__radio home-filter-run-time__radio--mb"
        name="run-time"
        val="custom"
        v-model="value"
      >Custom</m-radio>
      <m-input
        :disabled="value === 'all'"
        class="home-filter-run-time__input"
        placeholder="00:00:00"
        v-model="from"
        maxlength="8"
        size="small"
        icon-right="time"
      >FROM</m-input>
      <m-input
        :disabled="value === 'all'"
        class="home-filter-run-time__input"
        v-model="to"
        placeholder="00:00:00"
        maxlength="8"
        size="small"
        icon-right="time"
      >TO</m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props, timeOff, time } from '../../../utils';

export default {
  name: 'HomeFilterRunTime',
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
$style: home-filter-run-time;
.#{$style} {
  min-width: 132px;
  padding: 3px 0;
  &__radio {
    margin: 0 16px;
    &--mb {
      margin-bottom: 16px;
    }
  }
  &__input {
    margin: 0 16px 7px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
