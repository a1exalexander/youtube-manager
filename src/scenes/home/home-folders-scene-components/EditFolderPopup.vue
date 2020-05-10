<template>
  <m-popup width="308px" :visible="visible" title="Rename Folder" @close="() => $emit('close')">
    <m-container contentClass="edit-folder-popup" style="padding: 0;">
      <m-input v-model="value" class="edit-folder-popup__input"/>
    </m-container>
    <template #buttons>
      <m-button @click="() => $emit('close')" type="secondary">Cancel</m-button>
      <m-button @click="() => $emit('rename')">Rename</m-button>
    </template>
  </m-popup>
</template>
<script>
export default {
  name: 'EditFolderPopup',
  props: {
    visible: Boolean,
  },
  data() {
    return {
      value: '',
    };
  },
};
</script>
<style lang="scss">
 .edit-folder-popup {
   padding: 32px 24px;
 }
</style>
