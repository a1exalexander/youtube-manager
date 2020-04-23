<template>
  <div class="container">
    <div class="container__content" :class="contentClass" :style="{ maxWidth }">
      <slot />
    </div>
  </div>
</template>
<script>
export default {
  name: 'Container',
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
  },
  computed: {
    maxWidth() {
      return this.fluid ? '100%' : this.width;
    },
  },
};
</script>
<style lang="scss">
.container {
  width: 100%;
  padding: 0 40px;
  &__content {
    margin: 0 auto;
  }
}
</style>
