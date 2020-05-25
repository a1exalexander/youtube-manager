<template>
  <div class="home-table-item-cascader">
    <m-transition>
      <div class="home-table-item-cascader__popover" v-if="popoverSecond" @mousedown.stop>
        <m-col class="home-table-item-cascader__popover-inner">
          <m-subtle
            v-for="folder in folders"
            :key="folder.id"
            :label="folder.name"
            type="grey"
            class="home-table-item-cascader__popover-btn"
            @click="() => onSelectFolder(folder)"
          />
        </m-col>
        <footer class="home-table-item-cascader__popover-footer">
          <m-subtle
            icon="plus"
            label="Create New Folder"
            @click="showInput = true"
            v-if="!showInput"
          />
          <m-input v-model="name" v-if="showInput" placeholder="Folder Name">
            <m-subtle @click="saveFolder" label="Save" class="home-table-item-cascader__save" />
          </m-input>
        </footer>
      </div>
    </m-transition>
    <a-popover trigger="click" placement="leftTop" v-model="popoverFirst" @visibleChange="change">
      <template slot="content" class="home-table-item-cascader__drop-body">
        <m-col>
          <m-subtle
            @click="popoverSecond = !popoverSecond"
            type="white"
            label="Move to"
            class="home-table-item-cascader__btn"
            :class="{popover: popoverSecond}"
          >
            <template #icon-right>
              <m-icon icon="expand-right" />
            </template>
          </m-subtle>
          <m-subtle
            v-if="!selectedAllFolders"
            type="danger"
            label="Remove"
            class="home-table-item-cascader__btn _no-margin"
          />
        </m-col>
      </template>
      <m-subtle icon="action-vertical" type="grey" />
    </a-popover>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState } from 'vuex';
import { CATALOG_FOLDERS_EDIT } from '../../../store';

export default {
  name: 'HomeTableItemCascader',
  props: {
    usedFolders: Array,
    id: [Number, String],
  },
  data() {
    return {
      popoverSecond: false,
      popoverFirst: false,
      name: '',
      showInput: false,
    };
  },
  computed: {
    ...mapGetters('catalog', ['getUnusedFolders', 'getSelectedFolder']),
    ...mapState('catalog', ['selectedAllFolders']),
    folders() {
      return this.getUnusedFolders(this.usedFolders);
    },
  },
  methods: {
    ...mapActions('catalog', [CATALOG_FOLDERS_EDIT]),
    onSelectFolder(folder) {
      this[CATALOG_FOLDERS_EDIT]({ id: folder?.id, videos: [...folder?.videos, this.id] });
      if (!this.selectedAllFolders) {
        const oldVideos = [...this.getSelectedFolder?.videos];
        const idx = oldVideos.findIndex((id) => id === this.id);
        oldVideos.splice(idx, 1);
        this[CATALOG_FOLDERS_EDIT]({ id: this.getSelectedFolder?.id, videos: oldVideos });
      }
      this.$emit('popoverIsVisible');
      this.popoverFirst = false;
      this.popoverSecond = false;
    },
    hide() {
      this.popoverFirst = false;
      this.popoverSecond = false;
    },
    change() {
      this.$emit('popoverIsVisible');
      this.popoverSecond = false;
      this.showInput = false;
    },
    saveFolder() {
      this.folders.push(this.name);
      this.name = '';
    },
  },
};
</script>
<style lang="scss">
$styles: home-table-item-cascader;
.#{$styles} {
  position: relative;
  z-index: 100;
  &__drop-body {
    padding: 7px 0;
    @include flex-col(stretch, stretch);
  }
  &__btn {
    margin-bottom: 9px;
    padding: 6px 16px;
    &._no-margin {
      margin-bottom: 0;
      padding: 0 16px;
    }
    &.popover {
      background-color: $user-border;
    }
  }
  &__popover {
    min-width: 202px;
    background-color: $D1;
    box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.28);
    border-radius: 2px;
    position: absolute;
    left: -322px;
    top: 0;
    z-index: 100;
  }
  &__popover-inner {
    padding: 14px 16px;
  }
  &__popover-btn:not(:last-child) {
    margin-bottom: 16px;
  }
  &__popover-footer {
    padding: 10px 14px;
    border-top: 1px solid $G7;
    & .m-input__label {
      display: inline;
    }
  }
  &__save.m-subtle {
    position: absolute;
    right: 10px;
    bottom: 10px;
    z-index: 1;
  }
}
</style>
