<template>
  <div
    class="m-col"
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
  name: 'MCol',
  props: { ...props('column') },
};
</script>
<style lang="scss">
.m-col {
  display: flex;
}
</style>
