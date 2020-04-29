<template>
  <component :is="icon"></component>
</template>
<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'search',
    },
  },
  components: {
    search: () => import('../icons/IconSearch.vue'),
    check: () => import('../icons/IconCheck.vue'),
    close: () => import('../icons/IconClose.vue'),
    dropDown: () => import('../icons/IconDropDown.vue'),
    visibilityOn: () => import('../icons/IconVisibilityOn.vue'),
    visibilityOff: () => import('../icons/IconVisibilityOff.vue'),
    photo: () => import('../icons/IconPhoto.vue'),
    user: () => import('../icons/IconUser.vue'),
    back: () => import('../icons/IconBack.vue'),
    ad: () => import('../icons/IconAD.vue'),
  },
};
</script>
