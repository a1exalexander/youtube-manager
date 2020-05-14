<template>
  <home-filter-button
    name="Storytelling Method"
    class="home-filter-storytelling-method"
    :value="getValue"
    @remove="() => $emit('remove')"
  >
    <m-col class="home-filter-storytelling-method__header">
      <m-radio :val="true" v-model="all">All</m-radio>
    </m-col>
    <m-divider color="#373c54" :offset="12" />
    <m-col class="home-filter-storytelling-method__body">
      <m-checkbox
        name="race"
        v-model="checked"
        :val="input.name"
        class="home-filter-storytelling-method__checkbox"
        v-for="input in inputs"
        :key="input.name"
      >{{input.name}}</m-checkbox>
    </m-col>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';

export default {
  name: 'HomeFilterStorytellingMethod',
  components: {
    HomeFilterButton,
  },
  data() {
    return {
      inputs: [
        { name: 'Point and Shoot' },
        { name: 'Interview' },
        { name: 'Music Video' },
        { name: 'Episode' },
        { name: 'Game' },
        { name: 'Tutorial' },
        { name: 'Vlog' },
        { name: 'Lecture' },
      ],
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
$style: home-filter-storytelling-method;
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
