<template>
  <li class="home-table-item" @mouseenter="showMore = true" @mouseleave="hideShowMore">
    <home-table-item-wrapper>
      <m-checkbox name="catalog" :val="video.id" v-model="select" />
      <router-link :to="{ name: 'VideoDetails', params: {id: video.id} }">
        <m-row ai="center">
          <img
            class="home-table-item__image"
            :src="video && video.image"
            alt=""
          />
          <a-tooltip :title="video.name" placement="topRight">
            <span class="home-table-item__name">{{video.name}}</span>
          </a-tooltip>
        </m-row>
      </router-link>
      <span class="home-table-item__text">{{video.date}}</span>
      <span class="home-table-item__text _right">{{$separator(video.views)}}</span>
      <span class="home-table-item__text _right">{{$separator(video.likes)}}</span>
      <span class="home-table-item__text _right">{{$separator(video.dislikes)}}</span>
      <span class="home-table-item__text _right">{{$separator(video.comments)}}</span>
      <span class="home-table-item__text _right">{{$float(video.engagement_ratio)}}%</span>
      <span class="home-table-item__text _right">{{video.watch_time}}</span>
      <span class="home-table-item__text _right">{{$float(video.watch_time_ratio)}}%</span>
      <span class="home-table-item__text _right">{{$float(video.click_through_rate)}}%</span>
      <span class="home-table-item__text _right">{{$currency(video.ad_revenue)}}</span>
      <span class="home-table-item__text _right">{{$currency(video.profuction_cost)}}</span>
      <span class="home-table-item__text _right">{{$float(5.10 || video.roi)}}%</span>
      <home-table-item-cascader
        class="home-table-item__cascader"
        v-if="showMore"
        @popoverIsVisible="popoverIsVisible = !popoverIsVisible"
      />
    </home-table-item-wrapper>
  </li>
</template>
<script>
import HomeTableItemWrapper from './HomeTableItemWrapper.vue';
import HomeTableItemCascader from './HomeTableItemCascader.vue';

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
  data() {
    return {
      showMore: false,
      popoverIsVisible: false,
    };
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
  methods: {
    hideShowMore() {
      if (!this.popoverIsVisible) {
        this.showMore = false;
      }
    },
  },
  components: {
    HomeTableItemWrapper,
    HomeTableItemCascader,
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
    background-color: $D4;
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
  &__cascader {
    position: absolute;
    right: -35px;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
