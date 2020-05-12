<template>
  <m-container class="home-filters-scene">
    <m-row wrap ai="center">
      <span class="home-filters-scene__caption">Filter by:</span>
      <component
        :is="`home-filter-${filter.value}`"
        v-for="filter in activeFilters"
        :key="filter.value"
        @remove="() => onRemove(filter.value)"
      />
      <home-filter-select
        v-model="activeFilters"
        :filters="filters"
        :active-filters="activeFilters"
      />
    </m-row>
  </m-container>
</template>
<script>
import HomeFilterSelect from './components/HomeFilterSelect.vue';
import HomeFilterViews from './filters/HomeFilterViews.vue';
import HomeFilterTopic from './filters/HomeFilterTopic.vue';
import HomeFilterProduction from './filters/HomeFilterProduction.vue';
import HomeFilterRoi from './filters/HomeFilterRoi.vue';
import HomeFilterDateRange from './filters/HomeFilterDateRange.vue';
import HomeFilterOnCameraRace from './filters/HomeFilterOnCameraRace.vue';
import HomeFilterRunTime from './filters/HomeFilterRunTime.vue';

export default {
  name: 'HomeFiltersScene',
  components: {
    HomeFilterViews,
    HomeFilterSelect,
    HomeFilterTopic,
    HomeFilterProduction,
    HomeFilterRoi,
    HomeFilterDateRange,
    HomeFilterOnCameraRace,
    HomeFilterRunTime,
  },
  data() {
    return {
      filters: [
        { name: 'views', value: 'views' },
        { name: 'date range', value: 'date-range' },
        { name: 'run time', value: 'run-time' },
        // { name: 'watch time', value: 'watch-time' },
        // { name: 'watch time ratio', value: 'watch-time-ratio' },
        // { name: 'engagement ratio', value: 'engagement-ratio' },
        // { name: 'click through rate', value: 'click-through-rate' },
        // { name: 'impressions', value: 'impressions' },
        // { name: 'no. of faces detected', value: 'no-of-faces-detected' },
        { name: 'On-Camera Race', value: 'on-camera-race' },
        { name: 'ROI', value: 'roi' },
        { name: 'Production Value', value: 'production' },
        { name: 'Topic', value: 'topic' },
      ],
      activeFilters: [],
    };
  },
  methods: {
    onRemove(value) {
      const idx = this.activeFilters.findIndex((item) => item.value === value);
      this.activeFilters.splice(idx, 1);
    },
  },
};
</script>
<style lang="scss">
$style: home-filters-scene;
.#{$style} {
  background-color: $dark;
  padding-bottom: 20px;
  &__caption {
    @include text($H12, 500);
    margin-right: 10px;
  }
}
</style>
