<template>
  <label class="m-checkbox-button" @click="e => toggle && value && e.preventDefault()">
    <input
      type="checkbox"
      class="m-checkbox-button__input"
      :name="name"
      :value="val"
      v-model="checked"
    />
    <span class="m-checkbox-button__inner">
      <span v-if="!!$slots.default || !!label" class="m-checkbox-button__text">
        <slot>{{ label }}</slot>
      </span>
    </span>
  </label>
</template>
<script>
export default {
  name: 'MCheckboxButton',
  props: {
    val: {
      type: [String, Boolean, Number],
    },
    value: {
      type: [Boolean, Array, String, Object, Number],
    },
    label: {
      type: String,
    },
    name: {
      type: String,
    },
    toggle: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(e) {
        this.$emit('input', e);
      },
    },
  },
};
</script>
<style lang="scss">
$styles: m-checkbox-button;
.#{$styles} {
  position: relative;
  @include flex-row(flex-start, center);
  z-index: 1;
  max-width: fit-content;
  &__input {
    position: absolute;
    left: 2px;
    top: 6px;
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    &:checked + .#{$styles}__inner {
      border-color: $I5;
      .#{$styles}__text {
        color: $N0;
      }
    }
  }
  &__inner {
    @include flex-row(flex-start, center);
    box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.28);
    border: 1px solid transparent;
    border-radius: 2px;
    padding: 10px 16px;
    background-color: $D4;
    cursor: pointer;
    @include transition(all);
  }
  &__text {
    line-height: 1;
    @include text($H12, 400, $G2);
    @include transition(color);
    cursor: pointer;
    @extend %noselect;
  }
}
</style>
