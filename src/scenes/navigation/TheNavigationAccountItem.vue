<template>
  <label class="the-navigation-account-item">
    <input class="the-navigation-account-item__input" type="radio" :value="val" :name="name" v-model="checked" />
    <span class="the-navigation-account-item__content">
      <span class="the-navigation-account-item__email">{{ account && account.email }}</span>
      <span class="the-navigation-account-item__row">
        <m-avatar :src="account && account.image" class="the-navigation-account-item__avatar" />
        <span class="the-navigation-account-item__name">{{ account && account.name }}</span>
        <m-icon class="the-navigation-account-item__icon animated fast bounceIn" icon="check" />
      </span>
    </span>
  </label>
</template>
<script>
export default {
  name: 'TheNavigationAccountItem',
  props: {
    name: {
      type: String,
    },
    value: {
      type: [Boolean, String, Number],
    },
    val: {
      type: [Boolean, String, Number],
    },
    account: {
      type: Object,
      required: true,
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
$style: the-navigation-account-item;
.#{$style} {
  display: block;
  position: relative;
  padding: 0;
  cursor: pointer;
  @include transition(all);
  border-bottom: 1px solid $G7;
  &:last-of-type {
    margin-bottom: 9px;
  }
  &:first-of-type {
    .#{$style}__content {
      padding: 4px 16px 13px;
    }
  }
  @include media {
    &:hover {
      .#{$style}__name {
        color: $N0;
      }
      border-color: $G6;
    }
  }
  &__input {
    position: absolute;
    visibility: hidden;
    z-index: -1;
    opacity: 0;
    left: 4px;
    top: 4px;
    &:checked + .#{$style}__content {
      .#{$style}__icon {
        display: block;
      }
    }
  }
  &__content {
    display: block;
    position: relative;
    z-index: 1;
    background-color: $D1;
    padding: 13px 16px 13px;
  }
  &__row {
    @include flex(flex-start, center);
  }
  &__email {
    display: inline-block;
    @include text($H10, 500);
    margin-bottom: 10px;
  }
  &__avatar {
    margin-right: 8px;
  }
  &__name {
    flex: 1 1;
    display: inline-block;
    @include text($H12, 400, $G2);
    @include transition(all);
    margin-right: 8px;
    flex-wrap: wrap;
  }
  &__icon {
    @include svg(18px, $I6);
    display: none;
  }
}
</style>
