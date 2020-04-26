<template>
  <m-transition>
    <div class="m-popconfirm" v-if="visible">
      <div class="m-popconfirm__inner" @click="onClose">
        <article
          @click.stop
          class="m-popconfirm__card animated faster"
          :style="{ width }"
          :class="{ zoomIn: visible }"
        >
          <h3 class="m-popconfirm__title">{{ title }}</h3>
          <div class="m-popconfirm__content">
            <slot>{{ text }}</slot>
          </div>
          <row jc="center" class="m-popconfirm__buttons">
            <slot name="buttons">
              <m-button type="secondary" @click="onClose">Cancel</m-button>
              <m-button type="danger" @click="() => $emit('danger-action')">
                {{ dangerLabel }}
              </m-button>
            </slot>
          </row>
        </article>
      </div>
    </div>
  </m-transition>
</template>
<script>
export default {
  name: 'MPopconfirm',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '333px',
    },
    visible: {
      type: Boolean,
      default: false,
    },
    dangerLabel: {
      type: String,
      default: 'Delete',
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
$style: m-popconfirm;
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
    background-color: $input-bg;
    border-radius: 2px;
    border: none;
    box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.28);
    padding: 42px 28px 40px;
    @include flex(center, center, column);
  }
  &__title {
    @include text($H18, 500);
    margin-bottom: 23px;
  }
  &__content {
    text-align: center;
    @include text($H12, 500, $G2);
    margin-bottom: 28px;
  }
  &__buttons {
    button:not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
