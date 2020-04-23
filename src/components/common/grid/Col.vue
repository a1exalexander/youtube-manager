<template>
  <div
    class="ms-col"
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
  name: 'Col',
  props: { ...props('column') },
};
</script>
<style lang="scss">
.ms-col {
  display: flex;
}
</style>
