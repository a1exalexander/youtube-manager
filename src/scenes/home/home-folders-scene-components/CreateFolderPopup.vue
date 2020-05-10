<template>
  <m-popup width="308px" :visible="visible" title="Create New Folder" @close="() => $emit('close')">
    <m-container contentClass="create-folder-popup" style="padding: 0;">
      <m-input
        v-model="value"
        label="Folder Name"
        placeholder="Give name to the folder"
        class="create-folder-popup__input"
      />
      <m-row jc="space-between" class="create-folder-popup__row">
        <span class="create-folder-popup__label">Video Catalog</span>
        <m-row>
          <m-subtle type="grey" label="Clear" class="create-folder-popup__btn" />
          <m-subtle label="Select All" />
        </m-row>
      </m-row>
      <a-select placeholder="Add videos to the folder from the list" class="create-folder-popup__select">
        <template #suffixIcon>
          <m-icon icon="drop-down" />
        </template>
        <a-select-option value="jack">All</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
    </m-container>
    <template #buttons>
      <m-button @click="() => $emit('close')" type="secondary">Cancel</m-button>
      <m-button @click="() => $emit('rename')">Create</m-button>
    </template>
  </m-popup>
</template>
<script>
export default {
  name: 'CreateFolderPopup',
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
.create-folder-popup {
  padding: 32px 24px;
  &__input {
    margin-bottom: 12px;
  }
  &__label {
    @extend %label;
  }
  &__btn {
    margin-right: 16px;
  }
  &__row {
    margin-bottom: 8px;
  }
  &__select {
    width: 100%;
  }
}
</style>
