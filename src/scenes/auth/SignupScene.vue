<template>
  <div class="signup">
    <m-input autocomplete="new-password" class="signup__input" v-model="name">Full Name</m-input>
    <m-input autocomplete="new-password" class="signup__input" v-model="email" type="email">Email</m-input>
    <m-input autocomplete="new-password" class="signup__input" v-model="password" type="password">Password</m-input>
    <p class="signup__text">
      By clicking "Sign Up" you agree to our
      <m-subtle
        @mouseover="onHover"
        @mouseout="onLeave"
        @mouseup="onBlur"
        @mousedown="onActive"
        :active="linkStatus.active"
        :hover="linkStatus.hover"
        class="signup__subtle"
        >Terms of
      </m-subtle>
      <m-subtle
        @mouseover="onHover"
        @mouseout="onLeave"
        @mouseup="onBlur"
        @mousedown="onActive"
        :active="linkStatus.active"
        :hover="linkStatus.hover"
        class="signup__subtle"
        >Service</m-subtle
      >
      and <m-subtle class="signup__subtle">Privacy Policy</m-subtle>.
    </p>
    <m-button fluid :disabled="disabled" class="signup__signup-btn">Sign Up</m-button>
    <m-button fluid google type="secondary" class="signup__google-btn">Sign Up with Google</m-button>
  </div>
</template>
<script>
export default {
  name: 'Signup',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      linkStatus: {
        hover: false,
        active: false,
      },
    };
  },
  methods: {
    onHover() {
      this.linkStatus.hover = true;
    },
    onLeave() {
      this.linkStatus.hover = false;
    },
    onActive() {
      this.linkStatus.active = true;
    },
    onBlur() {
      this.linkStatus.active = false;
    },
  },
  computed: {
    disabled() {
      return !this.email || !this.password || !this.name;
    },
  },
};
</script>
<style lang="scss">
$style: signup;
.signup {
  &__input {
    margin-bottom: 20px;
  }
  &__text {
    @include text($H12, 400, $G2);
    margin-bottom: 18px;
    text-align: left;
    line-height: 1.4;
    @include word-wrap;
  }
  &__subtle {
    white-space: normal;
    flex-wrap: wrap;
    .m-subtle__text {
      font-weight: 700;
    }
  }
  &__signup-btn {
    margin-bottom: 20px;
  }
}
</style>
