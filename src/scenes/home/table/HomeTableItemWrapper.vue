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
@function columns($width: 160px) {
  @return 16px #{$width} 85px 85px 75px 70px 75px 100px 70px 100px 110px 70px 100px 42px;
}
.#{$style} {
  &__content {
    display: grid;
    grid-template-columns: 18px 150px 90px 50px 50px 50px 60px 110px 70px 100px 110px 70px 100px 40px;
    align-items: center;
    justify-content: space-between;
    column-gap: 5px;
    &._scroll {
      & > *:not(:first-child) {
        overflow-x: auto;
      }
    }
    @include media(1300px) {
      grid-template-columns: columns();
    }
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
