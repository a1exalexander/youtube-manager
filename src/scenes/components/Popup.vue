<template>
  <section>
    <h2>Popup</h2>
    <m-row wrap class="row">
      <button @click="popup = true">Open Popup</button>
      <m-popup title="Popup" :visible="popup" @close="closePopup">
        <div class="fake-content-popup">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt,
          aspernatur?
        </div>
        <template #buttons>
          <m-button type="secondary" @click="closePopup">Cancel</m-button>
          <m-button>Submit</m-button>
        </template>
      </m-popup>
    </m-row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
props: {
  title: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    default: '333px',
  },
  visible: {
    type: Boolean,
    default: false,
  },
}</pre
      >
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'Popup',
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
