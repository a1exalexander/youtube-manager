<template>
  <div class="m-container" :class="{ center }">
    <div
      class="m-container__content"
      :class="[contentClass]"
      :style="{ maxWidth }"
    >
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'MContainer',
  props: {
    width: {
      type: String,
      default: '1600px',
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    contentClass: {
      type: String,
      default: null,
    },
    center: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    maxWidth() {
      return this.fluid ? '100%' : this.width;
    },
  },
};
</script>
<style lang="scss">
$style: m-container;
.#{$style} {
  width: 100%;
  padding: 0 40px;
  &.center {
    min-height: 100vh;
    @include flex(center, center);
    text-align: center;
    .#{$style}__content {
      text-align: center;
    }
  }
  &__content {
    margin: 0 auto;
  }
}
</style>
