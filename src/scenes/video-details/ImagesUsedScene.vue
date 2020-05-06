<template>
  <div class="images-used-scene">
    <div class="images-used-scene__video-wrapper">
      <img src="https://picsum.photos/520/290" alt />
    </div>
    <div class="images-used-scene__bottom-block">
      <header class="images-used-scene__bottom-block-header">
        <m-row jc="space-between" ai="center">
          <h4 class="images-used-scene__bottom-title">Image Shots</h4>
          <m-row ai="center" v-if="checkedPictures.length !== 0">
            <m-subtle class="images-used-scene__link-btn">
              Open All Pictures in Google
              <template #icon>
                <m-icon icon="link" />
              </template>
            </m-subtle>
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
        <li v-for="item in pictures" :key="item.thumbnail">
          <images-list-item v-model="checkedPictures" name="checkedPictures" :val="item" />
        </li>
      </ul>
      <pre>{{checkedPictures}}</pre>
    </div>
  </div>
</template>
<script>
import ImagesListItem from './images-used-scene/ImagesListItem.vue';

export default {
  name: 'ImagesUsedScene',
  components: {
    ImagesListItem,
  },
  data() {
    return {
      checkedPictures: [],
      pictures: [
        {
          thumbnail: 'https://picsum.photos/id/1/132/90',
          time: '11-24',
        },
        {
          thumbnail: 'https://picsum.photos/id/2/132/90',
          time: '11-26',
        },
        {
          thumbnail: 'https://picsum.photos/id/3/132/90',
          time: '11-28',
        },
      ],
    };
  },
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
    width: 132px;
    margin-right: 46px;
  }
  &__images-list {
    li {
      border-bottom: 1px solid $G8;
    }
  }
  &__link-btn {
    margin-right: 22px;
  }
}
</style>
