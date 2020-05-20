<template>
  <m-container
    class="home-table-item-wrapper"
    :contentClass="`home-table-item-wrapper__content ${contentClass}`"
  >
    <slot />
  </m-container>
</template>
<script>
export default {
  name: 'HomeTableItemWrapper',
  props: {
    contentClass: String,
  },
};
</script>
<style lang="scss">
$style: home-table-item-wrapper;
@function columns($width: 200px) {
  @return 16px #{$width} 85px 85px 75px 70px 75px 100px 70px 100px 110px 70px 100px 42px;
}
.#{$style} {
  &__content {
    display: grid;
    grid-template-columns: columns();
    align-items: center;
    justify-content: space-between;
    column-gap: 5px;
    position: relative;
    @include media($screen-fullhd) {
      grid-template-columns: columns(210px);
    }
    @include media($screen-retina) {
      column-gap: 25px;
      grid-template-columns: columns(2fr);
    }
  }
}
</style>
