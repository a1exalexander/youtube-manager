<template>
  <m-container class="the-navigation" contentClass="the-navigation__content">
    <router-link :to="{ name: $routeName.home }">
      <icon-logo class="the-navigation__logo" />
    </router-link>
    <m-row>
      <a-popover trigger="hover" placement="bottomRight">
        <template #content>
          <m-col class="the-navigation__account-popover">
            <the-navigation-account-item
              v-for="item in accounts"
              :key="item.id"
              :account="item"
              :val="item.id"
              name="accounts"
              v-model="accountIdModel"
            />
            <m-select-item icon="plus">Add Account</m-select-item>
            <m-select-item icon="exit">Log Out</m-select-item>
          </m-col>
        </template>
        <m-subtle>
          <template #icon>
            <m-avatar class="the-navigation__icon" :size='18' :src='account && account.thumbnail' />
          </template>
          <template #icon-right>
            <m-icon icon="angle-down" />
          </template>
          <m-transition appear>
            <span :key="accountName">{{ accountName }}</span>
          </m-transition>
        </m-subtle>
      </a-popover>
      <m-divider horizontal class="the-navigation__divider" />
      <a-popover trigger="hover" placement="bottomRight">
        <template #content>
          <router-link :to="{ name: $routeName.home }" exact>
            <m-select-item icon="video">Video Catalog</m-select-item>
          </router-link>
          <router-link :to="{ name: $routeName.team }">
            <m-select-item icon="team">Team</m-select-item>
          </router-link>
          <router-link :to="{ name: $routeName.settings }">
            <m-select-item icon="settings">Settings</m-select-item>
          </router-link>
          <router-link :to="{ name: $routeName.components }" v-if="$isDev">
            <m-select-item icon="link">Components</m-select-item>
          </router-link>
          <a-divider />
          <m-select-item @click="onLogout" icon="exit">Log Out</m-select-item>
        </template>
        <m-subtle type="white">
          {{ user.name }}
          <template #icon-right>
            <m-icon icon="angle-down" />
          </template>
        </m-subtle>
      </a-popover>
    </m-row>
  </m-container>
</template>
<script>
import IconLogo from '@/components/icons/IconLogo.vue';
import TheNavigationAccountItem from '@/scenes/navigation/TheNavigationAccountItem.vue';
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import { AUTH_LOGOUT, ACCOUNT_SET } from '../store';
import { routeName } from '../router';

export default {
  name: 'TheNavigation',
  components: {
    IconLogo,
    TheNavigationAccountItem,
  },
  methods: {
    ...mapActions({
      [AUTH_LOGOUT]: `auth/${AUTH_LOGOUT}`,
    }),
    ...mapMutations({
      [ACCOUNT_SET]: `profile/${ACCOUNT_SET}`,
    }),
    async onLogout() {
      await this[AUTH_LOGOUT]();
      this.$router.push({ name: routeName.auth });
    },
  },
  computed: {
    ...mapState('profile', ['user', 'accounts', 'accountId']),
    ...mapGetters('profile', ['account']),
    accountIdModel: {
      set(id) {
        this[ACCOUNT_SET](id);
      },
      get() {
        return this.accountId;
      },
    },
    accountName() {
      return this.accounts.find(({ id }) => id === this.accountIdModel)?.name || 'YouTube Account';
    },
  },
};
</script>
<style lang="scss">
$style: the-navigation;
.#{$style} {
  @include z-index(navigation);
  background-color: $BG-COLOR;
  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  border-bottom: 1px solid $G8;
  padding-top: 15px;
  padding-bottom: 17px;
  &__content {
    @include flex(space-between);
  }
  &__divider {
    margin: 0 16px 0 12px !important;
  }
  &__account-popover {
    width: 196px;
  }
  &__account-divider {
    margin-top: 0 !important;
  }
  &__icon {
    margin-right: 7px;
  }
}
</style>
