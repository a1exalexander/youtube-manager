<template>
  <label class="ms-checkbox">
    <input
      type="checkbox"
      class="ms-checkbox__input"
      :value="val"
      v-model="checked"
    />
    <div class="ms-checkbox__inner">
      <div class="ms-checkbox__cell">
        <icon class="ms-checkbox__image" icon="check" />
      </div>
      <slot>
        <span v-if="!!label" class="ms-checkbox__text">{{ label }}</span>
      </slot>
    </div>
  </label>
</template>
<script>
export default {
  name: 'MsCheckbox',
  props: ['val', 'value', 'label'],
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
$styles: ms-checkbox;
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
