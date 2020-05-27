<template>
  <m-container class="video-details" contentClass="video-details__inner">
    <m-subtle type="grey" @click="$router.go(-1)" class="video-details__back-btn">
      Back to Catalog
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
import { mapActions } from 'vuex';
import {
  VIDEO_DETAILS_REQUEST,
  VIDEO_CLIPS_REQUEST,
  VIDEO_SHOTS_REQUEST,
  VIDEO_CLEAN,
  VIDEO_CHARTS_REQUEST,
} from '../store';

export default {
  name: 'VideoDetailsView',
  components: {
    OverviewScene,
    ClipLocatorScene,
    ImagesUsedScene,
  },
  methods: {
    ...mapActions('video', [
      VIDEO_CLEAN,
      VIDEO_DETAILS_REQUEST,
      VIDEO_CLIPS_REQUEST,
      VIDEO_SHOTS_REQUEST,
      VIDEO_CHARTS_REQUEST,
    ]),
  },
  created() {
    this[VIDEO_CLIPS_REQUEST]();
    this[VIDEO_SHOTS_REQUEST]();
  },
  destroyed() {
    this[VIDEO_CLEAN]();
  },
};
</script>
<style lang="scss">
.video-details {
  position: relative;
  z-index: 1;
  padding-bottom: 32px;
  &__inner {
    @include flex-row(stretch, stretch);
    position: relative;
  }
  .m-subtle.video-details__back-btn {
    position: absolute;
    left: 0;
    top: 29px;
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
      top: 59px;
    }
  }
  &__tab {
    padding-top: 24px;
  }
}
</style>
