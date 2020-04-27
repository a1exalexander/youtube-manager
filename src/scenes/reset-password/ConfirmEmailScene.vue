<template>
  <m-col class="reset-password-confirm-email" ai='center'>
    <h2 class="reset-password-confirm-email__title">Thank You!</h2>
    <p class="reset-password-confirm-email__text">
      We have sent you an email to {{ 'user@gmeil.com' }} to reset your password.
    </p>
    <p class="reset-password-confirm-email__text">
      If you do not recieve letter in a few minutes, please, contact us or we can re-send it again.
    </p>
    <router-link class="reset-password-confirm-email__button" :to="{ name: 'Auth' }">
      <m-button fluid>Back to Login</m-button>
    </router-link>
    <m-subtle>Re-send</m-subtle>
  </m-col>
</template>
<script>
export default {
  name: 'ResetPasswordConfirmEmailScene',
  data() {
    return {
      email: '',
    };
  },
  computed: {
    disabled() {
      return !this.email;
    },
  },
};
</script>
<style lang="scss">
.reset-password-confirm-email {
  text-align: center;
  &__title {
    @include text($H18, 500);
    margin-bottom: 32px;
  }
  &__text {
    @include text($H12, 400, $G2);
    line-height: 1.3;
    text-align: center;
    margin-bottom: 20px;
    &:first-of-type {
      margin-bottom: 14px;
    }
  }
  &__button {
    width: 100%;
    margin-bottom: 20px;
  }
}
</style>
