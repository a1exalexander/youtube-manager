<template>
  <m-popup
    width='412px'
    :visible="visible"
    title="Export"
    @close="() => $emit('close')"
  >
    <m-container contentClass="home-export-popup">
      <m-radio
        v-model="all"
        :val='true'
      >All Data</m-radio>
      <m-divider />
      <m-row wrap>
        <m-checkbox
          name='export'
          v-model='checked'
          :val='input.name'
          class="home-export-popup__checkbox"
          v-for='input in inputs'
          :key='input.name'
        >{{input.name}}</m-checkbox>
      </m-row>
    </m-container>
    <template #buttons>
      <m-button
        @click="() => $emit('close')"
        type='secondary'
      >Cancel</m-button>
      <m-button @click="() => $emit('submit')">Export</m-button>
    </template>
  </m-popup>
</template>
<script>
export default {
  name: 'HomeExportPopup',
  props: {
    visible: Boolean,
  },
  data() {
    return {
      inputs: [
        { name: 'List of Past Sponsorship' },
        { name: 'Production Cost' },
        { name: 'Views' },
        { name: 'ROI' },
        { name: 'Likes' },
        { name: 'Watch Time' },
        { name: 'Dislikes' },
        { name: 'Watch Time Ratio' },
        { name: 'Comments' },
        { name: 'Click Through Rate' },
        { name: 'Engagement Ratio' },
        { name: 'Ad Revenue' },
      ],
      all: true,
      checked: [],
    };
  },
  watch: {
    async all(value) {
      await this.$nextTick();
      if (value) this.checked = [];
    },
    async checked(values) {
      const { length } = values;
      const isEmpty = !length;
      const isFull = length === this.inputs.length;
      await this.$nextTick();
      this.all = isEmpty || isFull;
    },
  },
};
</script>
<style lang="scss">
$style: home-export-popup;
.#{$style} {
  padding-top: 20px;
  padding-bottom: 10px;
  &__checkbox {
    max-width: 100% !important;
    margin-bottom: 12px;
    &:nth-of-type(odd) {
      flex: 1 1 60%;
    }
    &:nth-of-type(even) {
      flex: 1 1 40%;
    }
  }
}
</style>
