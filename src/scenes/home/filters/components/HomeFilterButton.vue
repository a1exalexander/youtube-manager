<template>
  <m-row ai="center" class="home-filter-button">
    <a-popover trigger="click" :placement="placement">
      <template #content>
        <slot />
      </template>
      <button class="home-filter-button__button">
        <span class="home-filter-button__name">{{name}}: {{value}}</span>
        <m-icon class="home-filter-button__icon" icon="drop-down" />
      </button>
    </a-popover>
    <button class="home-filter-button__close-btn" @click="() => $emit('remove')">
      <m-icon class="home-filter-button__close-icon" icon="close" />
    </button>
  </m-row>
</template>
<script>
export default {
  name: 'HomeFilterButton',
  props: {
    name: String,
    value: [String, Number, Boolean],
    placement: {
      type: String,
      default: 'bottomLeft',
    },
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
<style lang="scss">
$style: home-filter-button;
.#{$style} {
  position: relative;
  margin-right: 10px;
  .ant-popover-open {
    .#{$style}__icon {
      @extend %rotate;
    }
  }
  &__button {
    @include flex(flex-start, center);
    padding: 4px 2px 5px 8px;
    background-color: $D1;
    border-radius: 4px;
    border: none;
    outline: none;
    @include transition(all);
    margin-right: 4px;
    @include media {
      &:hover {
        background-color: lighten($D1, 5%);
      }
    }
    &:active {
      background-color: darken($D1, 5%);
    }
  }
  &__name {
    @include text($H10, 500);
    margin-right: 4px;
    @include noselect;
    text-transform: capitalize;
  }
  &__icon {
    @include svg(14px, $N0);
    @include noselect;
    position: relative;
    bottom: -1px;
  }
  &__close-btn {
    background-color: transparent;
    border: none;
    outline: none;
    @include media {
      &:hover {
        .#{$style}__close-icon {
          fill: $N40;
        }
      }
    }
    &:active {
      .#{$style}__close-icon {
        fill: $N60;
      }
    }
  }
  &__close-icon {
    @include svg(14px, $N0);
    position: relative;
    bottom: -1px;
  }
}
</style>
