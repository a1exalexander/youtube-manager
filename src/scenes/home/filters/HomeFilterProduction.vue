<template>
  <home-filter-button
    :value="getValue"
    name="Production Value"
    class="home-filter-production"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-production__header">
      <m-radio name="production" val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-production__body">
      <m-radio
        name="production"
        val="custom"
        v-model="value"
        class="home-filter-views__custom-radio"
      >Custom</m-radio>
      <a-slider v-model="custom" :disabled="value !== 'custom'" :max="6" />
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from '../components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterProduction',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      value: 'all',
      custom: 3,
    };
  },
  computed: {
    getValue() {
      return this.value === 'all' ? 'All' : this.custom;
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-production;
.#{$style} {
  &__header {
    padding: 3px 16px 0;
  }
  &__body {
    padding: 0 16px 13px;
    min-width: 152px;
  }
  &__custom-radio {
    margin-bottom: 16px;
  }
}
</style>
