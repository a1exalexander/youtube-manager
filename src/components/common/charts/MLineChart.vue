<script>
import { Line } from 'vue-chartjs';
import colors from './colors';

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
