<template>
  <a
    class="m-subtle"
    :disabled="disabled"
    @click="() => !disabled && $emit('click')"
    :class="{
      [position]: $slots.icon && $slots.default,
    }"
  >
    <slot name="icon" />
    <span class="m-subtle__text" v-if="!!$slots.default || !!label"
      ><slot>{{ label }}</slot></span
    >
  </a>
</template>
<script>
export default {
  name: 'MSubtle',
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    position: {
      validator(value) {
        return ['left', 'right'].indexOf(value) !== -1;
      },
      default: 'left',
    },
    label: {
      type: String,
    },
  },
};
</script>
<style lang="scss">
$style: m-subtle;

.#{$style} {
  cursor: pointer;
  position: relative;
  @include flex(flex-start, center);
  display: inline-flex;
  @include transition(all);
  &[disabled] {
    cursor: not-allowed;
    pointer-events: none;
    .#{$style}__text {
      color: $G6;
    }
  }
  @include media {
    &:hover {
      .#{$style}__text {
        color: $I5;
      }
      svg {
        fill: $I5;
      }
    }
  }
  &:active {
    .#{$style}__text {
      color: $I8;
    }
    svg {
      fill: $I8;
      transform: scale(0.9);
    }
  }
  &.left {
    svg {
      order: -2;
      margin-right: 8px;
    }
  }
  &.right {
    svg {
      order: 2;
      margin-left: 8px;
    }
  }
  svg {
    @include svg(16px, $I6);
  }
  &__text {
    @include text($H12, 500, $I6);
    @include transition(all);
  }
}
</style>
