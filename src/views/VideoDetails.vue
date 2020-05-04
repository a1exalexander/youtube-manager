<template>
  <m-container class="video-details" contentClass="video-details__inner" fluid>
    <m-subtle type="grey" @click="$emit('back')" class="video-details__back-btn">
      Back to Account Setting
      <template #icon>
        <m-icon icon="back" />
      </template>
    </m-subtle>
    <a-tabs defaultActiveKey="1" class="video-details__tabs" :tabBarStyle="{ margin: 'auto' }">
      <a-tab-pane tab="Overview" key="1" class="video-details__tab">
        <overview-scene />
      </a-tab-pane>
      <a-tab-pane tab="Clip Locator" key="2" class="video-details__tab">
        <clip-locator-scene />
      </a-tab-pane>
      <a-tab-pane tab="Images Used" key="3" class="video-details__tab">
        <images-used-scene />
      </a-tab-pane>
    </a-tabs>
  </m-container>
</template>
<script>
import OverviewScene from '@/scenes/video-details/OverviewScene.vue';
import ClipLocatorScene from '@/scenes/video-details/ClipLocatorScene.vue';
import ImagesUsedScene from '@/scenes/video-details/ImagesUsedScene.vue';

export default {
  name: 'VideoDetailsView',
  components: {
    OverviewScene,
    ClipLocatorScene,
    ImagesUsedScene,
  },
};
</script>
<style lang="scss">
.video-details {
  position: relative;
  z-index: 1;
  &__inner {
    width: 100%;
    @include flex-row(stretch, stretch);
    position: relative;
  }
  .m-subtle.video-details__back-btn {
    position: absolute;
    left: 0;
    top: 26px;
    transform: translateY(-50%);
    z-index: 10;
  }
  &__tabs {
    width: 100%;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      display: inline-block;
      height: 1px;
      width: 100%;
      background-color: $G8;
      top: 52px;
    }
  }
  &__tab {
    padding-top: 24px;
  }
}
</style>
