<template>
  <div class="m-input">
    <label class="m-input__label" :for="id" v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </label>
    <input
      :autocomplete="autocomplete"
      :id="id"
      :type="type"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      :disabled="disabled"
      :placeholder="placeholder"
      class="m-input__input"
      :class="status"
    />
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
        return (
          ['default', 'success', 'warning', 'danger'].indexOf(value) !== -1
        );
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
  computed: {
    id() {
      return v4();
    },
  },
};
</script>
<style lang="scss">
$style: m-input;
.#{$style} {
  display: block;
  text-align: left;
  &__input {
    @extend %input;
  }
  &__label {
    text-align: left;
    @extend %label;
  }
}
</style>
