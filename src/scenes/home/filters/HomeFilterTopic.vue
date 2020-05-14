<template>
  <home-filter-button :value="getValue" name="Topic" class="home-filter-topic" @remove="() => $emit('remove')">
    <home-filter-search v-model="search" />
    <m-divider color="#373c54" :offset="12" />
    <div class="home-filter-topic__body">
      <m-col class="home-filter-topic__wrapper">
        <m-checkbox
          class="home-filter-topic__checkbox"
          v-for="topic in filteredTopics"
          :key="topic"
          :label="topic"
          :val="topic"
          name="selectedTopics"
          v-model="selectedTopics"
        />
      </m-col>
    </div>
  </home-filter-button>
</template>
<script>
import HomeFilterButton from './components/HomeFilterButton.vue';
import HomeFilterSearch from './components/HomeFilterSearch.vue';

export default {
  name: 'HomeFilterTopic',
  components: {
    HomeFilterButton,
    HomeFilterSearch,
  },
  data() {
    return {
      topics: ['first', 'second', 'third', 'fourth', 'fifth', 'sixth', 'seventh', 'eigth'],
      selectedTopics: [],
      search: '',
    };
  },
  computed: {
    filteredTopics() {
      return this.topics.filter(this.$onSearch(this.search));
    },
    getValue() {
      const { length } = this.selectedTopics;
      return length === 0 || length === this.topics.length ? 'All' : length;
    },
  },
};
</script>
<style lang="scss">
$style: home-filter-topic;
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
