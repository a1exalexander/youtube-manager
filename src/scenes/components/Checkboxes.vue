<template>
  <section>
    <h2>Checkbox</h2>
    <m-row class="row" wrap>
      <m-checkbox v-model="simple">{{ simple }}</m-checkbox>
    </m-row>
    <m-row class="row" wrap ai="center">
      <m-checkbox name="fruits" v-model="fruits" val="Apple">Apple</m-checkbox>
      <m-checkbox name="fruits" v-model="fruits" val="Raspberry"
        >Raspberry</m-checkbox
      >
      <m-checkbox name="fruits" v-model="fruits" val="Strawberry"
        >Strawberry</m-checkbox
      >
      <code>{{ fruits }}</code>
    </m-row>
    <br />
    <m-row class="row" wrap>
      <m-checkbox-button v-model="button">{{ button }}</m-checkbox-button>
    </m-row>
    <m-row class="row" wrap ai="center">
      <m-checkbox-button name="drive" v-model="drive" val="Bike"
        >Bike</m-checkbox-button
      >
      <m-checkbox-button name="drive" v-model="drive" val="Car"
        >Car</m-checkbox-button
      >
      <m-checkbox-button name="drive" v-model="drive" val="Jeep"
        >Jeep</m-checkbox-button
      >
      <code>{{ drive }}</code>
    </m-row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
props: {
  val: {
    type: [String, Boolean, Number],
  },
  name: {
    type: String,
  },
  value: {
    type: [Boolean, Array],
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
  name: 'Checkboxes',
  data() {
    return {
      simple: false,
      fruits: [],
      button: false,
      drive: [],
      visible: false,
    };
  },
};
</script>
