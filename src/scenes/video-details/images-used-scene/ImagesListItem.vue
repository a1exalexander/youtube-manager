<template>
  <label class="images-list-item">
    <input type="checkbox" :name="name" class="images-list-item__input" :value="val" v-model="checked" />
    <div class="images-list-item__inner">
      <m-row ai="center">
        <div class="images-list-item__img-wrapper">
          <m-subtle type="white" class="images-list-item__zoom"
            ><template #icon><m-icon icon="search"/></template
          ></m-subtle>
          <img :src="val.thumbnail" alt />
        </div>
        <m-subtle :type="getLinkType">{{ val.thumbnail }}</m-subtle>
      </m-row>
      <m-row ai="center">
        <m-subtle @click="$emit('isShowClicked', val.time)" :type="getButtonType" class="images-list-item__show-btn"
          >Show in Video <template #icon><m-icon icon="visibility-off"/></template
        ></m-subtle>
        <m-subtle @click="$emit('isDownloadClicked', val.thumbnail)" :type="getButtonType"
          >Download <template #icon><m-icon icon="download"/></template
        ></m-subtle>
      </m-row>
    </div>
  </label>
</template>
<script>
export default {
  name: 'ImagesListItem',
  props: {
    val: {
      type: Object,
    },
    name: {
      type: String,
    },
    value: {
      type: Array,
    },
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.onChange(val);
      },
    },
    getLinkType() {
      return this.value.find(({ thumbnail }) => this.val.thumbnail === thumbnail) ? 'white' : 'primary';
    },
    getButtonType() {
      return this.value.find(({ thumbnail }) => this.val.thumbnail === thumbnail) ? 'grey' : 'primary';
    },
  },
  methods: {
    onChange(e) {
      this.$emit('input', e);
    },
  },
};
</script>
<style lang="scss">
$styles: images-list-item;
.#{$styles} {
  cursor: pointer;
  &__input {
    display: none;
    &:checked + .#{$styles}__inner {
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
