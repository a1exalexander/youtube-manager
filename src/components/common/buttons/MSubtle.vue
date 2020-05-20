<template>
  <a
    class="m-subtle"
    :disabled="disabled"
    @click="() => !disabled && $emit('click')"
    @mouseover="() => !disabled && $emit('mouseover')"
    @mouseleave="() => !disabled && $emit('mouseleave')"
    @mouseenter="() => !disabled && $emit('mouseenter')"
    @mouseout="() => !disabled && $emit('mouseout')"
    @mousedown="() => !disabled && $emit('mousedown')"
    @mouseup="() => !disabled && $emit('mouseup')"
    :class="[
      {
        hover,
        disabled,
        active,
        rotate,
      },
      type,
    ]"
  >
    <slot name="icon" v-if="!!icon || !!$slots.icon">
      <m-icon :icon="icon"/>
    </slot>
    <span class="m-subtle__text" v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </span>
    <slot name="icon-right" />
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
    rotate: {
      type: Boolean,
      default: true,
    },
    label: {
      type: String,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    type: {
      validator(value) {
        return ['primary', 'grey', 'light-grey', 'white', 'danger'].indexOf(value) !== -1;
      },
      default: 'primary',
    },
    icon: String,
  },
};
</script>
<style lang="scss">
$style: m-subtle;
$names: 'primary', 'grey', 'light-grey', 'white', 'danger';
$color: (
  'primary': $I6,
  'grey': $G6,
  'light-grey': $G4,
  'white': $N0,
  'danger': $R5,
);
$hover: (
  'primary': $I5,
  'grey': $G5,
  'light-grey': $G3,
  'white': $N30,
  'danger': $R4,
);
$active: (
  'primary': $I8,
  'grey': $G7,
  'light-grey': $N0,
  'white': $N60,
  'danger': $R6,
);
$disabled: (
  'primary': $G6,
  'grey': $G6,
  'light-grey': $G6,
  'white': $G6,
  'danger': $G6,
);
.#{$style} {
  cursor: pointer;
  position: relative;
  @include flex(flex-start, center);
  display: inline-flex;
  @include transition(all);
  flex-wrap: wrap;
  @include media {
    &.hover,
    &:hover {
      svg {
        fill: $I5;
      }
    }
  }
  &.active,
  &:active {
    svg {
      transform: scale(0.9);
    }
  }
  svg {
    @extend %noselect;
    @include svg(16px, $I6);
    margin-right: 7px;
    position: relative;
    & ~ svg {
      margin-right: 0;
      margin-left: 3px !important;
      position: relative;
    }
  }
  &.rotate.ant-popover-open {
    .#{$style}__text + svg {
      transform: rotateX(180deg);
    }
  }
  &__text {
    @include text($H12, 500);
    @include transition(all);
    @include word-wrap;
    @extend %noselect;
    & + svg {
      margin-right: 0;
      margin-left: 7px;
      position: relative;
    }
  }
  @each $name in $names {
    &.#{$name} {
      .#{$style}__text {
        color: map-get($color, $name);
      }
      svg {
        fill: map-get($color, $name);
      }
    }
    @include media {
      &.#{$name}:hover,
      &.#{$name}.hover {
        .#{$style}__text {
          color: map-get($hover, $name);
        }
        svg {
          fill: map-get($hover, $name);
        }
      }
    }
    &.#{$name}:active,
    &.#{$name}.active {
      .#{$style}__text {
        color: map-get($active, $name);
      }
      svg {
        fill: map-get($active, $name);
      }
    }
    &.#{$name}[disabled='true'],
    &.#{$name}.disabled {
      cursor: not-allowed;
      pointer-events: none;
      .#{$style}__text {
        color: map-get($disabled, $name);
      }
      svg {
        fill: map-get($disabled, $name);
      }
    }
  }
}
</style>
