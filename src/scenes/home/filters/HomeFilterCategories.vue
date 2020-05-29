<template>
  <home-filter-button
    :value="getValue"
    name="Categories"
    class="home-filter-categories"
    @remove="() => $emit('remove')"
  >
    <home-filter-search v-model="search" />
    <m-divider color="#373c54" :offset="12" />
    <div class="home-filter-categories__body">
      <m-col class="home-filter-categories__wrapper">
        <m-checkbox
          class="home-filter-categories__checkbox"
          v-for="topic in filteredTopics"
          :key="topic"
          :label="topic"
          :val="topic"
          name="selectedCategories"
          v-model="categories"
        />
      </m-col>
    </div>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import HomeFilterSearch from './components/HomeFilterSearch.vue';
import { filterGetSet, filter, props } from '../../../utils';

export default {
  name: 'HomeFilterCategories',
  props,
  components: {
    HomeFilterButton,
    HomeFilterSearch,
  },
  data() {
    return {
      categoriesList: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth'],
      search: '',
    };
  },
  computed: {
    filter,
    categories: filterGetSet('categories', []),
    filteredTopics() {
      return this.categoriesList.filter(this.$onSearch(this.search));
    },
    getValue() {
      const { length } = this.categories;
      return length === 0 || length === this.categoriesList.length ? 'All' : length;
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-categories;
.#{$style} {
  &__body {
    padding: 0 7px 6px 16px;
  }
  &__wrapper {
    overflow-y: auto;
    padding-right: 8px;
    max-height: 162px;
    @extend %transparent-csrollbar;
  }
  &__checkbox:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
