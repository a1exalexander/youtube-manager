<template>
  <label class="m-checkbox">
    <input type="checkbox" :name="name" class="m-checkbox__input" :value="val" v-model="checked" />
    <div class="m-checkbox__inner">
      <div class="m-checkbox__cell">
        <m-icon class="m-checkbox__image animated slow bounceIn" icon="check" />
      </div>
      <span v-if="!!$slots.default || !!label" class="m-checkbox__text">
        <slot>{{ label }}</slot>
      </span>
    </div>
  </label>
</template>
<script>
export default {
  name: 'MCheckbox',
  props: {
    val: {
      type: [String, Boolean, Number, Object, Array],
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
    light: {
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
        this.onChange(e);
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
  @include media {
    &:hover {
      .#{$styles}__cell {
        border-color: $G6;
      }
    }
  }
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
        display: block;
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
    @include size(16px);
    @include flex-row(center, center);
    background-color: $D3;
    border-radius: 3px;
    @include transition(background-color, border-color);
    cursor: pointer;
    border: 1px solid $G7;
  }
  &__image {
    @include svg(14px, $N0);
    display: none;
  }
  &__text {
    line-height: 1;
    @include text($H12, 500, $G4);
    @include transition(color);
    cursor: pointer;
    margin-left: 8px;
    @extend %noselect;
  }
}
</style>
