<template>
  <div class="overview-scene">
    <m-row>
      <m-col class="overview-scene__video-wrapper">
        <youtube class="overview-scene__video" :video-id="details.videoId" />
      </m-col>
      <m-col class="overview-scene__description">
        <h1 class="overview-scene__title">{{details.name}}</h1>
        <m-row class="overview-scene__row">
          <m-col class="overview-scene__col">
            <h6 class="overview-scene__subtitle">
              Category:
              <span class="overview-scene__value">{{details.category}}</span>
            </h6>
            <h6 class="overview-scene__subtitle">
              Posted Date:
              <span class="overview-scene__value">{{details.date}}</span>
            </h6>
          </m-col>
          <m-col class="overview-scene__col">
            <h6 class="overview-scene__subtitle">
              Topic:
              <span class="overview-scene__value">{{details.topic}}</span>
            </h6>
            <h6 class="overview-scene__subtitle">
              Length:
              <span class="overview-scene__value">{{details.length}}</span>
            </h6>
          </m-col>
          <m-col class="overview-scene__col">
            <h6 class="overview-scene__subtitle">
              Production Cost:
              <span
                class="overview-scene__value"
              >{{$currency(details.production_cost)}}</span>
            </h6>
            <h6 class="overview-scene__subtitle">
              ROI:
              <span class="overview-scene__value">{{$float(details.roi)}}%</span>
            </h6>
          </m-col>
        </m-row>
        <h6 class="overview-scene__subtitle overview-scene__subtitle--mb">Description:</h6>
        <p class="overview-scene__text">{{details.description}}</p>
      </m-col>
    </m-row>
    <m-divider :offset='24' />
    <m-row class="overview-scene__charts-row">
      <div class="overview-scene__chart-wrapper">
        <line-chart
          :firstDataset="charts.watchTime"
          :labels="getVideoChartWatchLabels"
          chartId="watch-chart"
          padding="24px"
          left="-10px"
          width="107%"
        />
      </div>
      <div class="overview-scene__chart-wrapper">
        <line-chart
          type="teal"
          dropName="LIKES"
          value="816"
          :firstDataset="charts.likeCount"
          :labels="getVideoChartLikesLabels"
          chartId="likes-chart"
          left="-31px"
          padding="8px"
          width="109%"
        />
      </div>
      <div class="overview-scene__chart-wrapper">
        <line-chart
          type="violet"
          dropName="IMPRESSIONS"
          value="268,000"
          :firstDataset="charts.impressionCount"
          :labels="getVideoChartImpressionsLabels"
          chartId="impressions-chart"
          left="-30px"
          padding="8px"
          width="108%"
        />
      </div>
      <div class="overview-scene__chart-wrapper">
        <line-chart
          type="lime"
          dropName="AD REVENUE"
          value="$2,000"
          :firstDataset="charts.adRevenue"
          :labels="getVideoChartAdRevenueLabels"
          chartId="ad-chart"
          left="-37px"
          width="108%"
        />
      </div>
    </m-row>
    <div class="overview-scene__block">
      <a-tabs
        defaultActiveKey="1"
        class="overview-scene__tabs"
        :tabBarStyle="{ width: '100%', maxWidth: '100%', padding: '0 24px' }"
      >
        <a-tab-pane tab="Production Overview" key="1" class="overview-scene__tab">
          <production-overview-tab />
        </a-tab-pane>
        <a-tab-pane tab="Transcript Overview" key="2" class="overview-scene__tab">
          <transcript-overview-tab />
        </a-tab-pane>
        <a-tab-pane tab="Language Stats" key="3" class="overview-scene__tab">
          <language-stats-tab />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import LineChart from '../charts/LineChart.vue';
import ProductionOverviewTab from './overview-scene/ProductionOverview.vue';
import TranscriptOverviewTab from './overview-scene/TranscriptOverview.vue';
import LanguageStatsTab from './overview-scene/LanguageStats.vue';

export default {
  name: 'OverviewScene',
  components: {
    LineChart,
    ProductionOverviewTab,
    TranscriptOverviewTab,
    LanguageStatsTab,
  },
  computed: {
    ...mapState('video', ['charts', 'details']),
    ...mapGetters('video', [
      'getVideoChartWatchLabels',
      'getVideoChartLikesLabels',
      'getVideoChartImpressionsLabels',
      'getVideoChartAdRevenueLabels',
    ]),
  },
};
</script>
<style lang="scss">
.overview-scene {
  &__video-wrapper {
    flex-basis: 40%;
    @include padding-hack(22.5%, cover);
  }
  &__description {
    padding-left: 40px;
    flex: 1 1;
  }
  &__title {
    @include text($H18, 500, $N0);
    margin-bottom: 16px;
  }
  &__row {
    margin-bottom: 16px;
  }
  &__col {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__subtitle {
    @include text($H12, 500, $N0);
    margin-bottom: 16px;
    span {
      @include text($H12, 400, $G4);
      margin-left: 4px;
    }
    &:last-child {
      margin-bottom: 0;
    }
    &--mb {
      margin-bottom: 4px;
    }
  }
  &__text {
    @include text($H12, 400, $G4);
    line-height: 1.7;
  }
  &__block {
    @extend %block-style;
  }
  &__tab {
    padding: 0 24px 30px;
  }
  &__chart-wrapper {
    border-radius: 2px;
    flex: 1 1 25%;
    max-width: 25%;
    padding: 0 12px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__charts-row {
    margin: 0 -12px 24px;
  }
  &__value {
    text-transform: capitalize;
  }
}
</style>
