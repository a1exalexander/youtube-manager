<template>
  <div class="home-table-item-cascader">
    <m-transition>
      <div class="home-table-item-cascader__popover" v-if="popoverSecond" @mousedown.stop>
        <m-col class="home-table-item-cascader__popover-inner" v-show="folders.length">
          <m-subtle
            v-for="folder in folders"
            :key="folder.id"
            :label="folder.name"
            type="grey"
            class="home-table-item-cascader__popover-btn"
            @click="() => onSelectFolder(folder)"
          />
        </m-col>
        <m-divider :offset="0" color="#373c54" v-show="folders.length" />
        <footer class="home-table-item-cascader__popover-footer">
          <m-input-wrapper v-if="showInput" class="home-table-item-cascader__input" key="input">
            <m-input v-model="name" placeholder="Folder Name" />
            <m-subtle @click="saveFolder" label="Save" class="home-table-item-cascader__save" />
          </m-input-wrapper>
          <m-subtle
            icon="plus"
            class="home-table-item-cascader__add-btn"
            label="Create New Folder"
            @click="showInput = true"
            key="button"
            v-else
          />
        </footer>
      </div>
    </m-transition>
    <a-popover trigger="click" placement="leftTop" v-model="popoverFirst" @visibleChange="change">
      <template slot="content" class="home-table-item-cascader__drop-body">
        <m-col>
          <m-subtle
            @click="popoverSecond = !popoverSecond"
            type="white"
            label="Copy to"
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
            class="home-table-item-cascader__btn _mt"
            @click="removeVideoFromFolder"
          />
        </m-col>
      </template>
      <m-subtle icon="action-vertical" type="grey" />
    </a-popover>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapState, mapMutations } from 'vuex';
import { FOLDERS_VIDEO_REMOVE, FOLDERS_ADD, FOLDERS_VIDEO_COPY, FOLDERS_SELECT } from '../../../store';

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
    ...mapGetters('folders', ['getUnusedFolders', 'getSelectedFolder']),
    ...mapState('folders', ['selectedAllFolders']),
    folders() {
      return this.getUnusedFolders(this.usedFolders);
    },
  },
  methods: {
    ...mapMutations('folders', [FOLDERS_SELECT]),
    ...mapActions('folders', [FOLDERS_VIDEO_COPY, FOLDERS_VIDEO_REMOVE, FOLDERS_ADD]),
    async onSelectFolder(folder) {
      this[FOLDERS_VIDEO_COPY]({ folder, id: this.id });
      this.hide();
    },
    hide() {
      this.name = '';
      this.popoverFirst = false;
      this.popoverSecond = false;
      this.$emit('hide');
    },
    change(value) {
      this.$emit(value ? 'show' : 'hide');
      this.popoverSecond = false;
      this.showInput = false;
    },
    async saveFolder() {
      const { name } = this;
      this.$message.loading({ content: 'A new folder is being created right now!', key: name });
      const ok = await this[FOLDERS_ADD]({ name, videos: [this.id] });
      if (ok) {
        this.$message.success({
          content: `Folder "${name}" added and video copied to this folder successfully!`,
          key: name,
          duration: 4,
        });
        this[FOLDERS_SELECT](ok?.id);
        this.hide();
      } else {
        this.$message.success({
          content: `Folder "${name}" not added. Please try again later!`,
          key: name,
          duration: 4,
        });
      }
    },
    removeVideoFromFolder() {
      this[FOLDERS_VIDEO_REMOVE](this.id);
      this.hide();
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
    padding: 4px 16px;
    &._mt {
      margin-top: 11px;
      padding: 0 16px 4px;
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
    margin-bottom: 6px;
  }
  &__popover-inner {
    padding: 13px 16px;
  }
  &__popover-btn:not(:last-child) {
    margin-bottom: 16px;
  }
  &__popover-footer {
    padding: 0 16px;
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
  &__input {
    margin: 12px 0;
  }
  &__add-btn {
    margin: 13px 0 11px;
  }
}
</style>
