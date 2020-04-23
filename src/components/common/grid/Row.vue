<template>
  <div
    class="ms-row"
    :style="{
      justifyContent: jc,
      alignItems: ai,
      alignContent: ac,
      flexDirection: d,
      flexWrap: wrap ? 'wrap' : 'no-wrap',
    }"
  >
    <slot />
  </div>
</template>
<script>
import { props } from './props';

export default {
  name: 'Row',
  props: { ...props() },
};
</script>
<style lang="scss">
.ms-row {
  display: flex;
}
</style>
