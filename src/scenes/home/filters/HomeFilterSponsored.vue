<template>
  <home-filter-button
    name="Sponsored"
    class="home-filter-sponsored"
    :value="value"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-sponsored__header">
      <m-radio val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-sponsored__body">
      <m-radio
        name="value"
        val="Yes"
        v-model="value"
        class="home-filter-sponsored__gender-radio"
      >Yes</m-radio>
      <m-radio name="value" val="No" v-model="value">No</m-radio>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props } from '../../../utils';

export default {
  name: 'HomeFilterSponsored',
  components: {
    HomeFilterButton,
  },
  props,
  computed: {
    filter,
    value: filterGetSet('value', 'all'),
  },
};
</script>
<style lang="scss">
$style: home-filter-sponsored;
.#{$style} {
  &__header {
    @extend %filter-header;
  }
  &__body {
    @extend %filter-body;
  }
  &__gender-radio {
    margin-bottom: 12px;
  }
}
</style>
