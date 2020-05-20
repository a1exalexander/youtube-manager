<script>
import { Line } from 'vue-chartjs';
import colors from './colors';
import { tooltips } from './config';

export default {
  extends: Line,
  name: 'MLineChart',
  props: {
    chartdata: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      options: {
        tooltips,
        aspectRatio: 4,
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                zeroLineColor: colors.$G8,
                color: 'transparent',
                drawTicks: false,
              },
              ticks: {
                fontColor: colors.$G6,
                maxTicksLimit: 8,
                fontFamily: `'Roboto', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif`,
                fontSize: 8,
                padding: 10,
              },
            },
          ],
          yAxes: [
            {
              gridLines: {
                zeroLineColor: colors.$G8,
                color: 'transparent',
                drawTicks: false,
              },
              ticks: {
                min: 0,
                fontColor: 'transparent',
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  },
};
</script>
<style lang="scss">
.m-tooltip {
  background-color: #121421;
  border: 1px solid #25293b;
  border-radius: 4px;
  padding: 10px 10px 0;
  &__td {
    @include flex-row(space-between, center);
    white-space: nowrap;
    padding-bottom: 10px;
  }
  &__span {
    margin-right: 8px;
    @include size(6px, true);
  }
  &__title {
    @include text($H10, 400, $G4);
    margin-right: 16px;
    overflow-x: hidden;
    max-width: 60px;
    text-overflow: ellipsis;
  }
  &__text {
    @include text($H10, 500, $N0);
  }
  &__wrapper {
    white-space: nowrap;
    @include flex-row(flex-start, center);
  }
}
</style>
