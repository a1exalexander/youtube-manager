<template>
  <home-filter-button :value="getValue" name="Categories" class="home-filter-categories" @remove="() => $emit('remove')">
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
          v-model="selectedCategories"
        />
      </m-col>
    </div>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import HomeFilterSearch from './components/HomeFilterSearch.vue';

export default {
  name: 'HomeFilterCategories',
  components: {
    HomeFilterButton,
    HomeFilterSearch,
  },
  data() {
    return {
      categories: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth'],
      selectedCategories: [],
      search: '',
    };
  },
  computed: {
    filteredTopics() {
      return this.categories.filter(this.$onSearch(this.search));
    },
    getValue() {
      const { length } = this.selectedCategories;
      return length === 0 || length === this.categories.length ? 'All' : length;
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
    max-height: 178px;
    @extend %transparent-csrollbar;
  }
  &__checkbox:not(:last-child) {
    margin-bottom: 12px;
  }
}
</style>
