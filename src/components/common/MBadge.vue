<template>
  <button class="m-badge" :class="{'with-icon': withIcon}" @click="$emit('click')">
    <span class="m-badge__text">
      <slot />
    </span>
    <m-icon icon="ad" v-if="withIcon" />
  </button>
</template>
<script>
export default {
  name: 'MBadge',
  props: {
    withIcon: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
$style: m-badge;
.#{$style} {
  border: none;
  outline: none;
  padding: 4px 12px;
  border-radius: 10px;
  background-color: $T8;
  @include flex-row(center, center);
  cursor: pointer;
  @include transition(all);
  @include media {
    &:hover {
      background-color: lighten($T8, 5%);
    }
    &.with-icon:hover {
      background-color: lighten($T5, 5%);
    }
  }
  &:active {
    background-color: darken($T8, 5%);
  }
  &.with-icon:active {
    background-color: darken($T5, 5%);
  }
  &.with-icon {
    background-color: $T5;
  }
  &__text {
    @include text($H10, 500);
  }
  svg {
    fill: $N0;
    margin-left: 6px;
  }
}
</style>
