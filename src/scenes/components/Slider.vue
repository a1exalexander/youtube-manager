<template>
  <section>
    <h2>Slider</h2>
    <m-row wrap class="row">
      <m-slider-tabs :tabs="tabs" v-model="opened" />
      <div v-if="opened === 0">
        <h2>First tab</h2>
      </div>
      <div v-if="opened === 1">
        <h2>Second tab</h2>
      </div>
    </m-row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
props: {
  value: [String, Number],
  tabs: {
    type: Array,
    default() {
      return [];
    },
  },
},
      </pre>
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'Slider',
  data() {
    return {
      tabs: ['First tab', 'Second tab'],
      opened: 0,
      visible: false,
    };
  },
};
</script>
