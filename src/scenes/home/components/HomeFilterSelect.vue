<template>
  <a-popover class="home-filter-select" trigger="click" placement="bottomLeft">
    <template #content>
      <m-row class="home-filter-select__search" ai="center">
        <input
          placeholder="Search"
          class="home-filter-select__search-input"
          type="text"
          v-model="search"
        />
        <m-icon class="home-filter-select__search-icon" icon="search" />
      </m-row>
      <m-divider color="#373c54" :offset="12" />
      <div class="home-filter-select__container">
        <span class="home-filter-select__label">Clear selectes items</span>
        <m-checkbox
          name="active-filters"
          v-model="filtersModel"
          :val="checkbox"
          v-for="checkbox in activeFilters"
          :key="checkbox.value"
        >{{checkbox.name}}</m-checkbox>
      </div>
      <m-divider color="#373c54" :offset="12" />
      <div class="home-filter-select__container">
        <span class="home-filter-select__label">All Filters</span>
        <m-checkbox
          name="active-filters"
          v-model="filtersModel"
          :val="checkbox"
          v-for="checkbox in inactiveFilters"
          :key="checkbox.value"
        >{{checkbox.name}}</m-checkbox>
      </div>
    </template>
    <m-subtle class="home-filter-select__add-btn">
      <template #icon>
        <m-icon icon="plus" />
      </template>
      More
    </m-subtle>
  </a-popover>
</template>
<script>
export default {
  name: 'HomeFilterSelect',
  props: {
    value: [String, Array, Number, Boolean],
    activeFilters: Array,
    filters: Array,
  },
  data() {
    return {
      search: '',
    };
  },
  computed: {
    filtersModel: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
    inactiveFilters() {
      return this.filters.filter(({ value }) => this.activeFilters.every((item) => item.value !== value));
    },
  },
};
</script>
<style lang="scss" scoped>
$style: home-filter-select;
.#{$style} {
  &__search {
    min-width: 202px;
    padding: 0 14px 0 16px;
  }
  &__add-btn {
    position: relative;
    bottom: -1px;
    svg {
      position: relative;
      top: -1px;
    }
  }
  &__search-input {
    @extend %input;
    padding: 3px 0 0;
    min-height: auto;
    background-color: transparent;
    border: none;
    &:focus + .#{$style}__search-icon {
      fill: $G2;
    }
  }
  &__search-icon {
    @include svg(16px, $G6);
  }
  &__container {
    min-width: 202px;
    padding: 0 16px;
  }
  &__label {
    display: block;
    @include text($H12, 400);
    margin-bottom: 9px;
  }
}
</style>
