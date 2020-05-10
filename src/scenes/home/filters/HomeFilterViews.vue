<template>
  <home-filter-button name="Views" class="home-filter-views">
    <m-col class="home-filter-views__header">
      <m-radio name='view' val='view' v-model="value">All Views</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-views__body">
      <m-radio name='view' val='custom' v-model="value" class="home-filter-views__custom-radio">Custom</m-radio>
      <m-input v-model="from" size="small" type="number">FROM</m-input>
      <m-input v-model="to" size="small" type="number">TO</m-input>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from '../components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterViews',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      from: '',
      to: '',
      value: 'view',
    };
  },
};
</script>
<style lang="scss" scoped>
$style: home-filter-views;
.#{$style} {
  &__header {
    padding: 3px 16px 0;
  }
  &__body {
    padding: 0 16px 13px;
  }
  &__custom-radio {
    margin-bottom: 16px;
  }
}
</style>
