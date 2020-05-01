<template>
  <div class="m-badge" :class="{'with-icon': withIcon}">
    <span class="m-badge__text">
      <slot />
    </span>
    <m-icon icon="ad" v-if="withIcon" />
  </div>
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
$styles: m-badge;
.#{$styles} {
  padding: 4px 12px;
  border-radius: 10px;
  background-color: $T8;
  @include flex-row(center, center);
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
