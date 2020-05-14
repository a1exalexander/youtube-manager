<template>
  <home-filter-button
    name="On-Camera Gender"
    class="home-filter-on-camera-gender"
    :value="gender"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-on-camera-gender__header">
      <m-radio val="All" v-model="gender">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-on-camera-gender__body">
      <m-radio
        name="gender"
        val="Male"
        v-model="gender"
        class="home-filter-on-camera-gender__gender-radio"
      >Male</m-radio>
      <m-radio name="gender" val="Female" v-model="gender">Female</m-radio>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterOnCameraGender',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      gender: 'All',
    };
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
