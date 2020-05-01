<template>
  <auth-scene class="auth">
    <m-row class="auth__nav auth-nav">
      <label class="auth-nav__item">
        <input
          class="auth-nav__input"
          type="radio"
          name="auth-navigation"
          v-model='navigation'
          value='login'
        /><span class="auth-nav__text">Login</span>
      </label>
      <label class="auth-nav__item">
        <input
          class="auth-nav__input"
          type="radio"
          name="auth-navigation"
          v-model='navigation'
          value='signup'
        /><span class="auth-nav__text">Sign Up</span>
      </label>
      <span
        class="auth-nav__line"
        :style="{left: navigation === 'login' ? '0': '50%'}"
      ></span>
    </m-row>
    <div class="auth__transition">
      <transition
        mode="out-in"
        :enter-active-class="`animated faster ${navigation === 'login' ? 'fadeInLeft': 'fadeInRight'}`"
        :leave-active-class="`animated faster ${navigation === 'login' ? 'fadeOutRight': 'fadeOutLeft'}`"
      >
        <login-scene
          v-if='navigation === "login"'
          key='login'
        />
        <signup-scene
          v-else
          key='signup'
        />
      </transition>
    </div>
  </auth-scene>
</template>
<script>
import AuthScene from '@/scenes/auth/AuthScene.vue';
import LoginScene from '@/scenes/auth/LoginScene.vue';
import SignupScene from '@/scenes/auth/SignupScene.vue';

export default {
  name: 'AuthView',
  components: {
    AuthScene,
    LoginScene,
    SignupScene,
  },
  data() {
    return {
      navigation: 'login',
    };
  },
};
</script>
<style lang="scss">
$style: auth;
.#{$style} {
  overflow: hidden;
  &__transition {
    position: relative;
    overflow: hidden;
  }
  &__nav {
    margin-bottom: 21px;
  }
}

$style: auth-nav;
.#{$style} {
  position: relative;
  border-bottom: 2px solid $G7;
  &__line {
    position: absolute;
    display: block;
    height: 2px;
    width: 50%;
    bottom: -2px;
    background-color: $I6;
    @include transition(all);
  }
  &__item {
    flex: 0 0 50%;
    display: flex;
    padding-bottom: 10px;
    position: relative;
    background-color: $dark;
    @include flex(center);
    cursor: pointer;
    @include media {
      &:hover {
        .#{$style}__text {
          color: $G2;
        }
      }
    }
    &:active {
      .#{$style}__text {
        color: $G5;
      }
    }
  }
  &__input {
    position: absolute;
    z-index: -1;
    visibility: hidden;
    opacity: 0;
    left: 4px;
    top: 2px;
    &:checked + .#{$style}__text {
      color: $N0;
    }
  }
  &__text {
    flex: 1;
    background-color: $dark;
    position: relative;
    z-index: 1;
    @include flex(center, center);
    @include text($H12, 500, $G4);
    @include transition(all);
  }
}
</style>
