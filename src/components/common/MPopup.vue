<template>
  <m-transition>
    <div class="m-popup" :style="{ zIndex }" v-if="visible">
      <div class="m-popup__inner" @click="onClose">
        <article
          @click.stop
          class="m-popup__card animated faster"
          :style="{ width }"
          :class="{ zoomIn: visible }"
        >
          <m-row jc="space-between" ai="center" class="m-popup__header">
            <h3 class="m-popup__title">{{ title }}</h3>
            <button @click="onClose" class="m-popup__close-btn">
              <m-icon class="m-popup__close-icon" icon="close" />
            </button>
          </m-row>
          <div class="m-popup__content">
            <slot />
          </div>
          <m-row jc="flex-end" class="m-popup__buttons" v-if="$slots.buttons">
            <slot name="buttons" />
          </m-row>
        </article>
      </div>
    </div>
  </m-transition>
</template>
<script>
export default {
  name: 'MPopup',
  props: {
    title: {
      type: String,
      required: true,
    },
    width: {
      type: String,
      default: '333px',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    zIndex: {
      type: Number,
      default: 15,
    },
  },
  methods: {
    onClose() {
      this.$emit('close');
    },
  },
};
</script>
<style lang="scss">
$style: m-popup;
.#{$style} {
  position: fixed;
  @include position;
  min-height: 100vh;
  background: rgba($D10, 0.6);
  overflow: auto;
  @include z-index(popup);
  &__inner {
    padding: 32px;
    height: 100%;
    @include flex(center, center);
  }
  &__card {
    background-color: $dark;
    border-radius: 2px;
    border: none;
    box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.28);
    padding: 0;
  }
  &__header {
    padding: 20px 24px;
    background-color: $D4;
    border-bottom: 1px solid $G8;
  }
  &__title {
    @include text($H16, 500);
    margin: 0;
  }
  &__close-btn {
    background-color: transparent;
    outline: none;
    border: none;
    @include size(20px);
    @include flex(center, center);
    cursor: pointer;
    @include media {
      &:hover .#{$style}__close-icon {
        fill: $G3;
      }
    }
    &:active .#{$style}__close-icon {
      fill: $G5;
    }
  }
  &__close-icon {
    width: 100%;
    height: 100%;
    fill: $G4;
    @include transition(all);
  }
  &__content {
    @include text($H14, 400);
  }
  &__buttons {
    border-top: 1px solid $G8;
    padding: 16px 24px;
    button:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
