<template>
  <transition :name="name" :appear="appear" :mode="mode">
    <slot />
  </transition>
</template>
<script>
export default {
  name: 'MTransition',
  props: {
    name: {
      type: String,
      default: 'fade',
    },
    mode: {
      type: String,
      default: 'out-in',
    },
    appear: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
<style lang="scss">
.fade-enter-active {
  animation: fadeIn 0.2s;
}
.fade-leave-active {
  animation: fadeOut 0.2s;
}
.bounce-enter-active {
  animation: bounceIn 0.3s;
}
.bounce-leave-active {
  animation: fadeOut 0.2s;
}
.pull-down-enter,
.pull-down-leave {
  transform-origin: 100% 0;
}
.pull-down-enter-active {
  animation: pullDownLight 0.4s;
}
.pull-down-leave-active {
  animation: pullDownLight 0.2s;
  animation-direction: reverse;
}
</style>
