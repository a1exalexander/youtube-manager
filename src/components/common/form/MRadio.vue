<template>
  <label class="m-radio">
    <input type="radio" class="m-radio__input" :name="name" :value="val" v-model="checked" />
    <div class="m-radio__inner">
      <div class="m-radio__cell">
        <div class="m-radio__image animated fast bounceIn"></div>
      </div>
      <span v-if="!!$slots.default || !!label" class="m-radio__text"
        ><slot>{{ label }}</slot></span
      >
    </div>
  </label>
</template>
<script>
export default {
  name: 'MRadio',
  props: {
    val: {
      type: [String, Number, Boolean],
    },
    name: {
      type: String,
    },
    value: {
      type: [String, Number, Boolean],
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
      set() {
        this.$emit('input', this.val);
      },
    },
  },
};
</script>
<style lang="scss">
$styles: m-radio;
.#{$styles} {
  position: relative;
  @include flex-row(flex-start, center);
  z-index: 1;
  &__input {
    position: absolute;
    left: 2px;
    top: 2px;
    opacity: 0;
    z-index: -1;
    visibility: hidden;
    &:checked + .#{$styles}__inner {
      .#{$styles}__cell {
        background-color: $I8;
        border-color: $I8;
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
    @include size(18px, true);
    @include flex-row(center, center);
    background-color: $D3;
    border: 1px solid $G7;
    @include transition(background-color, border-color);
    cursor: pointer;
    &--margin {
      margin-right: 8px;
    }
  }
  &__image {
    @include size(10px, true);
    background-color: $G2;
    transition: all ease 0.2s;
    position: relative;
    display: none;
  }
  &__text {
    margin-left: 8px;
    @include text($H12, 500, $G2);
    line-height: 1;
    @include transition(color);
    cursor: pointer;
    pointer-events: none;
  }
}
</style>
