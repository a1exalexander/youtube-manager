<template>
  <section>
    <h2>Input</h2>
    <row class="row" wrap>
      <m-input placeholder="Placeholder" v-model="input.default">Label</m-input>
      <m-input
        placeholder="Placeholder success"
        v-model="input.success"
        status="success"
        >Success</m-input
      >
      <m-input
        placeholder="Placeholder warning"
        v-model="input.warning"
        status="warning"
        >Warning</m-input
      >
      <m-input
        placeholder="Placeholder error"
        v-model="input.danger"
        status="danger"
        >Danger</m-input
      >
    </row>
    <pre>{{ input }}</pre>
    <br />
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
props: {
  label: {
    type: String,
    default: '', // or by slot
  },
  type: {
    type: String,
    default: 'text',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  status: {
    validator(value) {
      return ['default', 'success', 'warning', 'danger'].indexOf(value) !== -1;
    },
    default: 'default',
  },
  value: {
    type: [String, Number],
    required: true,
  },
  placeholder: {
    type: String,
    default: 'text',
  },
},
      </pre>
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'Inputs',
  data() {
    return {
      input: {
        default: '',
        success: '',
        warning: '',
        danger: '',
      },
      visible: false,
    };
  },
};
</script>
