<template>
  <home-filter-button
    name="On-Camera Location"
    class="home-filter-on-camera-location"
    :value="getValue"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-on-camera-location__header">
      <m-radio :val="true" v-model="all">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-on-camera-location__body">
      <m-checkbox
        name="race"
        v-model="checked"
        :val="input.name"
        class="home-filter-on-camera-location__checkbox"
        v-for="input in inputs"
        :key="input.name"
      >{{input.name}}</m-checkbox>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from '../components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterOnCameraLocation',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      inputs: [{ name: 'indors' }, { name: 'Outdors' }, { name: 'Webcam' }],
      checked: [],
      all: true,
    };
  },
  computed: {
    getValue() {
      const { length } = this.checked;
      return length === 0 || length === this.inputs.length ? 'All' : length;
    },
  },
  watch: {
    async all(value) {
      await this.$nextTick();
      if (value) this.checked = [];
    },
    async checked(values) {
      const { length } = values;
      const isEmpty = !length;
      const isFull = length === this.inputs.length;
      await this.$nextTick();
      this.all = isEmpty || isFull;
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-on-camera-location;
.#{$style} {
  &__header {
    @extend %filter-header;
  }
  &__body {
    @extend %filter-body;
  }
  &__checkbox:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
