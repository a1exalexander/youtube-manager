<template>
  <home-filter-button
    name="On-Camera Gender"
    class="home-filter-on-camera-gender"
    :value="value"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-on-camera-gender__header">
      <m-radio name="gender" val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-on-camera-gender__body">
      <m-radio
        name="gender"
        val="male"
        v-model="value"
        class="home-filter-on-camera-gender__gender-radio"
      >Male</m-radio>
      <m-radio name="gender" val="female" v-model="value">Female</m-radio>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props } from '../../../utils';

export default {
  name: 'HomeFilterOnCameraGender',
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
$style: home-filter-on-camera-gender;
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
