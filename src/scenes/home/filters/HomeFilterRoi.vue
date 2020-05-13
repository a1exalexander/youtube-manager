<template>
  <home-filter-button
    :value="getValue"
    name="ROI"
    class="home-filter-roi"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-roi__header">
      <m-radio name="roi" val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-roi__body">
      <m-radio
        name="roi"
        val="custom"
        v-model="value"
        class="home-filter-roi__custom-radio"
      >Custom</m-radio>
      <m-input
        class="home-filter-roi__input"
        v-model="custom"
        size="small"
        type="number"
        :disabled="value === 'all'"
      >
        FROM 0 TO 100
        <span class="home-filter-roi__percents">%</span>
      </m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from '../components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterRoi',
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
$style: home-filter-roi;
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
  &__input {
    position: relative;
  }
  &__percents {
    @extend %input-symbol;
  }
}
</style>
