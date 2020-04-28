<template>
  <section>
    <h2>Radio Buttons</h2>
    <m-row wrap class="row">
      <m-radio name="radios" val="first" :value="selectedValue" @change="changeValue" />
      <m-radio name="radios" val="second" :value="selectedValue" @change="changeValue" />
      <m-radio name="radios" val="third" :value="selectedValue" @change="changeValue" />
      <code>{{ selectedValue }}</code>
    </m-row>
    <m-row wrap class="row">
      <m-radio
        name="radiosLabeled"
        val="first"
        label="first"
        :value="selectedValueLabeled"
        @change="changeValueLabeled"
      />
      <m-radio
        name="radiosLabeled"
        val="second"
        label="second"
        :value="selectedValueLabeled"
        @change="changeValueLabeled"
      />
      <m-radio
        name="radiosLabeled"
        val="third"
        label="third"
        :value="selectedValueLabeled"
        @change="changeValueLabeled"
      />
      <code>{{ selectedValueLabeled }}</code>
    </m-row>
    <button @click="visible = !visible">Props</button>
    <m-accordion>
      <pre v-if="visible">
props: {
  val: {
    type: String,
  },
  name: {
    type: String,
  },
  value: {
    type: String,
  },
  label: {
    type: String,
  },
},
      </pre>
    </m-accordion>
  </section>
</template>
<script>
export default {
  name: 'RadioButtons',
  data() {
    return {
      selectedValue: 'first',
      selectedValueLabeled: 'first',
      visible: false,
    };
  },
  methods: {
    changeValue(newValue) {
      this.selectedValue = newValue;
    },
    changeValueLabeled(newValue) {
      this.selectedValueLabeled = newValue;
    },
  },
};
</script>
