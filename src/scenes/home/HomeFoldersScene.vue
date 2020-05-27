<template>
  <m-container class="home-folders-scene">
    <m-popconfirm
      :visible="visible.delete"
      title="Delete Folder?"
      width="340px"
      :zIndex="10000"
      text="Are you sure that you want to delete folder Couch from the Video Catalog? All videos will be still available in the catalog."
      @close="hideDeletePopup"
      @danger-action="onDeleteFolder"
    />
    <folder-edit-popup
      v-if="visible.rename"
      :old-name="oldName"
      :visible="visible.rename"
      @close="hideEditPopup"
      @rename="onEditFolder"
    />
    <folder-create-popup
      v-if="visible.create"
      :visible="visible.create"
      @close="() => hide('create')"
    />
    <m-row jc="space-between" ai="center">
      <m-row ai="center" class="home-folders-scene__head">
        <h4 class="home-folders-scene__title">Folders</h4>
        <m-subtle @click="() => show('create')">
          Create New
          <template #icon>
            <m-icon icon="plus" />
          </template>
        </m-subtle>
      </m-row>
      <m-transition>
        <a-popover v-if="hasFolders" trigger="hover" placement="bottomRight">
          <template #content>
            <m-select-item
              v-model="sortedModel"
              val="last_modified"
              key="last_modified"
            >Last Modified</m-select-item>
            <m-select-item v-model="sortedModel" val="name" key="name">Name</m-select-item>
          </template>
          <m-subtle>
            {{getSortType}}
            <template #icon-right>
              <m-icon icon="angle-down" />
            </template>
          </m-subtle>
        </a-popover>
      </m-transition>
    </m-row>
    <m-row ai="flex-start">
      <m-checkbox-button toggle v-model="selectedAllFoldersModel">All</m-checkbox-button>
      <m-divider horizontal style="height: 34px" />
      <transition-group class="home-folders-scene__folders-list" name="list-complete" tag="ul">
        <folder-item
          name="folders"
          :label="folder.name"
          :val="folder.id"
          v-model="selectedFolderModel"
          class="home-folders-scene__folder-item list-complete-item"
          @delete="showDeletePopup"
          @rename="showEditPopup"
          v-for="folder in getFolders"
          :key="folder.id"
        />
      </transition-group>
    </m-row>
  </m-container>
</template>
<script>
import { mapGetters, mapMutations, mapState, mapActions } from 'vuex';
import { FOLDERS_SELECT, FOLDERS_SELECT_ALL, FOLDERS_REMOVE, FOLDERS_EDIT, FOLDERS_SORTED_SET } from '../../store';
import FolderItem from './folders/FolderItem.vue';
import FolderEditPopup from './folders/FolderEditPopup.vue';
import FolderCreatePopup from './folders/FolderCreatePopup.vue';

export default {
  name: 'HomeFoldersScene',
  components: {
    FolderItem,
    FolderEditPopup,
    FolderCreatePopup,
  },
  data() {
    return {
      selectedFolderId: null,
      oldName: '',
      visible: {
        delete: false,
        rename: false,
        create: false,
      },
    };
  },
  computed: {
    ...mapGetters('folders', ['getFolders', 'hasFolders', 'getSortType']),
    ...mapState('folders', ['selectedFolder', 'selectedAllFolders', 'sortFoldersBy']),
    sortedModel: {
      get() {
        return this.sortFoldersBy;
      },
      set(e) {
        this[FOLDERS_SORTED_SET](e);
      },
    },
    selectedFolderModel: {
      get() {
        return this.selectedFolder;
      },
      set(e) {
        this[FOLDERS_SELECT](e);
      },
    },
    selectedAllFoldersModel: {
      get() {
        return this.selectedAllFolders;
      },
      set(e) {
        this[FOLDERS_SELECT_ALL](e);
      },
    },
  },
  methods: {
    ...mapMutations('folders', [FOLDERS_SELECT, FOLDERS_SELECT_ALL, FOLDERS_SORTED_SET]),
    ...mapActions('folders', [FOLDERS_REMOVE, FOLDERS_EDIT]),
    hideDeletePopup() {
      this.selectedFolderId = null;
      this.hide('delete');
    },
    showDeletePopup(id) {
      this.selectedFolderId = id;
      this.show('delete');
    },
    onDeleteFolder() {
      const { selectedFolderId } = this;
      this[FOLDERS_REMOVE](selectedFolderId);
      this.hideDeletePopup();
    },
    hideEditPopup() {
      this.selectedFolderId = null;
      this.oldName = '';
      this.hide('rename');
    },
    showEditPopup({ id, name }) {
      this.selectedFolderId = id;
      this.oldName = name;
      this.show('rename');
    },
    onEditFolder(name) {
      const { selectedFolderId } = this;
      const successMsg = `Folder "${this.oldName}" renamed to "${name}" successfully!`;
      const errorMsg = `Folder "${this.oldName}" not renamed to "${name}". Please try again later!`;
      this[FOLDERS_EDIT]({ payload: { id: selectedFolderId, name }, successMsg, errorMsg });
      this.hideEditPopup();
    },
    show(name) {
      if (name in this.visible) this.visible[name] = true;
    },
    hide(name) {
      if (name in this.visible) this.visible[name] = false;
    },
  },
  watch: {
    selectedFolder(val) {
      if (val && this.selectedAllFolders) {
        this[FOLDERS_SELECT_ALL](false);
      }
    },
    selectedAllFolders(val) {
      if (val && this.selectedFolder) {
        this[FOLDERS_SELECT](null);
      }
    },
  },
};
</script>
<style lang="scss">
$styles: home-folders-scene;
.#{$styles} {
  padding-bottom: 12px;
  &__head {
    margin-bottom: 16px;
  }
  &__title {
    @include text($H12, 500, $G2);
    margin-right: 12px;
  }
  &__drop {
    padding: 10px 16px;
  }
  &__drop-btn {
    margin-bottom: 10px;
    &.m-subtle {
      align-self: flex-start;
    }
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__folder-item {
    margin-right: 12px;
    margin-bottom: 12px;
  }
  &__folders-list {
    @include flex;
    flex-wrap: wrap;
  }
}
</style>
