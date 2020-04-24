<template>
  <label class="m-checkbox">
    <input
      type="checkbox"
      :name="name"
      class="m-checkbox__input"
      :value="val"
      v-model="checked"
    />
    <div class="m-checkbox__inner">
      <div class="m-checkbox__cell">
        <icon class="m-checkbox__image" icon="check" />
      </div>
      <span v-if="!!$slots.default || !!label" class="m-checkbox__text"
        ><slot>{{ label }}</slot></span
      >
    </div>
  </label>
</template>
<script>
export default {
  name: 'MCheckbox',
  props: {
    val: {
      type: [String, Boolean, Number],
    },
    name: {
      type: String,
    },
    value: {
      type: [Boolean, Array],
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
$styles: m-checkbox;
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
      .#{$styles}__cell {
        border-color: $I6;
        background-color: $I6;
      }
      .#{$styles}__image {
        opacity: 1;
      }
      .#{$styles}__text {
        color: $G2;
      }
    }
  }
  &__inner {
    @include flex-row(flex-start, center);
  }
  &__cell {
    @include size(18px);
    @include flex-row(center, center);
    background-color: $D3;
    border-radius: 3px;
    @include transition(background-color, border-color);
    margin-right: 8px;
    cursor: pointer;
    border: 1px solid $G7;
  }
  &__image {
    opacity: 0;
    @include svg(14px, $N0);
  }
  &__text {
    line-height: 1;
    @include text($H12, 400, $G4);
    @include transition(color);
    cursor: pointer;
  }
}
</style>
