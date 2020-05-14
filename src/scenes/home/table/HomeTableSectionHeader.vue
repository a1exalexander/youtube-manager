<template>
  <m-accordion>
    <m-container class="home-table-section-header" v-if="visible">
      <p class="home-table-section-header__name">
        <slot />
      </p>
    </m-container>
  </m-accordion>
</template>
<script>
export default {
  name: 'HomeTableSectionHeader',
  props: {
    visible: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
<style lang="scss">
$style: home-table-section-header;
.#{$style} {
  border-bottom: 1px solid $G8;
  background-color: $D10;
  padding: 20px 0 14px;
  &__name {
    @include text($H12, 500, $G2);
  }
}
</style>
