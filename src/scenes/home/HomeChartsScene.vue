<template>
  <m-container class="home-charts-scene">
    <m-row class="home-charts-scene__charts-row">
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          type="teal"
          dropName="LIKES"
          :value="$separator(getLikeCountValue)"
          :firstDataset="accountChart.likeCount"
          :secondDataset="amountChart.likeCount"
          :labels="getAccountLikesLabels"
          chartId="likes-chart"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          :firstDataset="accountChart.watchTime"
          :secondDataset="amountChart.watchTime"
          :labels="getAccountWatchLabels"
          chartId="watch-chart"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          type="violet"
          dropName="IMPRESSIONS"
          :value="$separator(getWatchTimeValue * 1000)"
          :firstDataset="accountChart.watchTime"
          :secondDataset="amountChart.watchTime"
          :labels="getAccountImpressionsLabels"
          chartId="impressions-chart"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          type="lime"
          dropName="AD REVENUE"
          :value="$currency(getAdRevenueValue)"
          :firstDataset="accountChart.adRevenue"
          :secondDataset="amountChart.adRevenue"
          :labels="getAccountAdRevenueLabels"
          chartId="ad-chart"
        />
      </div>
    </m-row>
  </m-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import { CHARTS_AMOUNT_REQUEST, CHARTS_AMOUNT_CLEAN } from '@/store';
import LineChart from '../charts/LineChart.vue';

export default {
  name: 'HomeChartsScene',
  components: {
    LineChart,
  },
  computed: {
    ...mapState({
      accountChart: ({ charts }) => charts.account,
      amountChart: ({ charts }) => charts.amount,
      selectedVideos: ({ catalog }) => catalog.selected,
    }),
    ...mapGetters('charts', [
      'getAccountWatchLabels',
      'getAccountLikesLabels',
      'getAccountImpressionsLabels',
      'getAccountAdRevenueLabels',
      'getWatchTimeValue',
      'getLikeCountValue',
      'getImpressionCountValue',
      'getAdRevenueValue',
    ]),
  },
  methods: {
    ...mapActions({
      getAmountChart: `charts/${CHARTS_AMOUNT_REQUEST}`,
    }),
    ...mapMutations('charts', [CHARTS_AMOUNT_CLEAN]),
  },
  watch: {
    async selectedVideos() {
      await this.$nextTick();
      if (this.selectedVideos.length === 0) {
        this[CHARTS_AMOUNT_CLEAN]();
      } else {
        this.getAmountChart();
      }
    },
  },
};
</script>
<style lang="scss">
$styles: home-charts-scene;
.#{$styles} {
  &__chart-wrapper {
    border-radius: 2px;
    flex: 1 1 25%;
    max-width: 25%;
    padding: 0 12px;
    position: relative;
    &:last-child {
      margin-right: 0;
    }
  }
  &__charts-row {
    margin: 0 -12px 0;
  }
}
</style>
