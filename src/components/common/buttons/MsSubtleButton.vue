<template>
  <a
    class="ms-subtle-button"
    @click="() => !disabled && $emit('click')"
    :class="{ disabled: disabled }"
  >
    <slot name="icon" v-if="!!$slots.icon && position === 'left'" />
    <span
      class="ms-subtle-button__text"
      :class="[!!$slots.icon && position]"
      v-if="!!$slots.default || !!label"
      ><slot>{{ label }}</slot></span
    >
    <slot name="icon" v-if="!!$slots.icon && position === 'right'" />
  </a>
</template>
<script>
export default {
  name: 'MsSubtleButton',
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
$style: ms-subtle-button;

.#{$style} {
  cursor: pointer;
  position: relative;
  display: inline-flex;
  @include transition(all);
  &.disabled {
    cursor: not-allowed;
    .#{$style}__text {
      color: $G6;
    }
  }
  &:hover {
    .#{$style}__text {
      color: $I5;
    }
    svg {
      fill: $I5;
    }
  }
  &:active {
    .#{$style}__text {
      color: $I8;
    }
    svg {
      fill: $I8;
    }
  }
  svg {
    @include svg(16px, $I6);
  }
  &__text {
    @include text($H12, 500, $I6);
    @include transition(all);
    &.left {
      margin-left: 8px;
    }
    &.right {
      margin-right: 8px;
    }
  }
}
</style>
