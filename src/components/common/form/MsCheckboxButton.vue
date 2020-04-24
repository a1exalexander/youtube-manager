<template>
  <label class="ms-checkbox-label">
    <input
      type="checkbox"
      class="ms-checkbox-label__input"
      :value="val"
      v-model="checked"
    />
    <div class="ms-checkbox-label__inner">
      <span v-if="!!$slots.default || !!label" class="ms-checkbox-label__text"
        ><slot>{{ label }}</slot></span
      >
    </div>
  </label>
</template>
<script>
export default {
  name: 'MsCheckboxLabel',
  props: {
    val: {
      type: String || Boolean,
    },
    value: {
      type: Boolean,
    },
    label: {
      type: String,
    },
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.onChange(val);
      },
    },
  },
  methods: {
    onChange(e) {
      this.$emit('input', e);
    },
  },
};
</script>
<style lang="scss">
$styles: ms-checkbox-label;
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
  }
}
</style>
