<template>
  <m-popup width="308px" :zIndex="10000" :visible="visible" title="Rename Folder" @close="onClose">
    <m-container contentClass="edit-folder-popup" style="padding: 0;">
      <m-input v-model="value" class="edit-folder-popup__input" />
    </m-container>
    <template #buttons>
      <m-button @click="onClose" type="secondary">Cancel</m-button>
      <m-button @click="onEdit">Rename</m-button>
    </template>
  </m-popup>
</template>
<script>
export default {
  name: 'EditFolderPopup',
  props: {
    visible: Boolean,
    oldName: String,
  },
  data() {
    return {
      value: '',
    };
  },
  methods: {
    onEdit() {
      this.$emit('rename', this.value);
    },
    onClose() {
      this.$emit('close');
      this.value = '';
    },
  },
  created() {
    this.value = this.oldName;
  },
};
</script>
<style lang="scss">
.edit-folder-popup {
  padding: 32px 24px;
}
</style>
