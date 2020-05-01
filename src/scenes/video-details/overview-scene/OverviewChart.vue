<template>
  <div class="overview-chart">
    <m-line-chart :chartdata="chartData" :width="100" :height="140" />
  </div>
</template>
<script>
import MLineChart from '@/components/common/charts/MLineChart.vue';
import colors from '@/components/common/charts/colors';

export default {
  name: 'OverviewChart',
  components: {
    MLineChart,
  },
  props: {
    type: {
      validator(value) {
        return ['blue', 'teal', 'violet', 'lime'].indexOf(value) !== -1;
      },
      default: 'blue',
    },
  },
  computed: {
    chartData() {
      return {
        labels: ['NOV 12', 'JAN25', 'MAR 17', 'NOV 12', 'JAN25', 'MAR 17'],
        datasets: [
          {
            label: 'First data',
            data: [1, 6, 3, 8, 1, 7],
            backgroundColor: 'transparent',
            borderColor: this.color,
            borderWidth: 2,
            pointBackgroundColor: colors.$dark,
            pointBorderWidth: 2,
            pointRadius: 4.5,
          },
        ],
      };
    },
    color() {
      switch (true) {
      case this.type === 'teal':
        return colors.$T6;
      case this.type === 'violet':
        return colors.$DP5;
      case this.type === 'lime':
        return colors.$L8;
      default:
        return colors.$B5;
      }
    },
  },
  mounted() {
    console.log(this.$data._chart);
  },
};
</script>
<style lang="scss">
.overview-chart {
  height: 170px;
  padding: 25px 10px 10px;
}
</style>
