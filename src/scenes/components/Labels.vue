<template>
  <section>
    <h2>Labels</h2>
    <m-row wrap class="row">
      <m-label>Label</m-label>
      <m-label withIcon>Label whith icon</m-label>
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
