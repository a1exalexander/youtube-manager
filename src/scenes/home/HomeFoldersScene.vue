<template>
  <m-container class="home-folders-scene">
    <m-popconfirm
      :visible="visible.delete"
      title="Delete Folder?"
      width="340px"
      text="Are you sure that you want to delete folder Couch from the Video Catalog? All videos will be still available in the catalog."
      @close="() => hide('delete')"
      @danger-action="() => hide('delete')"
    />
    <edit-folder-popup :visible="visible.rename" @close="() => hide('rename')" @rename="() => hide('rename')"/>
    <create-folder-popup :visible="visible.create" @close="() => hide('create')" @create="() => hide('create')"/>
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
      <a-popover trigger="hover" placement="bottomLeft">
        <template slot="content">
          <m-col class="home-folders-scene__drop">
            <m-subtle type="white" class="home-folders-scene__drop-btn">Last Modified</m-subtle>
            <m-subtle type="grey" class="home-folders-scene__drop-btn">Name</m-subtle>
          </m-col>
        </template>
        <m-subtle>
          Last Modified
          <template #icon-right>
            <m-icon icon="angle-down" />
          </template>
        </m-subtle>
      </a-popover>
    </m-row>
    <m-row ai="flex-start">
      <m-checkbox-button v-model="all">All</m-checkbox-button>
      <m-divider horizontal style="height: 34px" />
      <m-row wrap>
        <folder-item
          name="folders"
          label="first"
          val="first"
          v-model="folders"
          class="home-folders-scene__folder-item"
          @delete="() => show('delete')"
          @rename="() => show('rename')"
        />
      </m-row>
    </m-row>
  </m-container>
</template>
<script>
import FolderItem from './home-folders-scene-components/FolderItem.vue';
import EditFolderPopup from './home-folders-scene-components/EditFolderPopup.vue';
import CreateFolderPopup from './home-folders-scene-components/CreateFolderPopup.vue';

export default {
  name: 'HomeFoldersScene',
  components: {
    FolderItem,
    EditFolderPopup,
    CreateFolderPopup,
  },
  data() {
    return {
      all: false,
      folders: '',
      visible: {
        delete: false,
        rename: false,
        create: false,
      },
    };
  },
  methods: {
    show(name) {
      if (name in this.visible) this.visible[name] = true;
    },
    hide(name) {
      if (name in this.visible) this.visible[name] = false;
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
}
</style>
