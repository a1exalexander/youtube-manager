<template>
  <div>
    <div class="m-slider-tabs">
      <ul class="m-slider-tabs__list">
        <li
          v-for="(tab, index) in tabs"
          class="m-slider-tabs__item"
          :class="{ 'is-active': value === index }"
          :key="tab.id"
        >
          <a href="#" @click.prevent="selectTab(index)" class="m-slider-tabs__link">{{ tab }}</a>
        </li>
      </ul>
    </div>
    <div class="tabs-details">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'MSliderTabs',
  props: {
    value: [String, Number],
    tabs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  methods: {
    selectTab(idx) {
      this.$emit('input', idx);
    },
  },
};
</script>
<style lang="scss">
$styles: 'm-slider-tabs';
.#{$styles} {
  max-width: 100%;
  &__list {
    @include flex-row;
    list-style: none;
  }
  &__item {
    @include transition;
    padding: 0 3px 23px;
    border-bottom: 2px solid transparent;
    min-width: fit-content;
    margin-right: 24px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      .#{$styles}__link {
        color: $N0;
      }
    }
    &:active {
      .#{$styles}__link {
        color: $N0;
      }
    }
    &.is-active {
      border-bottom-color: $I6;
      .#{$styles}__link {
        color: $N0;
      }
    }
  }
  &__link {
    @include text($H12, 500, $G4);
    display: inline-block;
    text-align: center;
  }
}
</style>
