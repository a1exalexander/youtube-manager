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
    search: () => import(`./IconSearch.vue`),
  },
};
</script>
