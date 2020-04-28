<template>
  <div
    class="m-input"
    :class="[status, {'danger': error}]"
  >
    <label
      class="m-input__label"
      :for="id"
      v-if="!!$slots.default || !!label"
    >
      <slot>{{ label }}</slot>
    </label>
    <div class="m-input__field">
      <input
        :autocomplete="autocomplete"
        :id="id"
        :type="inputType"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="(e) => $emit('input', e.target.value)"
        @blur="(e) => $emit('blur', e)"
        @focus="(e) => $emit('focus', e)"
        class="m-input__input"
      />
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
      <p
        class='m-input__message animated fast bounceIn'
        v-if='!!message'
      >{{ message }}</p>
    </div>
  </div>
</template>
<script>
import { v4 } from 'uuid';

export default {
  name: 'MInput',
  props: {
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
    inputType() {
      if (this.type === 'password' && this.visibility) return 'text';
      return this.type;
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
