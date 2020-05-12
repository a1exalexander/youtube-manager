<template>
  <m-row class="home-filter-search" ai="center">
    <input placeholder="Search" class="home-filter-search__input" type="text" v-model="search" />
    <m-icon class="home-filter-search__icon" icon="search" />
  </m-row>
</template>
<script>
export default {
  name: 'HomeFilterSearch',
  props: {
    value: String,
  },
  computed: {
    search: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-search;
.#{$style} {
  padding: 0 16px;
  &__input {
    @extend %input;
    padding: 3px 0 0;
    min-height: auto;
    background-color: transparent;
    border: none;
    &:focus + .#{$style}__icon {
      fill: $G2;
    }
  }
  &__icon {
    @include svg(16px, $G6);
  }
}
</style>
