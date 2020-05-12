<template>
  <li class="home-table-item">
    <home-table-item-wrapper>
      <m-checkbox name='catalog' :val='video.id' v-model="select"/>
      <router-link :to="{ name: 'VideoDetails', params: {id: video.id} }">
        <m-row ai="center">
          <img
            class="home-table-item__image"
            :src="`https://picsum.photos/id/${video.id}/300/200`"
            alt="image"
          />
          <a-tooltip :title="video.name" placement="topRight">
            <span class="home-table-item__name">{{video.name}}</span>
          </a-tooltip>
        </m-row>
      </router-link>
      <span class="home-table-item__text">{{video.date}}</span>
      <span class="home-table-item__text _right">{{video.views | numeral('0,0')}}</span>
      <span class="home-table-item__text _right">{{video.likes | numeral('0,0')}}</span>
      <span class="home-table-item__text _right">{{video.dislides | numeral('0,0')}}</span>
      <span class="home-table-item__text _right">{{video.comments | numeral('0,0')}}</span>
      <span class="home-table-item__text _right">{{video.engagement_ratio || 0}}%</span>
      <span class="home-table-item__text _right">{{video.watch_time}}</span>
      <span class="home-table-item__text _right">{{video.watch_time_ratio || 0}}%</span>
      <span class="home-table-item__text _right">{{video.click_through_rate || 0}}%</span>
      <span class="home-table-item__text _right">${{video.ad_revenue | numeral('0,0')}}</span>
      <span class="home-table-item__text _right">${{video.profuction_cost}}</span>
      <span class="home-table-item__text _right">{{video.roi || 0 | numeral('0.[00]')}}%</span>
    </home-table-item-wrapper>
  </li>
</template>
<script>
import HomeTableItemWrapper from './HomeTableItemWrapper.vue';

export default {
  name: 'HomeTableItem',
  props: {
    contentClass: String,
    value: [String, Number, Array],
    video: {
      type: Object,
      required: true,
    },
  },
  computed: {
    select: {
      set(value) {
        this.$emit('input', value);
      },
      get() {
        return this.value;
      },
    },
  },
  components: {
    HomeTableItemWrapper,
  },
};
</script>
<style lang="scss">
$style: home-table-item;
.#{$style} {
  border-bottom: 1px solid $G8;
  padding-top: 12px;
  padding-bottom: 12px;
  &__image {
    width: 70px;
    height: 40px;
    object-fit: cover;
    object-position: center;
    margin-right: 16px;
    flex-shrink: 0;
  }
  &__text {
    @include text($H12, 400);
    text-align: left;
    &._right {
      text-align: right;
    }
  }
  &__name {
    @extend .#{$style}__text;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
</style>
