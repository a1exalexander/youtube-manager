<template>
  <section>
    <h2>Button</h2>
    <row wrap class="row">
      <m-button>Primary</m-button>
      <m-button loading>Primary</m-button>
      <m-button
        ><template #icon><m-icon icon="search"/></template>Primary
        Icon</m-button
      >
      <m-button google>Primary Google</m-button>
      <m-button disabled>Primary</m-button>
    </row>
    <row wrap class="row">
      <m-button type="secondary">Secondary</m-button>
      <m-button type="secondary" loading>Secondary</m-button>
      <m-button type="secondary"
        ><template #icon><m-icon icon="search"/></template>Secondary</m-button
      >
      <m-button type="secondary" google>Secondary google</m-button>
    </row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
  props: {
    type: {
      validator(value) {
        return ['primary', 'secondary'].indexOf(value) !== -1;
      },
      default: 'primary',
    },
    fluid: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    google: {
      type: Boolean,
      default: false,
    },
  },
        </pre
      >
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'Buttons',
  data() {
    return {
      visible: false,
    };
  },
};
</script>
