<template>
  <transition
    mode="out-in"
    enter-active-class="animated faster fadeIn"
    leave-active-class="animated faster fadeOut"
  >
    <settings-scene key="settings" v-if="navigation === 'settings'" @disableAccount="navigation = 'disable-account'" />
    <settings-disable-account-scene key="disable-acount" v-else @back="navigation = 'settings'"/>
  </transition>
</template>
<script>
import SettingsScene from '@/scenes/settings/SettingsScene.vue';
import SettingsDisableAccountScene from '@/scenes/settings/SettingsDisableAccountScene.vue';

export default {
  name: 'Settings',
  components: {
    SettingsScene,
    SettingsDisableAccountScene,
  },
  data() {
    return {
      navigation: 'settings',
    };
  },
};
</script>
