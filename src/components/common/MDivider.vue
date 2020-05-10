<template>
  <span class="divider" :class="[{ _horizontal: horizontal }]" :style="[{backgroundColor: color}, getOffset]" />
</template>
<script>
export default {
  name: 'Divider',
  props: {
    vertical: {
      type: Boolean,
      defaul: false,
    },
    color: {
      type: String,
      default: '#25293b',
    },
    offset: Number,
  },
  computed: {
    getOffset() {
      const offset = `${this.offset}px`;
      if (this.offset || (this.offset === 0 && !this.horizontal)) {
        return { marginTop: offset, marginBottom: offset };
      }
      if (this.offset || (this.offset === 0 && this.horizontal)) {
        return { marginLeft: offset, marginRight: offset };
      }
      return null;
    },
  },
};
</script>
<style lang="scss">
.divider {
  flex-shrink: 0;
  display: block;
  height: 1px;
  margin: 20px 0;
  padding: 0;
  &._vertical {
    flex-shrink: 0;
    height: 100%;
    margin: 0 12px;
    width: 1px;
    align-self: stretch;
  }
}
</style>
