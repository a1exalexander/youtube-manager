<template>
  <div
    class="m-row"
    :style="{
      justifyContent: jc,
      alignItems: ai,
      alignContent: ac,
      flexDirection: direction,
      flexWrap: wrap ? 'wrap' : 'no-wrap',
    }"
  >
    <slot />
  </div>
</template>
<script>
import { props } from './props';

export default {
  name: 'MRow',
  props: { ...props() },
};
</script>
<style lang="scss">
.m-row {
  display: flex;
}
</style>
