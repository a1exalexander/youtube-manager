<template>
  <div class="overview-scene">
    <m-row>
      <m-col class="overview-scene__video-wrapper">
        <img src="https://picsum.photos/520/290" alt />
      </m-col>
      <m-col class="overview-scene__video-description">
        <h1 class="overview-scene__video-title">Growth, Sales, and a New Era of B2B</h1>
        <m-row class="overview-scene__video-row">
          <m-col class="overview-scene__video-col">
            <h6 class="overview-scene__video-subtitle">
              Category:
              <span>Society</span>
            </h6>
            <h6 class="overview-scene__video-subtitle">
              Posted Date:
              <span>11/11/2019</span>
            </h6>
          </m-col>
          <m-col class="overview-scene__video-col">
            <h6 class="overview-scene__video-subtitle">
              Topic:
              <span>Business</span>
            </h6>
            <h6 class="overview-scene__video-subtitle">
              Length:
              <span>16:07</span>
            </h6>
          </m-col>
          <m-col class="overview-scene__video-col">
            <h6 class="overview-scene__video-subtitle">
              Production Cost:
              <span>$1,000</span>
            </h6>
            <h6 class="overview-scene__video-subtitle">
              ROI:
              <span>8%</span>
            </h6>
          </m-col>
        </m-row>
        <h6 class="overview-scene__video-subtitle overview-scene__video-subtitle--mb">Description:</h6>
        <p class="overview-scene__video-text">
          Traditionally, consumer companies have had viral growth and network effects, while enterprise companies have
          been built brick by brick and sale by sale. But a new wave of B2B companies — Dropbox, Twilio, Atlassian,
          SurveyMonkey, GitHub — show that recently enterprise businesses have started to look a lot more like their
          consumer counterparts.
        </p>
      </m-col>
    </m-row>
    <m-divider />
    <m-row class="overview-scene__charts-row">
      <div class="overview-scene__chart-wrapper">
        <overview-chart />
      </div>
      <div class="overview-scene__chart-wrapper">
        <overview-chart type="teal" />
      </div>
      <div class="overview-scene__chart-wrapper">
        <overview-chart type="violet" />
      </div>
      <div class="overview-scene__chart-wrapper">
        <overview-chart type="lime" />
      </div>
    </m-row>
    <div class="overview-scene__bottom-block">
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
import OverviewChart from './overview-scene/OverviewChart.vue';
import ProductionOverviewTab from './overview-scene/ProductionOverview.vue';
import TranscriptOverviewTab from './overview-scene/TranscriptOverview.vue';
import LanguageStatsTab from './overview-scene/LanguageStats.vue';

export default {
  name: 'OverviewScene',
  components: {
    OverviewChart,
    ProductionOverviewTab,
    TranscriptOverviewTab,
    LanguageStatsTab,
  },
  data() {
    return {
      chartdata: {
        labels: ['NOV 12', 'JAN25', 'MAR 17', 'NOV 12', 'JAN25', 'MAR 17'],
        datasets: [
          {
            label: 'First data',
            data: [1, 6, 3, 8, 1, 7],
          },
        ],
      },
    };
  },
};
</script>
<style lang="scss">
.overview-scene {
  &__video-wrapper {
    flex: 1 1 516px;
    min-width: 40%;
    border: 1px solid $D9;
    border-radius: 2px;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__video-description {
    padding-left: 40px;
    flex: 1 1 60%;
  }
  &__video-title {
    @include text($H18, 500, $N0);
    margin-bottom: 16px;
  }
  &__video-row {
    margin-bottom: 16px;
  }
  &__video-col {
    margin-right: 60px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__video-subtitle {
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
  &__video-text {
    @include text($H12, 400, $G4);
    line-height: 1.7;
  }
  &__bottom-block {
    @extend %block-style;
  }
  &__tab {
    padding: 0 24px 30px;
  }
  &__chart-wrapper {
    @extend %block-style;
    flex: 1 1 25%;
    max-width: 25%;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
  }
  &__charts-row {
    margin-bottom: 24px;
  }
}
</style>
