<template>
  <m-container center width='884px'>
    <m-transition>
      <settings-scene key="settings" v-if="navigation === 'settings'" @disableAccount="navigation = 'disable-account'" />
      <settings-disable-account-scene key="disable-account" v-else @back="navigation = 'settings'"/>
    </m-transition>
  </m-container>
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
