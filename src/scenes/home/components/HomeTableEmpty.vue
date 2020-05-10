<template>
  <m-col class="home-table-empty" ai="center" jc="center">
    <p class="home-table-empty__title">Add your first Video to start!</p>
    <m-button>
      <template #icon>
        <m-icon icon="plus" />
      </template>Add New Video
    </m-button>
  </m-col>
</template>
<script>
export default {
  name: 'HomeTableEmpty',
};
</script>
<style lang="scss">
$style: home-table-empty;
.#{$style} {
  flex: 1 1;
  &__title {
    @include text($H16, 500);
    margin-bottom: 21px;
  }
}
</style>
