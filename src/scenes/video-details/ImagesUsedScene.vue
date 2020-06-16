<template>
  <div class="images-used-scene">
    <div class="images-used-scene__video-wrapper" :class="{_active: affix}">
      <youtube class="images-used-scene__video" :video-id="videoId" ref="youtube" />
    </div>
    <div class="images-used-scene__bottom-block">
      <header class="images-used-scene__bottom-block-header">
        <m-row jc="space-between" ai="center">
          <h4 class="images-used-scene__bottom-title">Image Shots</h4>
          <m-row ai="center" v-if="checked.length !== 0">
            <m-subtle>
              Download All
              <template #icon>
                <m-icon icon="download" />
              </template>
            </m-subtle>
          </m-row>
        </m-row>
        <m-row ai="center" class="images-used-scene__table-head">
          <h6 class="images-used-scene__table-title">picture</h6>
          <h6 class="images-used-scene__table-title">google link</h6>
        </m-row>
      </header>
      <ul class="images-used-scene__images-list">
        <li v-for="shot in shots" :key="shot.id">
          <images-list-item v-model="checked" :shot="shot" @play="playAt(shot.time)" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
import ImagesListItem from './images-used-scene/ImagesListItem.vue';

export default {
  name: 'ImagesUsedScene',
  components: {
    ImagesListItem,
  },
  data() {
    return {
      checked: [],
      affix: false,
    };
  },
  computed: {
    ...mapState('video', {
      videoId: ({ details }) => details?.videoId,
      shots: ({ shots }) => shots,
    }),
    player() {
      return this.$refs?.youtube?.player;
    },
  },
  methods: {
    playAt(time) {
      if (this.$isNumber(time)) this.player.seekTo(time);
    },
    affixChange(e) {
      this.affix = e;
    },
  },
};
</script>
<style lang="scss">
$styles: images-used-scene;
.#{$styles} {
  max-height: calc(100vh - 178px);
  overflow: visible;
  @include flex-col;
  .ant-affix {
    pointer-events: none;
  }
  &__video-wrapper {
    width: 24.9%;
    margin: auto;
    @include padding-hack(14%, cover);
    &._active {
      box-shadow: 0 0px 12px 6px rgba(0, 0, 0, 0.3);
    }
  }
  &__bottom-block {
    @extend %block-style;
    margin-top: 24px;
    @include flex-col;
    overflow: hidden;
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
    width: 132px;
    margin-right: 46px;
  }
  &__images-list {
    overflow-y: auto;
    li {
      border-bottom: 1px solid $G8;
    }
  }
  &__link-btn {
    margin-right: 22px;
  }
}
</style>
