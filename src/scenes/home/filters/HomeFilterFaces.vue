<template>
  <home-filter-button
    :value="getValue"
    name="No. of Faces Detected"
    class="home-filter-faces"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-faces__header">
      <m-radio name="faces" val="all" v-model="value">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-faces__body">
      <m-radio
        name="faces"
        val="custom"
        v-model="value"
        class="home-filter-faces__custom-radio"
      >Custom</m-radio>
      <a-slider :disabled="value !== 'custom'" :max="5" v-model="sliderValue" />
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterFaces',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      value: 'all',
      sliderValue: 0,
    };
  },
  computed: {
    getValue() {
      return this.value === 'all' ? 'all' : this.sliderValue;
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-faces;
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
