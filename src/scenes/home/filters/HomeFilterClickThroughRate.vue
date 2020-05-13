<template>
  <home-filter-button
    :value="getValue"
    name="Click Through Rate"
    class="home-filter-click-through-rate"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-click-through-rate__header">
      <m-radio name="clickRate" val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-click-through-rate__body">
      <m-radio
        name="clickRate"
        val="custom"
        v-model="value"
        class="home-filter-click-through-rate__custom-radio"
      >Custom</m-radio>
      <m-input
        class="home-filter-click-through-rate__input"
        v-model="custom"
        size="small"
        type="number"
        :disabled="value === 'all'"
      >
        FROM 0 TO 100
        <span class="home-filter-click-through-rate__percents">%</span>
      </m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from '../components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterClickThroughRate',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      value: 'all',
      custom: '0',
    };
  },
  computed: {
    getValue() {
      return this.value === 'all' ? 'All' : `${this.custom}%`;
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-click-through-rate;
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
    @extend %input-symbol;
  }
}
</style>
