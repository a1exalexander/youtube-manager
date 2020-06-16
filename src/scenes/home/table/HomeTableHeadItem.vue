<template>
  <button class="table-head-button" @click="() => $emit('click', type)">
    <span class="table-head-button__text">
      <slot />
    </span>
    <m-icon
      class="table-head-button__icon"
      icon="arrow-up"
      :class="{_active: active}"
    />
  </button>
</template>

<script>
export default {
  name: 'HomeTableHeadItem',
  props: {
    value: String,
    type: String,
    direction: {
      type: String,
      default: 'asc',
    },
  },
  computed: {
    active() {
      return this.direction === 'asc' && this.value === this.type;
    },
  },
};
</script>
<style lang="scss">
$style: table-head-button;
.#{$style} {
  @include flex(center, center);
  border: none;
  outline: none;
  background-color: transparent;
  position: relative;
  overflow: visible;
  @include media {
    &:hover {
      .#{$style}__text {
        color: $G2;
      }
      .#{$style}__icon {
        fill: $I4;
      }
    }
  }
  &:active {
    .#{$style}__text {
      color: $G6;
    }
    .#{$style}__icon {
      fill: $I8;
    }
  }
  &__text {
    @include text($H10, 500, $G4);
    @include transition(all);
    text-transform: uppercase;
    transform: translateX(2px);
  }
  &__icon {
    @include svg(17px, $I6);
    &._active {
      transform: rotateX(180deg);
    }
  }
}
</style>
