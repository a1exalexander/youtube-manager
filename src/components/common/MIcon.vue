<template>
  <component :is="getIcon"></component>
</template>
<script>
const getName = (name) => `icon-${name}`;
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'search',
    },
  },
  components: {
    [getName('search')]: () => import('../icons/IconSearch.vue'),
    [getName('check')]: () => import('../icons/IconCheck.vue'),
    [getName('close')]: () => import('../icons/IconClose.vue'),
    [getName('drop-down')]: () => import('../icons/IconDropDown.vue'),
    [getName('visibility-on')]: () => import('../icons/IconVisibilityOn.vue'),
    [getName('visibility-off')]: () => import('../icons/IconVisibilityOff.vue'),
    [getName('photo')]: () => import('../icons/IconPhoto.vue'),
    [getName('user')]: () => import('../icons/IconUser.vue'),
    [getName('back')]: () => import('../icons/IconBack.vue'),
    [getName('ad')]: () => import('../icons/IconAD.vue'),
    [getName('profile')]: () => import('../icons/IconProfile.vue'),
    [getName('angle-down')]: () => import('../icons/IconAngleDown.vue'),
    [getName('video')]: () => import('../icons/IconVideo.vue'),
    [getName('settings')]: () => import('../icons/IconSettings.vue'),
    [getName('team')]: () => import('../icons/IconTeam.vue'),
    [getName('link')]: () => import('../icons/IconLink.vue'),
    [getName('components')]: () => import('../icons/IconComponents.vue'),
    [getName('exit')]: () => import('../icons/IconExit.vue'),
    [getName('plus')]: () => import('../icons/IconPlus.vue'),
    [getName('play')]: () => import('../icons/IconPlay.vue'),
    [getName('download')]: () => import('../icons/IconDownload.vue'),
    [getName('trash')]: () => import('../icons/IconTrash.vue'),
    [getName('arrow-up')]: () => import('../icons/IconArrowUp.vue'),
    [getName('folder-empty')]: () => import('../icons/IconFolderEmpty.vue'),
    [getName('action-horizontal')]: () => import('../icons/IconActionHorizontal.vue'),
    [getName('edit')]: () => import('../icons/IconEdit.vue'),
    [getName('time')]: () => import('../icons/IconTime.vue'),
    [getName('upload')]: () => import('../icons/IconUpload.vue'),
  },
  computed: {
    getIcon() {
      return getName(this.icon);
    },
  },
};
</script>
