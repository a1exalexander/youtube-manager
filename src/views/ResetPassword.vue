<template>
  <auth-scene class="reset-password">
    <m-transition>
      <email-scene key="email" v-if="scene === 1" />
      <confirm-email-scene key="confirm" v-else-if="scene === 2" />
      <new-password-scene key="new" v-else-if="scene === 3" />
      <finish-scene key="finish" v-else />
    </m-transition>
  </auth-scene>
</template>
<script>
import AuthScene from '@/scenes/auth/AuthScene.vue';
import EmailScene from '@/scenes/reset-password/EmailScene.vue';
import ConfirmEmailScene from '@/scenes/reset-password/ConfirmEmailScene.vue';
import NewPasswordScene from '@/scenes/reset-password/NewPasswordScene.vue';
import FinishScene from '@/scenes/reset-password/FinishScene.vue';

export default {
  name: 'ResetPasswordView',
  components: {
    EmailScene,
    AuthScene,
    ConfirmEmailScene,
    NewPasswordScene,
    FinishScene,
  },
  data() {
    return {
      scene: 1,
    };
  },
};
</script>
