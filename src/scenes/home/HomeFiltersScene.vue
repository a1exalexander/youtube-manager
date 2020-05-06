<template>
  <m-container class="home-filters-scene">
    <m-row wrap ai='center'>
      <span class="home-filters-scene__caption">Filter by: </span>
      <m-subtle class='home-filters-scene__add-btn'>
        <template #icon>
          <m-icon icon='plus' />
        </template>
        More
      </m-subtle>
    </m-row>
  </m-container>
</template>
<script>
export default {
  name: 'HomeFiltersScene',
};
</script>
<style lang="scss">
$style: home-filters-scene;
.#{$style} {
  background-color: $dark;
  &__caption {
    @include text($H12, 500);
    margin-right: 10px;
  }
  &__add-btn {
    svg {
      position: relative;
      top: -1px;
    }
  }
}
</style>
