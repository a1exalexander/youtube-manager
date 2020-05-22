<template>
  <m-container class="home-charts-scene">
    <m-row class="home-charts-scene__charts-row">
      <div class="home-charts-scene__chart-wrapper">
        <line-chart :firstDataset="account.watchTime" :labels="getAccountWatchLabels" />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          type="teal"
          dropName="LIKES"
          value="816"
          :firstDataset="account.likeCount"
          :labels="getAccountLikesLabels"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          type="violet"
          dropName="IMPRESSIONS"
          value="268,000"
          :firstDataset="account.impressionCount"
          :labels="getAccountImpressionsLabels"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          type="lime"
          dropName="AD REVENUE"
          value="$2,000"
          :firstDataset="account.adRevenue"
          :labels="getAccountAdRevenueLabels"
        />
      </div>
    </m-row>
  </m-container>
</template>
<script>
import { mapState, mapGetters } from 'vuex';
import LineChart from '../charts/LineChart.vue';

export default {
  name: 'HomeChartsScene',
  components: {
    LineChart,
  },
  computed: {
    ...mapState('charts', ['account']),
    ...mapGetters('charts', ['getAccountWatchLabels', 'getAccountLikesLabels', 'getAccountImpressionsLabels', 'getAccountAdRevenueLabels']),
  },
};
</script>
<style lang="scss">
$styles: home-charts-scene;
.#{$styles} {
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
    margin: 0 0 24px;
  }
}
</style>
