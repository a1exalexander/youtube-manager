<template>
  <section>
    <h2>Popconfirm</h2>
    <m-row wrap class="row">
      <button @click="popup = true">Open Popconfirm</button>
      <m-popconfirm title="Popconfirm" :visible="popup" @close="closePopup">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
        aspernatur?
      </m-popconfirm>
    </m-row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
props: {
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    default: '',
  },
  width: {
    type: String,
    default: '333px',
  },
  visible: {
    type: Boolean,
    default: false,
  },
  dangerLabel: {
    type: String,
    default: 'Delete',
  },
}
</pre
      >
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'Popconfirm',
  data() {
    return {
      visible: false,
      popup: false,
    };
  },
  methods: {
    closePopup() {
      this.popup = false;
    },
  },
};
</script>
<style lang="scss">
.fake-content-popup {
  padding: 20px 24px 24px;
}
</style>
