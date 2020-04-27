<template>
  <div class="m-input">
    <label class="m-input__label" :for="id" v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </label>
    <input
      :autocomplete="autocomplete"
      :id="id"
      :type="inputType"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      :disabled="disabled"
      :placeholder="placeholder"
      class="m-input__input"
      :class="status"
    />
    <button v-if="type === 'password'" @click="toggleVisibility" class="m-input__visibility-btn">
      <m-icon class="m-input__visibility-icon" :icon="visibility ? 'visibility-on' : 'visibility-off'" />
    </button>
  </div>
</template>
<script>
import { v4 } from 'uuid';

export default {
  name: 'MInput',
  props: {
    label: {
      type: String,
      default: '',
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
    value: {
      type: [String, Number],
      required: true,
    },
    placeholder: {
      type: String,
      default: '',
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
  &__input {
    @extend %input;
    @include media {
      &:hover + .#{$style}__visibility-btn {
        .#{$style}__visibility-icon {
          fill: lighten($G7, 10%);
        }
      }
    }
    &:focus + .#{$style}__visibility-btn {
      .#{$style}__visibility-icon {
        fill: $G6;
      }
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
    bottom: 4px;
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
}
</style>
