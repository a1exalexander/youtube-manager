<template>
  <div class="ms-input">
    <label class="ms-input__label" :for="id" v-if="!!$slots.default || !!label">
      <slot>{{ label }}</slot>
    </label>
    <input
      :id="id"
      :type="type"
      :value="value"
      @input="(e) => $emit('input', e.target.value)"
      :disabled="disabled"
      :placeholder="placeholder"
      class="ms-input__input"
      :class="`_${status}`"
    />
  </div>
</template>
<script>
import { v4 } from 'uuid';

export default {
  name: 'MsInput',
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
      default: 'text',
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
$style: ms-input;
.#{$style} {
  display: block;
  &__input {
    @extend %input;
  }
  &__label {
    @extend %label;
  }
}
</style>
