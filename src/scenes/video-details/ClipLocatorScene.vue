<template>
  <div class="clip-locator-scene">
    <m-row>
      <m-col class="clip-locator-scene__video-wrapper">
        <youtube
          class="clip-locator-scene__video"
          :video-id="videoId"
          ref="youtube"
        />
      </m-col>
      <m-col class="clip-locator-scene__clips">
        <m-row jc="space-between" ai="center" class="clip-locator-scene__clips-head">
          <h6 class="clip-locator-scene__title">Video Clips:</h6>
          <m-subtle type="grey">
            Download
            <template #icon>
              <m-icon icon="download" />
            </template>
          </m-subtle>
        </m-row>
        <m-col class="clip-locator-scene__screenshots">
          <m-row wrap class="clip-locator-scene__row">
            <m-col v-for="clip in clips" :key="clip.id" class="clip-locator-scene__col">
              <a
                href="#"
                @click.prevent="playAt(clip.start)"
                class="clip-locator-scene__thumbnail-btn"
              >
                <m-icon
                  v-if="$isNumber(clip.start)"
                  icon="play"
                  class="clip-locator-scene__icon-play"
                />
                <img
                  v-if="clip.image"
                  class="clip-locator-scene__video-thumbnail"
                  :src="clip.image"
                  alt
                />
              </a>
            </m-col>
          </m-row>
        </m-col>
      </m-col>
    </m-row>
    <m-divider />
    <div class="clip-locator-scene__block">
      <m-row ai="center" class="clip-locator-scene__search">
        <h4 class="clip-locator-scene__title">Results</h4>
        <m-input v-model="search" class="clip-locator-scene__input" placeholder="Search..." />
        <m-checkbox v-model="isAdShown" class="clip-locator-scene__checkbox">Show Ad Objects</m-checkbox>
      </m-row>
      <transition-group class="clip-locator-scene__badges-list" name="list-complete" tag="div">
        <m-badge
          @click="playAt(clip.start)"
          v-for="clip in filteredData"
          :key="clip.id"
          class="clip-locator-scene__badge list-complete-item"
          :withIcon="clip.ad"
        >{{ clip.name }}</m-badge>
      </transition-group>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'ClipLocatorScene',
  data() {
    return {
      search: '',
      isAdShown: false,
    };
  },
  computed: {
    ...mapState('video', {
      clips: ({ clips }) => clips,
      videoId: ({ details }) => details?.videoId,
    }),
    filteredArrayByAd() {
      return this.clips.filter(({ ad }) => (!this.isAdShown && !ad) || this.isAdShown);
    },
    filteredData() {
      return this.filteredArrayByAd.filter(({ name }) => name.toLowerCase().indexOf(this.search) !== -1);
    },
    player() {
      return this.$refs?.youtube?.player;
    },
  },
  methods: {
    playAt(time) {
      if (this.$isNumber(time)) this.player.seekTo(time);
    },
  },
};
</script>
<style lang="scss">
$styles: clip-locator-scene;
.#{$styles} {
  &__video-wrapper {
    flex-basis: 40%;
    @include padding-hack(22.5%, cover);
  }
  &__clips {
    padding-left: 40px;
    flex: 1 1;
  }
  &__clips-head {
    margin-bottom: 12px;
  }
  &__video-thumbnail {
    background-color: $dark;
    @include transition(all);
  }
  &__title {
    @include text($H12, 500, $G2);
  }
  &__screenshots {
    max-height: 308px;
    overflow-y: auto;
    &::-webkit-scrollbar {
      background: transparent;
    }
  }
  &__row {
    margin-left: -14px;
  }
  &__col {
    flex: 1 1 20%;
    max-width: 20%;
    padding: 8px 14px;
  }
  &__thumbnail-btn {
    @include padding-hack(64.5%, cover);
    background-color: $dark;
    display: flex;
    cursor: pointer;
    @include media {
      &:hover {
        .#{$styles}__video-thumbnail {
          filter: brightness(0.7);
        }
        .#{$styles}__icon-play {
          @include size(43px);
          opacity: 1;
        }
      }
    }
    &:active {
      .#{$styles}__icon-play {
        @include size(37px);
      }
    }
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
    @include transition(all);
  }
  &__block {
    @extend %block-style;
    padding: 20px 24px;
  }
  &__search {
    margin-bottom: 20px;
  }
  &__title {
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
  &__badges-list {
    @include flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  &__badge {
    margin: 3px;
    flex-wrap: nowrap;
  }
}
</style>
