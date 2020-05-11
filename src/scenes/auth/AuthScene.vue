<template>
  <m-container class="auth-scene" contentClass="auth-scene__inner">
    <icon-logo animation class="auth-scene__logo" />
    <article class="auth-scene__card">
      <slot />
    </article>
  </m-container>
</template>
<script>
import IconLogo from '@/components/icons/IconLogo.vue';

export default {
  name: 'AuthScene',
  components: {
    IconLogo,
  },
};
</script>
<style lang="scss">
.auth-scene {
  padding: 24px;
  @include flex(center, center);
  text-align: center;
  @include media {
    padding: 20vh 40px;
  }
  &__inner {
    text-align: center;
    flex-basis: 340px;
  }
  &__logo {
    margin-bottom: 32px;
  }
  &__card {
    border-radius: 2px;
    background-color: $dark;
    padding: 34px 40px 40px;
    @include transition(all);
  }
}
</style>
