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
      <m-input v-model="from" size="small" type="number">
        FROM
        <span class="home-filter-production-cost__symbol">$</span>
      </m-input>
      <m-input v-model="to" size="small" type="number">
        TO
        <span class="home-filter-production-cost__symbol">$</span>
      </m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterProductionCost',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      from: '0',
      to: '0',
      value: 'all',
    };
  },
  computed: {
    getValue() {
      return this.value === 'all' ? 'All' : 'Custom';
    },
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
    @extend %input-symbol;
  }
}
</style>
