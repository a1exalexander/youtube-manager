<template>
  <m-popup width="308px" :visible="visible" title="Create New Folder" @close="close">
    <m-container contentClass="folder-edit-popup" style="padding: 0;">
      <m-input
        v-model="name"
        label="Folder Name"
        placeholder="Give name to the folder"
        class="folder-edit-popup__input"
      />
      <m-row jc="space-between" class="folder-edit-popup__row">
        <span class="folder-edit-popup__label">Video Catalog</span>
        <m-row>
          <m-subtle
            @click="clean"
            :disabled="!selectedVideo"
            label="Clear"
            class="folder-edit-popup__btn"
          />
          <m-subtle @click="selectAll" label="Select All" />
        </m-row>
      </m-row>
      <a-select
        placeholder="Add videos to the folder from the list"
        class="folder-edit-popup__select"
        v-model="selectedVideo"
      >
        <template #suffixIcon>
          <m-icon icon="drop-down" />
        </template>
        <a-select-option value="all" key="all">All</a-select-option>
        <a-select-option
          :value="video.id"
          v-for="video in getVideoNames"
          :key="video.id"
        >{{video.name}}</a-select-option>
      </a-select>
    </m-container>
    <template #buttons>
      <m-button @click="close" type="secondary">Cancel</m-button>
      <m-button :disabled="disabled" :loading="loading" @click="submit">Create</m-button>
    </template>
  </m-popup>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import { CATALOG_FOLDERS_ADD } from '../../../store';

export default {
  name: 'FolderEditPopup',
  props: {
    visible: Boolean,
  },
  data() {
    return {
      name: '',
      selectedVideo: undefined,
      loading: false,
    };
  },
  computed: {
    ...mapGetters('catalog', ['getVideoNames']),
    disabled() {
      return !(this.name && this.selectedVideo);
    },
  },
  methods: {
    ...mapActions('catalog', [CATALOG_FOLDERS_ADD]),
    selectAll() {
      this.selectedVideo = 'all';
    },
    clean() {
      this.selectedVideo = undefined;
    },
    close() {
      this.$emit('close');
    },
    async submit() {
      this.loading = true;
      const { selectedVideo, name } = this;
      const videos = selectedVideo !== 'all' ? [selectedVideo] : this.getVideoNames.map(({ id }) => id);
      const ok = await this[CATALOG_FOLDERS_ADD]({ videos, name });
      this.loading = false;
      if (ok) this.close();
    },
  },
};
</script>
<style lang="scss">
.folder-edit-popup {
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
