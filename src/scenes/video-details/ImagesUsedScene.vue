<template>
  <div class="images-used-scene">
    <div class="images-used-scene__video-wrapper">
      <img src="https://picsum.photos/520/290" alt />
    </div>
    <div class="images-used-scene__bottom-block">
      <header class="images-used-scene__bottom-block-header">
        <h4 class="images-used-scene__bottom-title">Image Shots</h4>
        <m-row ai="center" class="images-used-scene__table-head">
          <h6 class="images-used-scene__table-title">picture</h6>
          <h6 class="images-used-scene__table-title">google link</h6>
        </m-row>
      </header>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImagesUsedScene',
};
</script>
<style lang="scss">
$styles: images-used-scene;
.#{$styles} {
  &__video-wrapper {
    width: 40%;
    margin: auto;
    border: 1px solid $D9;
    border-radius: 2px;
    overflow: hidden;
    height: 340px;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__bottom-block {
    @extend %block-style;
    margin-top: 24px;
  }
  &__bottom-block-header {
    padding: 20px 24px 16px;
    border-bottom: 1px solid $G7;
  }
  &__bottom-title {
    @include text($H16, 500, $N0);
    margin-bottom: 20px;
  }
  &__table-title {
    @include text($H10, 500, $G4);
    text-transform: uppercase;
    flex-basis: 1 1 12%;
    max-width: 12%;
    min-width: 236px;
    margin-right: 46px;
  }
}
</style>
