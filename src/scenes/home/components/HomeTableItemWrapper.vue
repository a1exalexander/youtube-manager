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
.#{$style} {
  &__content {
    display: grid;
    grid-template-columns: 16px auto 86px 50px 50px 50px 60px 100px 70px 100px 110px 70px 100px 40px;
    align-items: center;
    column-gap: 25px;
  }
}
</style>
