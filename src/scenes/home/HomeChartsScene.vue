<template>
  <m-container class="home-charts-scene">
    <m-row class="home-charts-scene__charts-row">
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          type="teal"
          chartId="likes-chart"
          :data="['views', 'watch time per video', 'watch time ratio']"
          :selected="selectedFirst"
          :value="$separator(getLikeCountValue)"
          :firstDataset="accountChart.likeCount"
          :secondDataset="amountChart.likeCount"
          :labels="getAccountLikesLabels"
          @change="e => selectedFirst = e"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          chartId="watch-chart"
          :data="['likes', 'dislikes', 'comments', 'total engagement', 'engagement ratio']"
          :selected="selectedSecond"
          :firstDataset="accountChart.watchTime"
          :secondDataset="amountChart.watchTime"
          :labels="getAccountWatchLabels"
          @change="e => selectedSecond = e"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          chartId="impressions-chart"
          type="violet"
          :data="['impressions', 'click through rate']"
          :selected="selectedThird"
          :value="$separator(getWatchTimeValue * 1000)"
          :firstDataset="accountChart.watchTime"
          :secondDataset="amountChart.watchTime"
          :labels="getAccountImpressionsLabels"
          @change="e => selectedThird = e"
        />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart
          chartId="ad-chart"
          type="lime"
          :data="['ad revenue', 'production cost', 'ROI']"
          :selected="selectedFourth"
          :value="$currency(getAdRevenueValue)"
          :firstDataset="accountChart.adRevenue"
          :secondDataset="amountChart.adRevenue"
          :labels="getAccountAdRevenueLabels"
          @change="e => selectedFourth = e"
        />
      </div>
    </m-row>
  </m-container>
</template>
<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import { CHARTS_AMOUNT_REQUEST, CHARTS_AMOUNT_CLEAN, CHARTS_ACCOUNT_REQUEST } from '@/store';
import LineChart from '../charts/LineChart.vue';

export default {
  name: 'HomeChartsScene',
  components: {
    LineChart,
  },
  data() {
    return {
      selectedFirst: 'views',
      selectedSecond: 'likes',
      selectedThird: 'impressions',
      selectedFourth: 'ad revenue',
    };
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
      getCharts: `charts/${CHARTS_ACCOUNT_REQUEST}`,
    }),
    ...mapMutations('charts', [CHARTS_AMOUNT_CLEAN]),
    async fetchCharts() {
      await this.$nextTick();
      if (this.selectedVideos.length === 0) {
        this[CHARTS_AMOUNT_CLEAN]();
      } else {
        this.getAmountChart();
      }
    },
  },
  watch: {
    selectedFirst() {
      this.fetchCharts();
      this.getCharts();
    },
    selectedSecond() {
      this.fetchCharts();
      this.getCharts();
    },
    selectedThird() {
      this.fetchCharts();
      this.getCharts();
    },
    selectedFourth() {
      this.fetchCharts();
      this.getCharts();
    },
    selectedVideos() {
      this.fetchCharts();
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
