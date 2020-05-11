<template>
  <span class="m-avatar" :style="{ width: `${size}px`, height: `${size}px` }">
    <img class="m-avatar__image" :src="src" alt="" v-if="src" />
    <slot v-else>
      <m-icon class="m-avatar__icon" icon="profile" />
    </slot>
  </span>
</template>
<script>
export default {
  name: 'MAvatar',
  props: {
    src: {
      type: String,
      default: undefined,
    },
    size: {
      type: Number,
      default: 28,
    },
  },
};
</script>
<style lang="scss">
$style: m-avatar;
.#{$style} {
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
  @include flex(center, center);
  &__image {
    @include image;
  }
  &__icon {
    @include svg(100%, $N0);
  }
}
</style>
