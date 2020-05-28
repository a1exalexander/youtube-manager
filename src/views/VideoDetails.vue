<template>
  <m-container class="video-details" contentClass="video-details__inner">
    <m-subtle type="grey" @click="$router.go(-1)" class="video-details__back-btn">
      Back to Catalog
      <template #icon>
        <m-icon icon="back" />
      </template>
    </m-subtle>
    <a-tabs
      v-model="tabModel"
      class="video-details__tabs"
      :tabBarStyle="{ margin: 'auto' }"
      @change="onTabChange"
    >
      <a-tab-pane tab="Overview" key="overview" class="video-details__tab">
        <overview-scene />
      </a-tab-pane>
      <a-tab-pane tab="Clip Locator" key="clip" class="video-details__tab">
        <clip-locator-scene />
      </a-tab-pane>
      <a-tab-pane tab="Images Used" key="images" class="video-details__tab">
        <images-used-scene />
      </a-tab-pane>
    </a-tabs>
  </m-container>
</template>
<script>
import OverviewScene from '@/scenes/video-details/OverviewScene.vue';
import ClipLocatorScene from '@/scenes/video-details/ClipLocatorScene.vue';
import ImagesUsedScene from '@/scenes/video-details/ImagesUsedScene.vue';
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';
import {
  VIDEO_DETAILS_REQUEST,
  VIDEO_CLIPS_REQUEST,
  VIDEO_SHOTS_REQUEST,
  VIDEO_CLEAN,
  VIDEO_CHARTS_REQUEST,
  VIDEO_TAB_SET,
} from '../store';

export default {
  name: 'VideoDetailsView',
  components: {
    OverviewScene,
    ClipLocatorScene,
    ImagesUsedScene,
  },
  computed: {
    ...mapState('video', ['activeTab']),
    ...mapGetters('video', ['isVideoLoaded']),
    tabModel: {
      get() {
        return this.activeTab;
      },
      set(e) {
        this[VIDEO_TAB_SET](e);
      },
    },
  },
  methods: {
    ...mapMutations('video', [VIDEO_TAB_SET]),
    ...mapActions('video', [
      VIDEO_CLEAN,
      VIDEO_DETAILS_REQUEST,
      VIDEO_CLIPS_REQUEST,
      VIDEO_SHOTS_REQUEST,
      VIDEO_CHARTS_REQUEST,
    ]),
    onTabChange(tab) {
      const { id } = this.$route.params;
      switch (tab) {
        case 'overview':
          this[VIDEO_DETAILS_REQUEST](id);
          this[VIDEO_CHARTS_REQUEST]();
          break;
        case 'clip':
          this[VIDEO_CLIPS_REQUEST]();
          break;
        case 'images':
          this[VIDEO_SHOTS_REQUEST]();
          break;
        default:
          break;
      }
    },
  },
  created() {
    const { id } = this.$route.params;
    this[VIDEO_DETAILS_REQUEST](id);
    this[VIDEO_CHARTS_REQUEST]();
    this[VIDEO_CLIPS_REQUEST]();
    this[VIDEO_SHOTS_REQUEST]();
  },
  destroyed() {
    this[VIDEO_CLEAN]();
    this[VIDEO_TAB_SET]('overview');
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
