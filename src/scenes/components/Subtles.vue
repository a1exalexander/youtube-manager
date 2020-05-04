<template>
  <section>
    <h2>Subtle</h2>
    <m-row wrap class="row">
      <m-subtle>Subtle</m-subtle>
      <m-subtle
        ><template #icon> <m-icon icon="search"/></template>Subtle icon left</m-subtle
      >
      <m-subtle
        ><template #icon-right> <m-icon icon="search"/></template>Subtle icon right</m-subtle
      >
      <m-subtle>
        <template #icon> <m-icon icon="profile"/></template>
        <template #icon-right> <m-icon icon="angle-down"/></template>
        Left right
      </m-subtle>
      <m-subtle disabled><template #icon> <m-icon icon="profile"/></template>Subtle disabled</m-subtle>
    </m-row>
    <m-row wrap class="row">
      <m-subtle type="grey">Subtle Grey</m-subtle>
      <m-subtle type="white">Subtle White</m-subtle>
    </m-row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
  props: {
    label: {
      type: String,
    },
    hover: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
    },
    type: {
      validator(value) {
        return ['primary', 'grey', 'white'].indexOf(value) !== -1;
      },
      default: 'primary',
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
