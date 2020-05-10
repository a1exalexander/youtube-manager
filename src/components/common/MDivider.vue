<template>
  <span class="divider" :class="[{ _vertical: vertical }]" />
</template>
<script>
export default {
  name: 'Divider',
  props: {
    vertical: {
      type: Boolean,
      defaul: false,
    },
  },
};
</script>
<style lang="scss">
.divider {
  flex-shrink: 0;
  display: block;
  background-color: $G8;
  height: 1px;
  margin: 20px 0;
  padding: 0;
  &._vertical {
    flex-shrink: 0;
    height: 100%;
    margin: 0 12px;
    width: 1px;
    align-self: stretch;
  }
}
</style>
