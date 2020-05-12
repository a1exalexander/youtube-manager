<template>
  <div class="folder-item">
    <label class="folder-item__radio">
      <input type="radio" class="folder-item__input" :name="name" :value="val" v-model="checked" />
      <div class="folder-item__inner">
        <m-icon icon="folder-empty" class="folder-item__folder-icon" />
        <span v-if="!!$slots.default || !!label" class="folder-item__text">
          <slot>{{ label }}</slot>
        </span>
      </div>
    </label>
    <a-popover trigger="hover" placement="bottomLeft">
      <template slot="content">
        <m-col class="folder-item__drop">
          <m-subtle type="white" class="folder-item__drop-btn" @click="() => $emit('rename')">
            Rename
            <template #icon>
              <m-icon icon="edit" />
            </template>
          </m-subtle>
          <m-subtle type="danger" class="folder-item__drop-btn" @click="() => $emit('delete')">
            Delete
            <template #icon>
              <m-icon icon="trash" />
            </template>
          </m-subtle>
        </m-col>
      </template>
      <span class="folder-item__checkbox-drop-btn">
        <m-icon icon="action-horizontal" class="folder-item__dots" />
      </span>
    </a-popover>
  </div>
</template>
<script>
export default {
  name: 'FolderItem',
  props: {
    val: {
      type: [String, Number, Boolean],
    },
    name: {
      type: String,
    },
    value: {
      type: [String, Number, Boolean],
    },
    label: {
      type: String,
    },
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set() {
        this.$emit('input', this.val);
      },
    },
  },
};
</script>
<style lang="scss">
$styles: folder-item;
.#{$styles} {
  @include flex-row(stretch, stretch);
  height: 34px;
  background: $D4;
  box-shadow: 0 4px 11px 0 rgba(0, 0, 0, 0.28);
  border-radius: 2px;
  &__radio {
    @include flex-row(stretch, stretch);
  }
  &__input {
    display: none;
    &:checked + .#{$styles}__inner {
      background-color: $D1;
      .#{$styles}__text {
        color: $N0;
      }
      .#{$styles}__folder-icon {
        fill: $N0;
      }
    }
  }
  &__inner {
    @include flex-row(center, center);
    padding: 0 10px;
    border-right: 1px solid $user-border;
    cursor: pointer;
  }
  &__folder-icon {
    @include svg(14px, $G2);
    margin-right: 6px;
  }
  &__text {
    @include text($H12, 400, $G2);
  }
  &__checkbox-drop-btn {
    @include flex-row(center, center);
    background-color: $D4;
    padding: 0 10px;
    border: 1px solid transparent;
    cursor: pointer;
    border-radius: 0 2px 2px 0;
    @include transition(border-color);
    &.ant-popover-open {
      border-color: $I5;
    }
  }
  &__dots {
    @include svg(14px, $G2);
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
}
</style>
