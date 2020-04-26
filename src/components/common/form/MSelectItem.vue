<template>
  <button
    class="m-select-item"
    :class="{ active }"
    @click="() => $emit('click')"
  >
    <m-icon :icon="icon" class="m-select-item__icon" v-if="!!icon" />
    <span v-if="!!$slots.default || !!label" class="m-select-item__text">
      <slot>
        {{ label }}
      </slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'MSelectItem',
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
$style: m-select-item;
.#{$style} {
  position: relative;
  padding: 4px 14px;
  border: none;
  outline: none;
  box-shadow: none;
  background-color: transparent;
  @include flex(center, center);
  &:before {
    position: absolute;
    background-color: $I6;
    opacity: 0;
    visibility: hidden;
    content: '';
    border-radius: 2px;
    width: 2px;
    display: block;
    top: 0;
    bottom: 0;
    left: 0;
    @include transition(all);
  }
  @include media {
    &:hover {
      .#{$style}__text {
        color: $G2;
      }
      .#{$style}__icon {
        fill: $G2;
      }
    }
  }
  &:active {
    .#{$style}__text {
      color: $G5;
    }
    .#{$style}__icon {
      fill: $G5;
    }
  }
  &.active {
    &::before {
      opacity: 1;
      visibility: visible;
    }
    .#{$style}__icon {
      fill: $N0;
    }
    .#{$style}__text {
      color: $N0;
    }
  }
  &__icon {
    @include svg(16px, $G4);
    margin-right: 10px;
  }
  &__text {
    @include text($H12, 500, $G4);
    @include transition(all);
  }
}
</style>
