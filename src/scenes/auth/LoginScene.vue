<template>
  <form @submit.prevent='submit'>
    <m-col class="login">
      <m-input
        type="email"
        v-model="email"
        class="login__input"
        :error="!isValid.email"
        :message='vErrors.email'
        @blur="vBlur.email"
      >Email</m-input>
      <m-input
        type="password"
        class="login__input"
        v-model="password"
        :error="!isValid.password"
        :message='vErrors.password'
        @blur="vBlur.password"
      >Password</m-input>
      <router-link
        class="login__reset-btn"
        :to="{ name: 'ResetPassword' }"
      >
        <m-subtle>Reset password</m-subtle>
      </router-link>
      <m-button
        fluid
        :loading='loading'
        :disabled="disabled"
        class="login__login-btn"
      >Login</m-button>
      <m-button
        fluid
        google
        type="secondary"
        class="login__google-btn"
        @click.stop
      >Login with Google</m-button>
    </m-col>
  </form>
</template>
<script>
import { useValidation } from '../../services';

export default {
  name: 'Login',
  setup() {
    const options = {
      required: ['email', 'password'],
    };
    const {
      isValid, vErrors, email, password, vBlur,
    } = useValidation(options);
    return {
      isValid, vErrors, email, password, vBlur,
    };
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      setTimeout(() => { this.loading = false; }, 1500);
    },
  },
  computed: {
    disabled() {
      const { email, password, isValid } = this;
      return [!email, !isValid.email, !isValid.password, !password].includes(true);
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
