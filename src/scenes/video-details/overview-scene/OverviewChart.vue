<template>
  <div class="overview-chart">
    <span class="overview-chart__value" :style="{ color: color }">12:54</span>
    <a-popover trigger="click" placement="bottomLeft" @visibleChange="handleChangeVisibility">
      <template slot="content">
        <div class="overview-chart__dropdown">
          <m-subtle :active="impressions" class="overview-chart__dropdown-item" grey>Impressions</m-subtle>
          <m-subtle class="overview-chart__dropdown-item" grey>
            Click Through Rate
          </m-subtle>
        </div>
      </template>
      <m-subtle :active="isClickedDropdown" class="overview-chart__dropdown-button" grey position="right"
        ><template #icon><m-icon icon="dropDown"/></template>Click me</m-subtle
      >
    </a-popover>
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
  data() {
    return {
      hoverItem: 'search',
      impressions: true,
      isClickedDropdown: false,
    };
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
  methods: {
    handleChangeVisibility() {
      this.isClickedDropdown = !this.isClickedDropdown;
    },
  },
};
</script>
<style lang="scss">
.overview-chart {
  height: 170px;
  padding: 30px 2px 10px 2px;
  position: relative;
  &__dropdown-button {
    position: absolute;
    top: 16px;
    left: 16px;
    .m-subtle__text {
      font-size: $H10;
      text-transform: uppercase;
    }
    @include media {
      &.active.grey {
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
  &__dropdown-item {
    display: block;
    margin-bottom: 6px;
    &:last-child {
      margin-bottom: 0;
    }
    .m-subtle__text {
      font-size: $H10;
    }
  }
  &__dropdown {
    padding: 0 12px;
  }
  &__value {
    @include text($H12, 500);
    position: absolute;
    top: 16px;
    right: 16px;
  }
}
</style>
