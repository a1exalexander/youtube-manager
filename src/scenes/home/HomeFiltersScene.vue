<template>
  <m-container class="home-filters-scene">
    <m-row wrap ai="center" class="home-filters-scene__row">
      <span class="home-filters-scene__caption">Filter by:</span>
      <component
        :is="`home-filter-${filter.id}`"
        v-for="filter in filters"
        :key="filter.id"
        :id='filter.id'
        @remove="onRemove(filter.id)"
        class="home-filters-scene__filter"
      />
      <home-filter-select v-model="activeFilters" :filters="filterList" :active-filters="filters" />
    </m-row>
  </m-container>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
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
import { CATALOG_FILTERS_SET, CATALOG_FILTERS_REMOVE } from '../../store';

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
      filterList: [
        { name: 'views', id: 'views' },
        { name: 'date range', id: 'date-range' },
        { name: 'run time', id: 'run-time' },
        { name: 'watch time', id: 'watch-time' },
        { name: 'Watch Time Ratio', id: 'watch-time-ratio' },
        { name: 'Engagement Ratio', id: 'engagement-ratio' },
        { name: 'Click Through Rate', id: 'click-through-rate' },
        { name: 'Impressions', id: 'impressions' },
        { name: 'No. of Faces Detected', id: 'faces' },
        { name: 'Categories', id: 'categories' },
        { name: 'Ad Revenue', id: 'ad-revenue' },
        { name: 'Production Cost', id: 'production-cost' },
        { name: 'Sponsored', id: 'sponsored' },
        { name: 'On-Camera Gender', id: 'on-camera-gender' },
        { name: 'Storytelling Method', id: 'storytelling-method' },
        { name: 'On-Camera Location', id: 'on-camera-location' },
        { name: 'On-Camera Race', id: 'on-camera-race' },
        { name: 'ROI', id: 'roi' },
        { name: 'Production id', id: 'production' },
        { name: 'Topic', id: 'topic' },
      ],
    };
  },
  computed: {
    ...mapState('catalog', ['filters']),
    activeFilters: {
      get() {
        return this.filters;
      },
      set(value) {
        this[CATALOG_FILTERS_SET](value);
      },
    },
  },
  methods: {
    ...mapMutations('catalog', [CATALOG_FILTERS_SET, CATALOG_FILTERS_REMOVE]),
    onRemove(id) {
      this[CATALOG_FILTERS_REMOVE](id);
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
