<template>
  <section>
    <h2>Labels</h2>
    <m-row wrap class="row">
      <m-badge>Label</m-badge>
      <m-badge withIcon>Label whith icon</m-badge>
    </m-row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
props: {
    withIcon: {
      type: Boolean,
      default: false,
    },
  },
      </pre>
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'Labels',
  data() {
    return {
      visible: false,
    };
  },
};
</script>
