<template>
  <div class="settings-scene">
    <h2 class="settings-scene__title settings-scene__title--main">Personal Settings</h2>
    <m-row ai="center" class="settings-scene__avatar-row">
      <div class="settings-scene__img-wrapper">
        <m-icon icon="user" v-if="!user.userImage" class="settings-scene__icon" />
        <img v-else :src="user.userImage" class="settings-scene__avatar" />
      </div>
      <m-col>
        <m-row ai="center" class="settings-scene__username-wrapper">
          <h2 class="settings-scene__title settings-scene__title--user">Pavel Tseluyko</h2>
          <m-badge>Admin</m-badge>
        </m-row>
        <label class="settings-scene__upload">
          <input
            class="settings-scene__upload-input"
            type="file"
            accept="image/*"
            @change="uploadImage($event)"
          />
          <m-subtle>
            Change Avatar
            <template #icon>
              <m-icon icon="photo" class="settings-scene__icon-photo" />
            </template>
          </m-subtle>
        </label>
      </m-col>
    </m-row>
    <div class="settings-scene__inputs-wrapper">
      <m-input class="settings-scene__input" v-model="user.name">Full Name</m-input>
      <m-input class="settings-scene__input" type="email" v-model="user.email">Email</m-input>
    </div>
    <m-divider />
    <h2 class="settings-scene__title settings-scene__title--pass">Change password</h2>
    <transition
      mode="out-in"
      enter-active-class="animated faster fadeIn"
      leave-active-class="animated faster fadeOut"
    >
      <m-col ai="flex-start" key="base" v-if="password === 'base'">
        <m-button class="settings-scene__reset-btn" @click="password = 'current'">Reset Password</m-button>
        <span class="settings-scene__password-date">Last change: 14 Oct, 2019</span>
      </m-col>
      <m-row key="current" ai="flex-end" v-if="password === 'current'">
        <m-input
          class="settings-scene__input"
          type="password"
          v-model="user.password"
        >Current Password</m-input>
        <m-button @click="password = 'new'">Continue</m-button>
      </m-row>
      <m-row key="new" ai="flex-end" v-if="password === 'new'">
        <m-input
          class="settings-scene__input"
          type="password"
          v-model="user.newPassword"
        >Create New Password</m-input>
        <m-input
          class="settings-scene__input"
          type="password"
          v-model="user.newPassword"
        >Confirm New Password</m-input>
        <m-button @click="password = 'base'">Save</m-button>
      </m-row>
    </transition>
    <m-divider />
    <h2 class="settings-scene__title settings-scene__title--last">Disable Account</h2>
    <p class="settings-scene__text">The page can be restored with all previous data saved.</p>
    <m-button type="secondary" @click="$emit('disableAccount')">Disable</m-button>
  </div>
</template>
<script>
export default {
  name: 'SettingsScene',
  data() {
    return {
      user: {
        userImage: null,
        name: '',
        email: '',
        password: '',
        newPassword: '',
      },
      password: 'base',
    };
  },
  methods: {
    uploadImage(event) {
      const photo = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(photo);
      reader.onload = (e) => {
        this.user.userImage = e.target.result;
      };
    },
  },
};
</script>
<style lang="scss">
.settings-scene {
  flex: 1;
  background-color: $dark;
  border-radius: 2px;
  padding: 25px 32px;
  text-align: left;
  color: $N0;
  &__inputs-wrapper {
    @include flex-col;
    @include media($screen-tablet) {
      flex-direction: row;
    }
  }
  &__title {
    @include text($H16, 500, $N0);
    margin-bottom: 32px;
    &--user {
      margin-bottom: 0;
      margin-right: 12px;
    }
    &--pass {
      margin-bottom: 20px;
    }
    &--last {
      margin-bottom: 16px;
    }
  }
  &__text {
    @include text($H12, 400, $G4);
    margin-bottom: 20px;
  }
  &__img-wrapper {
    @include size(70px, true);
    @include flex-row(center, center);
    background-color: $D2;
    margin-right: 24px;
    border: 1px solid $user-border;
    overflow: hidden;
  }
  &__icon {
    @include size(45px);
  }
  &__avatar {
    @include size(70px);
  }
  &__username-wrapper {
    margin-bottom: 10px;
  }
  &__icon-photo {
    @include svg();
  }
  &__upload {
    position: relative;
    max-width: fit-content;
  }
  &__upload-input {
    visibility: hidden;
    position: absolute;
  }
  &__avatar-row {
    margin-bottom: 30px;
  }
  &__input {
    width: 100%;
    max-width: 260px;
    &:not(:last-child) {
      margin-bottom: 16px;
      @include media($screen-tablet) {
        margin-bottom: 0;
        margin-right: 20px;
      }
    }
  }
  &__password-date {
    @include text($H12, 400, $G6);
  }
  &__reset-btn {
    margin-bottom: 12px;
  }
}
</style>
