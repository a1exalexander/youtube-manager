<template>
  <a-popover class="home-filter-select" trigger="click" placement="bottomLeft">
    <template #content>
      <home-filter-search v-model="search" />
      <m-divider color="#373c54" :offset="12" />
      <div class="home-filter-select__container">
        <span class="home-filter-select__label">Clear selectes items</span>
        <div class="home-filter-select__list">
          <m-checkbox
            class="home-filter-select__checkbox"
            name="active-filters"
            v-model="filtersModel"
            :val="checkbox"
            v-for="checkbox in activeFilters"
            :key="checkbox.id"
          >
            <span class="home-filter-select__value">{{checkbox.name}}</span>
          </m-checkbox>
        </div>
      </div>
      <m-divider color="#373c54" :offset="12" />
      <div class="home-filter-select__container">
        <span class="home-filter-select__label">All Filters</span>
        <div class="home-filter-select__list">
          <m-checkbox
            class="home-filter-select__checkbox"
            name="active-filters"
            v-model="filtersModel"
            :val="checkbox"
            v-for="checkbox in inactiveFilters"
            :key="checkbox.id"
          >
            <span class="home-filter-select__value">{{checkbox.name}}</span>
          </m-checkbox>
        </div>
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
import HomeFilterSearch from './HomeFilterSearch.vue';

export default {
  name: 'HomeFilterSelect',
  components: {
    HomeFilterSearch,
  },
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
      set(value) {
        this.$emit('input', value);
      },
    },
    inactiveFilters() {
      return this.filters
        .filter(({ id }) => this.activeFilters.every((item) => item.id !== id))
        .filter(this.$onSearch(this.search));
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-select;
.#{$style} {
  &__search {
    min-width: 202px;
    padding: 0 14px 0 16px;
  }
  &__list {
    max-height: 106px;
    overflow-y: auto;
    padding-right: 9px;
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
    padding: 0 7px 0 16px;
  }
  &__label {
    display: block;
    @include text($H12, 400);
    margin-bottom: 9px;
  }
  &__checkbox {
    min-height: 19px;
  }
  &__checkbox:not(:last-child) {
    margin-bottom: 10px;
  }
  &__value {
    text-transform: capitalize;
  }
}
</style>
