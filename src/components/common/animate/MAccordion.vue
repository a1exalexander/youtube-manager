<template>
  <transition @enter="enter" @leave="leave" :css="false">
    <slot />
  </transition>
</template>
<script>
import Velocity from 'velocity-animate';

export default {
  name: 'MAccordion',
  methods: {
    enter(el, done) {
      Velocity(el, 'slideDown', { duration: 200, complete: done });
    },
    leave(el, done) {
      Velocity(el, 'slideUp', { duration: 200, complete: done });
    },
  },
};
</script>
