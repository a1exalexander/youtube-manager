<template>
  <home-table-item-wrapper class="home-table-head">
    <div class="home-table-head__cell">
      <m-checkbox />
    </div>
    <div class="home-table-head__cell">video</div>
    <div class="home-table-head__cell">
      <button class="home-table-head__cell-btn">
        <span class="home-table-head__text">posted date</span>
        <m-icon class="home-table-head__icon" icon="arrow-up" />
      </button>
    </div>
    <div class="home-table-head__cell _right">views</div>
    <div class="home-table-head__cell _right">likes</div>
    <div class="home-table-head__cell _right">dislikes</div>
    <div class="home-table-head__cell _right">comments</div>
    <div class="home-table-head__cell _right">engagement ratio</div>
    <div class="home-table-head__cell _right">watch time</div>
    <div class="home-table-head__cell _right">watch time ratio</div>
    <div class="home-table-head__cell _right">click through rate</div>
    <div class="home-table-head__cell _right">ad revenue</div>
    <div class="home-table-head__cell _right">production cost</div>
    <div class="home-table-head__cell _right">roi</div>
  </home-table-item-wrapper>
</template>
<script>
import HomeTableItemWrapper from './HomeTableItemWrapper.vue';

export default {
  name: 'HomeTableHead',
  components: {
    HomeTableItemWrapper,
  },
};
</script>
<style lang="scss">
$style: home-table-head;
.#{$style} {
  border-bottom: 1px solid $G7;
  padding-bottom: 14px;
  &__cell {
    @include text($H10, 500, $G4);
    text-transform: uppercase;
    white-space: nowrap;
    text-align: left;
    &._right {
      text-align: right;
    }
  }
  &__cell-btn {
    @include flex(center, center);
    border: none;
    outline: none;
    background-color: transparent;
    @include media {
      &:hover {
        .#{$style}__text {
          color: $G2;
        }
        .#{$style}__icon {
          fill: $I4;
        }
      }
    }
    &:active {
      .#{$style}__text {
        color: $G6;
      }
      .#{$style}__icon {
        fill: $I8;
      }
    }
  }
  &__text {
    @include text($H10, 500, $G4);
    @include transition(all);
    text-transform: uppercase;
    white-space: nowrap;
  }
  &__icon {
    margin-left: 2px;
    @include svg(17px, $I6);
  }
}
</style>
