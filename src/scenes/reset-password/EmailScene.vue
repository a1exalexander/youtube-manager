<template>
  <m-col class="reset-password-email">
    <h2 class="reset-password-email__title">Reset Password</h2>
    <p class="reset-password-email__text">
      Specify the email addres used to register so that we can send you an email with a password reset
    </p>
    <m-input class="reset-password-email__input" v-model="email" type="email">Email</m-input>
    <m-button class="reset-password-email__button" :disabled="disabled">Send</m-button>
    <router-link class="reset-password-email__link" :to="{ name: 'Auth' }">
      <m-subtle>Back to Login</m-subtle>
    </router-link>
  </m-col>
</template>
<script>
export default {
  name: 'ResetPasswordEmailScene',
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
.reset-password-email {
  &__title {
    @include text($H18, 500);
    margin-bottom: 32px;
  }
  &__text {
    @include text($H12, 400, $G2);
    line-height: 1.3;
    text-align: center;
    margin-bottom: 24px;
  }
  &__input {
    margin-bottom: 20px;
  }
  &__button {
    margin-bottom: 20px;
  }
}
</style>
