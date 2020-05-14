<template>
  <home-filter-button name="Views" class="home-filter-views" :value='value' @remove="() => $emit('remove')">
    <m-col class="home-filter-views__header">
      <m-radio name="view" val="all" v-model="value">All Views</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-views__body">
      <m-radio
        name="view"
        val="custom"
        v-model="value"
        class="home-filter-views__custom-radio"
      >Custom</m-radio>
      <m-input v-model="from" size="small" type="number">FROM</m-input>
      <m-input v-model="to" size="small" type="number">TO</m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterViews',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      from: '',
      to: '',
      value: 'all',
    };
  },
};
</script>
<style lang="scss">
$style: home-filter-views;
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
