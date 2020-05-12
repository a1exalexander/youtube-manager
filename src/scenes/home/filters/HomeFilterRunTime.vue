<template>
  <home-filter-button name="Run Time" :value="value" @remove="() => $emit('remove')">
    <m-col class="home-filter-run-time">
      <m-radio
        class="home-filter-run-time__radio"
        name="run-time"
        val="all"
        v-model="value"
      >All</m-radio>
      <m-divider color="#373c54" :offset="12" />
      <m-radio
        class="home-filter-run-time__radio home-filter-run-time__radio--mb"
        name="run-time"
        val="custom"
        v-model="value"
      >Custom</m-radio>
      <m-input class="home-filter-run-time__input" v-model="from" size="small" type="number">FROM</m-input>
      <m-input class="home-filter-run-time__input" v-model="to" size="small" type="number">TO</m-input>
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
      value: 'all',
    };
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
    margin: 0 16px 8px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}
</style>
