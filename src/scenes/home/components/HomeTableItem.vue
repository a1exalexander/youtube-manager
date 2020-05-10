<template>
  <li class="home-table-item">
    <home-table-item-wrapper>
      <m-checkbox />
      <m-row ai="center">
        <img class="home-table-item__image" src="https://picsum.photos/300/200" alt="image" />
        <m-col>
          <span
            class="home-table-item__name"
          >{{'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, nihil.'}}</span>
        </m-col>
      </m-row>
      <span class="home-table-item__text">{{'10/12/2019'}}</span>
      <span class="home-table-item__text _right">{{'12,900'}}</span>
      <span class="home-table-item__text _right">{{'250'}}</span>
      <span class="home-table-item__text _right">{{'28'}}</span>
      <span class="home-table-item__text _right">{{'3'}}</span>
      <span class="home-table-item__text _right">{{'68%'}}</span>
      <span class="home-table-item__text _right">{{'9:12'}}</span>
      <span class="home-table-item__text _right">{{'68%'}}</span>
      <span class="home-table-item__text _right">{{'1.5%'}}</span>
      <span class="home-table-item__text _right">{{'$2,000'}}</span>
      <span class="home-table-item__text _right">{{'$201'}}</span>
      <span class="home-table-item__text _right">{{'10.5%'}}</span>
    </home-table-item-wrapper>
  </li>
</template>
<script>
import HomeTableItemWrapper from './HomeTableItemWrapper.vue';

export default {
  name: 'HomeTableItem',
  props: {
    contentClass: String,
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
