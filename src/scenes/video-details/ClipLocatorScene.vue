<template>
  <div class="clip-locator-scene">
    <m-row>
      <m-col class="clip-locator-scene__video-wrapper">
        <img src="https://picsum.photos/520/290" alt />
      </m-col>
      <m-col class="clip-locator-scene__video-clips">
        <m-row jc="space-between" ai="center" class="clip-locator-scene__video-clips-head">
          <h6 class="clip-locator-scene__title">Video Clips:</h6>
          <m-subtle type="grey">
            Download
            <template #icon>
              <m-icon icon="download" />
            </template>
          </m-subtle>
        </m-row>
        <m-col class="clip-locator-scene__video-screenshots">
          <m-row wrap class="clip-locator-scene__video-row">
            <m-col v-for="item in 18" :key="item" class="clip-locator-scene__video-col">
              <div class="clip-locator-scene__img-wrapper">
                <m-icon icon="play" class="clip-locator-scene__icon-play" />
                <img :src="`https://picsum.photos/id/${item}/124/80`" alt="" />
              </div>
            </m-col>
          </m-row>
        </m-col>
      </m-col>
    </m-row>
    <m-divider />
    <div class="clip-locator-scene__bottom-block">
      <m-row ai="center" class="clip-locator-scene__bottom-search">
        <h4 class="clip-locator-scene__bottom-title">Results</h4>
        <m-input v-model="value" class="clip-locator-scene__input" />
        <m-checkbox v-model="isAdShown" class="clip-locator-scene__checkbox">Show Ad Objects</m-checkbox>
      </m-row>
      <m-row wrap>
        <m-badge v-for="item in 200" :key="item" class="clip-locator-scene__badge">Man</m-badge>
      </m-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ClipLocatorScene',
  data() {
    return {
      value: '',
      isAdShown: false,
    };
  },
};
</script>
<style lang="scss">
$styles: clip-locator-scene;
.#{$styles} {
  &__video-wrapper {
    flex: 1 1 516px;
    min-width: 40%;
    border: 1px solid $D9;
    border-radius: 2px;
    overflow: hidden;
    height: 340px;
    img {
      width: 100%;
      height: auto;
    }
  }
  &__video-clips {
    padding-left: 40px;
    flex: 1 1 60%;
  }
  &__video-clips-head {
    margin-bottom: 12px;
  }
  &__title {
    @include text($H12, 500, $G2);
  }
  &__video-screenshots {
    max-height: 308px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      background: transparent;
    }
  }
  &__video-row {
    margin-left: -14px;
  }
  &__video-col {
    flex: 1 1 20%;
    max-width: 20%;
    padding: 8px 14px;
  }
  &__img-wrapper {
    @include padding-hack(64.5%, cover);
  }
  &__icon-play {
    @include size(40px);
    fill: $N0;
    opacity: 0.6;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
    z-index: 1;
  }
  &__bottom-block {
    @extend %block-style;
    padding: 20px 24px;
  }
  &__bottom-search {
    margin-bottom: 20px;
  }
  &__bottom-title {
    @include text($H16, 500, $N0);
    margin-right: 16px;
  }
  &__input {
    margin-right: 24px;
    flex: 1;
  }
  &__checkbox {
    flex: 1;
  }
  &__badge {
    margin: 3px;
  }
}
</style>
