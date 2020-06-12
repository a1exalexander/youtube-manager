<template>
  <m-container
    class="home-table-item-wrapper"
    :contentClass="`home-table-item-wrapper__content _scroll ${contentClass}`"
  >
    <slot />
  </m-container>
</template>
<script>
export default {
  name: 'HomeTableItemWrapper',
  props: {
    contentClass: {
      type: String,
      default: '',
    },
  },
};
</script>
<style lang="scss">
$style: home-table-item-wrapper;
@function columns($width: 150px) {
  @return 16px #{$width} 85px 70px 70px 70px 70px 120px 80px 110px 125px 80px 110px 42px;
}
.#{$style} {
  &__content {
    display: grid;
    grid-template-columns: 18px 150px 85px 50px 50px 50px 60px 110px 70px 100px 110px 70px 100px 40px;
    grid-template-columns: columns();
    align-items: center;
    justify-content: space-between;
    column-gap: 5px;
    position: relative;
    &._scroll {
      & > *:not(:first-child):not(:last-child) {
        overflow-x: auto;
      }
    }
    @include media($screen-hd) {
      grid-template-columns: columns();
    }
    @include media($screen-fullhd) {
      grid-template-columns: columns(220px);
    }
    @include media($screen-retina) {
      column-gap: 20px;
      grid-template-columns: columns(2fr);
    }
  }
}
</style>
