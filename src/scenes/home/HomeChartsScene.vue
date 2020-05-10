<template>
  <m-container class="home-charts-scene">
    <m-row class="home-charts-scene__charts-row">
      <div class="home-charts-scene__chart-wrapper">
        <line-chart />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart type="teal" />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart type="violet" />
      </div>
      <div class="home-charts-scene__chart-wrapper">
        <line-chart type="lime" />
      </div>
    </m-row>
  </m-container>
</template>
<script>
import LineChart from '../charts/LineChart.vue';

export default {
  name: 'HomeChartsScene',
  components: {
    LineChart,
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
    margin-bottom: 24px;
  }
}
</style>
