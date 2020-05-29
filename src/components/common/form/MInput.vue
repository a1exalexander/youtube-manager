<template>
  <div class="m-input" :class="[status, {'danger': error}, `_${size}-size`]">
    <label class="m-input__label" :class="labelClass" :for="id" v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </label>
    <div class="m-input__field">
      <input
        :autocomplete="autocomplete"
        :id="id"
        :readonly="readonly"
        :type="inputType"
        :disabled="disabled"
        :placeholder="placeholder"
        v-model="vModel"
        @blur="(e) => $emit('blur', e)"
        @focus="(e) => $emit('focus', e)"
        class="m-input__input"
        :class="{'_icon-left': !!iconLeft || !!$slots.iconLeft, _fill: !!vModel, '_icon-right': !!iconRight || !!$slots.iconRight}"
        :maxlength="maxlength"
        :minlength="minlength"
      />
      <div class="m-input__icon _left" v-if="!!iconLeft || !!$slots.iconLeft">
        <slot name="iconLeft">
          <m-icon :icon="iconLeft" />
        </slot>
      </div>
      <div class="m-input__icon _right" v-if="!!iconRight || !!$slots.iconRight">
        <slot name="iconRight">
          <m-icon :icon="iconRight" />
        </slot>
      </div>
      <button
        v-if="type === 'password'"
        @click.prevent="toggleVisibility"
        class="m-input__visibility-btn"
      >
        <m-icon
          class="m-input__visibility-icon"
          :icon="visibility ? 'visibility-on' : 'visibility-off'"
        />
      </button>
      <p class="m-input__message animated fast bounceIn" v-if="!!message">{{ message }}</p>
    </div>
  </div>
</template>
<script>
import { v4 } from 'uuid';

export default {
  name: 'MInput',
  props: {
    maxlength: {
      type: [Number, String],
    },
    minlength: {
      type: [Number, String],
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    message: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'text',
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
    value: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: null,
    },
    labelClass: String,
    size: {
      validator(value) {
        return ['default', 'small'].indexOf(value) !== -1;
      },
      default: 'default',
    },
    iconLeft: {
      type: String,
      default: null,
    },
    iconRight: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      visibility: false,
    };
  },
  methods: {
    toggleVisibility() {
      this.visibility = !this.visibility;
    },
  },
  computed: {
    id() {
      return v4();
    },
    vModel: {
      get() {
        return this.value;
      },
      set(value) {
        if ((this.type === 'number' && this.$isNumber(value)) || this.type !== 'number') {
          this.$emit('input', String(value).includes('.') ? value : value && parseFloat(value));
        }
        this.$forceUpdate();
      },
    },
    inputType() {
      switch (true) {
        case (this.type === 'password' && this.visibility) || this.type === 'number':
          return 'text';
        default:
          return this.type;
      }
    },
  },
};
</script>
<style lang="scss">
$style: m-input;
.#{$style} {
  display: block;
  text-align: left;
  position: relative;
  &.danger {
    .#{$style}__input:not(:focus) {
      border-color: $R6;
    }
    .#{$style}__message {
      color: $R6;
    }
  }
  &.warning {
    .#{$style}__input:not(:focus) {
      border-color: $L6;
    }
    .#{$style}__message {
      color: $L6;
    }
  }
  &.success {
    .#{$style}__input:not(:focus) {
      border-color: $T6;
    }
    .#{$style}__message {
      color: $T6;
    }
  }
  &._small-size {
    .#{$style}__input {
      min-height: 25px;
      @include text($H10, 400, $G2);
      &::placeholder {
        font-size: $H10;
      }
    }
    .#{$style}__label {
      @include text($H9, 500, $G4);
      margin-bottom: 7px;
    }
    .#{$style}__icon {
      top: 5px;
    }
  }
  &__field {
    position: relative;
  }
  &__input {
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
    &._fill ~ .#{$style}__icon {
      svg {
        fill: $N0;
      }
    }
    &._icon-left {
      padding-left: 30px;
    }
    &._icon-right {
      padding-right: 30px;
    }
  }
  &__icon {
    position: absolute;
    top: 8px;
    svg {
      @include svg(15px, $G6);
    }
    &._right {
      right: 8px;
    }
    &._left {
      left: 8px;
    }
  }
  &__label {
    text-align: left;
    @extend %label;
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
