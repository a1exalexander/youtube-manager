<template>
  <m-container class="home-filters-scene">
    <m-row wrap ai="center" class="home-filters-scene__row">
      <span class="home-filters-scene__caption">Filter by:</span>
      <component
        :is="`home-filter-${filter.value}`"
        v-for="filter in activeFilters"
        :key="filter.value"
        @remove="() => onRemove(filter.value)"
        class="home-filters-scene__filter"
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
import HomeFilterSelect from './filters/components/HomeFilterSelect.vue';
import HomeFilterViews from './filters/HomeFilterViews.vue';
import HomeFilterTopic from './filters/HomeFilterTopic.vue';
import HomeFilterProduction from './filters/HomeFilterProduction.vue';
import HomeFilterRoi from './filters/HomeFilterRoi.vue';
import HomeFilterDateRange from './filters/HomeFilterDateRange.vue';
import HomeFilterOnCameraRace from './filters/HomeFilterOnCameraRace.vue';
import HomeFilterRunTime from './filters/HomeFilterRunTime.vue';
import HomeFilterOnCameraLocation from './filters/HomeFilterOnCameraLocation.vue';
import HomeFilterStorytellingMethod from './filters/HomeFilterStorytellingMethod.vue';
import HomeFilterOnCameraGender from './filters/HomeFilterOnCameraGender.vue';
import HomeFilterSponsored from './filters/HomeFilterSponsored.vue';
import HomeFilterProductionCost from './filters/HomeFilterProductionCost.vue';
import HomeFilterAdRevenue from './filters/HomeFilterAdRevenue.vue';
import HomeFilterCategories from './filters/HomeFilterCategories.vue';
import HomeFilterFaces from './filters/HomeFilterFaces.vue';
import HomeFilterImpressions from './filters/HomeFilterImpressions.vue';
import HomeFilterClickThroughRate from './filters/HomeFilterClickThroughRate.vue';
import HomeFilterEngagementRatio from './filters/HomeFilterEngagementRatio.vue';
import HomeFilterWatchTimeRatio from './filters/HomeFilterWatchTimeRatio.vue';
import HomeFilterWatchTime from './filters/HomeFilterWatchTime.vue';

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
    HomeFilterOnCameraLocation,
    HomeFilterStorytellingMethod,
    HomeFilterOnCameraGender,
    HomeFilterSponsored,
    HomeFilterProductionCost,
    HomeFilterAdRevenue,
    HomeFilterCategories,
    HomeFilterFaces,
    HomeFilterImpressions,
    HomeFilterClickThroughRate,
    HomeFilterEngagementRatio,
    HomeFilterWatchTimeRatio,
    HomeFilterWatchTime,
  },
  data() {
    return {
      filters: [
        { name: 'views', value: 'views' },
        { name: 'date range', value: 'date-range' },
        { name: 'run time', value: 'run-time' },
        { name: 'watch time', value: 'watch-time' },
        { name: 'Watch Time Ratio', value: 'watch-time-ratio' },
        { name: 'Engagement Ratio', value: 'engagement-ratio' },
        { name: 'Click Through Rate', value: 'click-through-rate' },
        { name: 'Impressions', value: 'impressions' },
        { name: 'No. of Faces Detected', value: 'faces' },
        { name: 'Categories', value: 'categories' },
        { name: 'Ad Revenue', value: 'ad-revenue' },
        { name: 'Production Cost', value: 'production-cost' },
        { name: 'Sponsored', value: 'sponsored' },
        { name: 'On-Camera Gender', value: 'on-camera-gender' },
        { name: 'Storytelling Method', value: 'storytelling-method' },
        { name: 'On-Camera Location', value: 'on-camera-location' },
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
  padding-bottom: 16px;
  &__row {
    min-height: 31px;
  }
  &__caption {
    @include text($H12, 500);
    margin-right: 10px;
  }
  &__filter {
    padding: 4px 0;
  }
}
</style>
