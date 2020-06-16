<template>
  <div class="line-chart">
    <span class="line-chart__value" :style="{ color: color }">{{value}}</span>
    <a-popover
      trigger="click"
      placement="bottomLeft"
      @visibleChange="handleChangeVisibility"
      v-model="visible"
    >
      <template slot="content">
        <div class="line-chart__dropdown">
          <m-subtle
            v-for="item in data"
            :active="isActive(item)"
            class="line-chart__dropdown-item"
            type="light-grey"
            :key="item"
            @click="() => onChange(item)"
          >{{item}}</m-subtle>
        </div>
      </template>
      <m-subtle
        :active="isClickedDropdown"
        class="line-chart__dropdown-button"
        type="light-grey"
        position="right"
      >
        <template #icon-right>
          <m-icon icon="drop-down" class="line-chart__dropdown-arrow" />
        </template>
        {{selected}}
      </m-subtle>
    </a-popover>
    <m-line-chart
      :chart-id="chartId"
      :chart-data="chartData"
      :height="140"
      class="line-chart__chart"
    />
  </div>
</template>
<script>
import MLineChart from '@/components/common/charts/MLineChart.vue';
import colors from '@/components/common/charts/colors';

export default {
  name: 'LineChart',
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
    data: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '12:54',
    },
    firstDataset: {
      type: Array,
      default: () => [],
    },
    secondDataset: {
      type: Array,
      default: () => [],
    },
    labels: {
      type: Array,
      default: () => [],
    },
    chartId: {
      type: String,
      required: true,
    },
    left: {
      type: String,
      default: '0',
    },
    padding: {
      type: String,
      default: '0',
    },
    width: {
      type: String,
      default: '100%',
    },
  },
  data() {
    return {
      hoverItem: 'search',
      impressions: true,
      isClickedDropdown: false,
      visible: false,
    };
  },
  computed: {
    chartData() {
      return {
        labels: this.labels,
        datasets: [
          {
            label: 'Total Catalog',
            data: this.firstDataset,
            backgroundColor: 'transparent',
            borderColor: this.color,
            borderWidth: 2,
            pointBackgroundColor: colors.$dark,
            pointBorderWidth: 2,
            pointRadius: 4.5,
            lineTension: 0,
          },
          {
            label: 'Selected Videos',
            data: this.secondDataset,
            backgroundColor: 'transparent',
            borderColor: '#8489A1',
            borderWidth: 1,
            pointBackgroundColor: colors.$dark,
            pointBorderWidth: 1,
            pointRadius: 3.5,
            lineTension: 0,
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
    isActive(item) {
      return String(item).toLowerCase() === String(this.selected).toLowerCase();
    },
    onChange(item) {
      this.$emit('change', item);
      this.visible = false;
    },
  },
};
</script>
<style lang="scss">
.line-chart {
  height: 170px;
  padding: 30px 8px 10px;
  position: relative;
  background-color: $dark;
  & &__dropdown-button {
    position: absolute;
    top: 16px;
    left: 16px;
    .m-subtle__text {
      font-size: $H10;
      text-transform: uppercase;
    }
    svg {
      top: 0;
    }
  }
  &__dropdown-item {
    display: block;
    margin-bottom: 6px;
    text-transform: capitalize;
    &:last-child {
      margin-bottom: 0;
    }
    .m-subtle__text {
      font-size: $H10;
    }
  }
  &__dropdown {
    padding: 0 12px;
    @include flex-col(flex-start, flex-start);
    & .m-subtle {
      align-self: start;
    }
  }
  &__value {
    @include text($H12, 500);
    position: absolute;
    top: 16px;
    right: 16px;
  }
  &__chart {
    position: relative;
  }
}
</style>
