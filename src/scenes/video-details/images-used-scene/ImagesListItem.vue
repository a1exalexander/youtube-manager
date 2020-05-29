<template>
  <div class="images-list-item" :class="{_checked: checked}" @click="handleClick">
    <div class="images-list-item__inner">
      <m-row ai="center">
        <div class="images-list-item__img-wrapper">
          <img class="images-list-item__img" v-if="shot.image" :src="shot.image" alt />
        </div>
        <m-subtle @click.stop :type="getLinkType">{{ shot.image }}</m-subtle>
      </m-row>
      <m-row ai="center">
        <m-subtle @click.stop :type="getButtonType" class="images-list-item__show-btn">
          Show in Video
          <template #icon>
            <m-icon icon="visibility-off" />
          </template>
        </m-subtle>
        <m-subtle @click.stop :type="getButtonType">
          Download
          <template #icon>
            <m-icon icon="download" />
          </template>
        </m-subtle>
      </m-row>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ImagesListItem',
  props: {
    shot: {
      type: Object,
    },
    value: Array,
  },
  computed: {
    getLinkType() {
      return this.checked ? 'white' : 'primary';
    },
    getButtonType() {
      return this.checked ? 'grey' : 'primary';
    },
    checked() {
      return this.value.some((id) => id === this.shot?.id);
    },
  },
  methods: {
    handleClick() {
      const { id } = this.shot;
      const idx = this.value.findIndex((el) => el === id);
      const shallowCopy = [...this.value];
      if (this.checked) {
        shallowCopy.splice(idx, 1);
      } else {
        shallowCopy.push(id);
      }
      this.$emit('input', shallowCopy);
    },
  },
};
</script>
<style lang="scss">
$styles: images-list-item;
.#{$styles} {
  cursor: pointer;
  &._checked {
    .#{$styles}__inner {
      background-color: $lighten;
    }
  }
  &__inner {
    @include flex-row(space-between, center);
    padding: 12px 24px;
    @include transition(background-color);
  }
  &__img-wrapper {
    width: 132px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 46px;
    @include padding-hack(20%, cover);
    background-color: $dark;
  }
  &__img {
    background-color: $BG-COLOR;
  }
  &__show-btn {
    margin-right: 40px;
  }
  &__zoom {
    position: absolute;
    left: 8px;
    top: 8px;
    z-index: 1;
  }
}
</style>
