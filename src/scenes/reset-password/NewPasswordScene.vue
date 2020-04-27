<template>
  <m-col class="reset-password-new">
    <h2 class="reset-password-new__title">Create New Passowrd</h2>
    <m-input class="reset-password-new__input" v-model="password" type="password">New Password</m-input>
    <m-input class="reset-password-new__input" v-model="newPassword" type="password">Confirm New PAssword</m-input>
    <m-button class="reset-password-new__button" :disabled="disabled">Change Password</m-button>
    <router-link class="reset-password-new__link" :to="{ name: 'Auth' }">
      <m-subtle>Back to Login</m-subtle>
    </router-link>
  </m-col>
</template>
<script>
export default {
  name: 'ResetPasswordNew',
  data() {
    return {
      password: '',
      newPassword: '',
    };
  },
  computed: {
    disabled() {
      return !this.password && !(this.password === this.newPassword);
    },
  },
};
</script>
<style lang="scss">
.reset-password-new {
  &__title {
    @include text($H18, 500);
    margin-bottom: 34px;
  }
  &__input {
    margin-bottom: 20px;
  }
  &__button {
    margin-bottom: 20px;
  }
}
</style>
