<template>
  <div
    class="m-input-wrapper"
    :class="[status, {'danger': error}]"
  >
    <span
      class="m-input-wrapper__label"
      v-if="!!$slots.label || !!label"
    >
      <slot name='label'>{{ label }}</slot>
    </span>
    <div class="m-input-wrapper__field">
      <slot />
      <p
        class='m-input-wrapper__message animated fast bounceIn'
        v-if='!!message'
      >{{ message }}</p>
    </div>
  </div>
</template>
<script>

export default {
  name: 'MInputWrapper',
  props: {
    label: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autocomplete: {
      type: String,
      default: 'on',
    },
    status: {
      validator(value) {
        return ['default', 'success', 'warning', 'danger'].indexOf(value) !== -1;
      },
      default: 'default',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
$style: m-input-wrapper;
.#{$style} {
  display: block;
  text-align: left;
  position: relative;
  &.danger {
    input:not(:focus) {
      border-color: $R6;
    }
    .#{$style}__message {
      color: $R6;
    }
  }
  &.warning {
    input:not(:focus) {
      border-color: $L6;
    }
    .#{$style}__message {
      color: $L6;
    }
  }
  &.success {
    input:not(:focus) {
      border-color: $T6;
    }
    .#{$style}__message {
      color: $T6;
    }
  }
  &__field {
    position: relative;
  }
  input:not([type=checkbox], [type=radio]) {
    @extend %input;
    @include media {
      &:hover + .#{$style}__visibility-btn {
        .#{$style}__visibility-icon {
          fill: lighten($G7, 10%);
        }
      }
    }
    &:focus ~ .#{$style}__visibility-btn {
      .#{$style}__visibility-icon {
        fill: $G6;
      }
    }
    &:focus ~ .#{$style}__message {
      display: none;
    }
  }
  &__label {
    text-align: left;
    @extend %label;
    @include flex(space-between, center);
  }
  &__visibility-btn {
    border: none;
    outline: none;
    background-color: transparent;
    position: absolute;
    right: 6px;
    top: 7px;
    align-self: center;
    @include media {
      &:hover {
        .#{$style}__visibility-icon {
          fill: $G6;
        }
      }
    }
    &:active {
      .#{$style}__visibility-icon {
        fill: $G7;
      }
    }
  }
  &__visibility-icon {
    @include svg(18px, $G7);
  }
  &__message {
    @include text($H10, 400);
    display: inline-block;
    margin-top: 6px;
  }
}
</style>
