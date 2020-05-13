<template>
  <home-filter-button
    :value="value"
    name="Watch Time"
    class="home-filter-watch-time"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-watch-time__header">
      <m-radio name="clickRate" val="All" v-model="value">All</m-radio>
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
        type="number"
        class="home-filter-watch-time__input"
      >
        FROM
        <m-icon icon="time" class="home-filter-watch-time__symbol" />
      </m-input>
      <m-input placeholder="00:00:00" v-model="to" size="small" type="number">
        TO
        <m-icon icon="time" class="home-filter-watch-time__symbol" />
      </m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from '../components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterWatchTimeRatio',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      value: 'All',
      from: '',
      to: '',
    };
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
