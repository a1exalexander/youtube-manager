<template>
  <section>
    <h2>Subtle</h2>
    <row wrap class="row">
      <m-subtle>Subtle</m-subtle>
      <m-subtle
        ><template #icon><icon icon="search"/></template>Subtle icon
        left</m-subtle
      >
      <m-subtle position="right"
        ><template #icon><icon icon="search"/></template>Subtle icon
        right</m-subtle
      >
      <m-subtle disabled>Subtle disabled</m-subtle>
    </row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    position: {
      validator(value) {
        return ['left', 'right'].indexOf(value) !== -1;
      },
      default: 'left',
    },
    label: {
      type: String,
    },
  }
      </pre>
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'Subtles',
  data() {
    return {
      visible: false,
    };
  },
};
</script>
