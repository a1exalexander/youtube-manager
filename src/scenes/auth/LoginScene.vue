<template>
  <m-col class="login">
    <m-input type="email" class="login__input" v-model="email">Email</m-input>
    <m-input type="password" class="login__input" v-model="password">Password</m-input>
    <router-link class="login__reset-btn" :to="{ name: 'ResetPassword' }">
      <m-subtle>Reset password</m-subtle>
    </router-link>
    <m-button fluid :disabled="disabled" class="login__login-btn">Login</m-button>
    <m-button fluid google type="secondary" class="login__google-btn">Login with Google</m-button>
  </m-col>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  computed: {
    disabled() {
      return !this.email || !this.password;
    },
  },
};
</script>
<style lang="scss">
.login {
  &__input {
    margin-bottom: 20px;
  }
  &__reset-btn {
    align-self: flex-end;
    margin-bottom: 20px;
  }
  &__login-btn {
    margin-bottom: 20px;
  }
}
</style>
