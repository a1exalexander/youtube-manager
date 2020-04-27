<template>
  <m-col class="reset-password-finish">
    <h2 class="reset-password-finish__title">Password Changed!</h2>
    <p class="reset-password-finish__text">
      Your password has been successfully changed!
    </p>
    <router-link class="reset-password-finish__link" :to="{ name: 'Auth' }">
      <m-button fluid :disabled="disabled">Send</m-button>
    </router-link>
  </m-col>
</template>
<script>
export default {
  name: 'ResetPasswordFinish',
};
</script>
<style lang="scss">
.reset-password-finish {
  padding-top: 80px;
  padding-bottom:80px;
  &__title {
    @include text($H18, 500);
    margin-bottom: 32px;
  }
  &__text {
    @include text($H12, 400, $G2);
    line-height: 1.3;
    text-align: center;
    margin-bottom: 22px;
  }
  &__link {
    width: 100%;
  }
}
</style>
