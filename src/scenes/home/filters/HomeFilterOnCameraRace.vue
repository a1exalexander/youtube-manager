<template>
  <home-filter-button
    name="On-Camera Race"
    class="home-filter-on-camera-race"
    :value="getValue"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-on-camera-race__header">
      <m-radio :val="true" v-model="all">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-on-camera-race__body">
      <m-checkbox
        name="race"
        v-model="checked"
        :val="input.name"
        class="home-filter-on-camera-race__checkbox"
        v-for="input in inputs"
        :key="input.name"
      >{{input.name}}</m-checkbox>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import { filterGetSet, filter, props } from '../../../utils';

export default {
  name: 'HomeFilterOnCameraRace',
  components: {
    HomeFilterButton,
  },
  props,
  data() {
    return {
      inputs: [{ name: 'Black' }, { name: 'White' }, { name: 'Asian' }, { name: 'Hispanic' }, { name: 'Other' }],
      all: true,
    };
  },
  computed: {
    filter,
    getValue() {
      const { length } = this.checked;
      return length === 0 || length === this.inputs.length ? 'All' : length;
    },
    checked: filterGetSet('checked', []),
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
$style: home-filter-on-camera-race;
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
