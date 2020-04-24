<template>
  <button
    class="ms-button"
    :class="[type, { _fluid: fluid }, { _loading: loading }]"
    @click="() => $emit('click')"
  >
    <span class="ms-button__google" v-if="google">
      <img
        src="@/assets/svg/Google.svg"
        alt="Google"
        class="ms-button__google-icon"
      />
    </span>
    <slot name="icon" />
    <span class="ms-button__text"><slot /></span>
    <svg class="ms-button__loading" focusable="false" viewBox="0 0 20 20">
      <circle cx="10" cy="10" r="9" />
    </svg>
  </button>
</template>
<script>
export default {
  name: 'MsButton',
  props: {
    type: {
      validator(value) {
        return ['primary', 'secondary', 'subtle'].indexOf(value) !== -1;
      },
      default: 'primary',
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    google: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
@-webkit-keyframes ButtonSpinner {
  to {
    transform: rotate(360deg);
  }
}
@keyframes ButtonSpinner {
  to {
    transform: rotate(360deg);
  }
}

$style: ms-button;

$names: 'primary', 'secondary', 'subtle';

$bg: (
  'primary': $I6,
  'secondary': $D1,
  'subtle': transparent,
);
$bg-hover: (
  'primary': $I5,
  'secondary': $G7,
  'subtle': transparent,
);
$bg-active: (
  'primary': $I8,
  'secondary': $D2,
  'subtle': transparent,
);
$bg-disabled: (
  'primary': $G7,
  'secondary': $D2,
  'subtle': transparent,
);
$color: (
  'primary': $N0,
  'secondary': $N0,
  'subtle': $I6,
);
$color-hover: (
  'primary': $N0,
  'secondary': $N0,
  'subtle': $I5,
);
$color-active: (
  'primary': $N0,
  'secondary': $N0,
  'subtle': $I8,
);
$color-disabled: (
  'primary': $G6,
  'secondary': $D1,
  'subtle': $G6,
);
$devider: (
  'primary': $I8,
  'secondary': $G7,
);
$loading: (
  'primary': $N0,
  'secondary': $N0,
  'subtle': $I6,
);

.#{$style} {
  cursor: pointer;
  border-radius: 2px;
  padding: 0px 16px 0 8px;
  min-height: 32px;
  position: relative;
  @include flex(center, center);
  height: fit-content;
  @include transition(all);
  &__text {
    margin-left: 8px;
    @include text($H12, 500, $N0);
    @include transition(all);
  }
  svg:not(.#{$style}__loading) {
    @include svg(16px, $N0);
  }
  &__google {
    padding-right: 8px;
    align-self: stretch;
    min-height: 32px;
    @include flex(center, center);
    border-right-width: 1px;
    border-right-style: solid;
    margin-right: 8px;
  }
  &__google-icon {
    width: 20px;
    height: 20px;
    object-fit: contain;
  }
  &__loading {
    display: none;
    position: absolute;
    @include svg(20px);
    fill: none;
    stroke-dasharray: 42px;
    stroke-dashoffset: 44px;
    stroke-width: 2px;
    z-index: 1;
    stroke-linecap: round;
    animation: 0.86s cubic-bezier(0.4, 0.15, 0.6, 0.85) infinite ButtonSpinner;
  }
  &._loading {
    color: transparent;
    cursor: not-allowed;
    pointer-events: none;
    > *:not(.#{$style}__loading) {
      visibility: hidden;
      opacity: 0;
      pointer-events: none;
    }
  }
  &._fluid {
    width: 100%;
  }
  @each $name in $names {
    &.#{$name} {
      background-color: map-get($bg, $name);
      .#{$style}__text {
        color: map-get($color, $name);
      }
      svg:not(.#{$style}__loading) {
        color: map-get($color, $name);
        fill: map-get($color, $name);
      }
      .#{$style}__loading {
        stroke: map-get($loading, $name);
      }
      .#{$style}__google {
        border-right-color: map-get($devider, $name);
      }
    }
    @include media($screen-desktop) {
      &.#{$name}:hover {
        background-color: map-get($bg-hover, $name);
        .#{$style}__text {
          color: map-get($color-hover, $name);
        }
        svg:not(.#{$style}__loading) {
          color: map-get($color-hover, $name);
          fill: map-get($color-hover, $name);
        }
      }
    }
    &.#{$name}:active {
      background-color: map-get($bg-active, $name);
      .#{$style}__text {
        color: map-get($color-active, $name);
      }
      svg:not(.#{$style}__loading) {
        color: map-get($color-active, $name);
        fill: map-get($color-active, $name);
        transform: scale(0.9);
      }
      .#{$style}__google-icon {
        transform: scale(0.9);
      }
    }
    &.#{$name}:disabled {
      background-color: map-get($bg-disabled, $name);
      cursor: not-allowed;
      .#{$style}__text {
        color: map-get($color-disabled, $name);
      }
      svg:not(.#{$style}__loading) {
        color: map-get($color-disabled, $name);
        fill: map-get($color-disabled, $name);
      }
    }
    &.#{$name}._loading {
      .#{$style}__loading {
        visibility: visible;
        opacity: 1;
        display: block;
      }
    }
  }
}
</style>
