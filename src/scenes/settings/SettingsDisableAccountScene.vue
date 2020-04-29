<template>
  <m-container
    center
    class="settings-disable-account-scene"
    contentClass="settings-disable-account-scene__inner"
    width="660px"
  >
    <m-col class="settings-disable-account-scene__col">
      <m-subtle grey @click="$emit('back')" class="settings-disable-account-scene__back-btn">
        Back to Account Setting
        <template #icon>
          <m-icon icon="back" />
        </template>
      </m-subtle>
      <h2 class="settings-disable-account-scene__title">Disable Account</h2>
      <p
        class="settings-disable-account-scene__text"
      >Are you sure you want to disable your account? The page can be restored with all previous data saved.</p>
    </m-col>
    <m-col class="settings-disable-account-scene__col">
      <form @submit.prevent="submit" class="settings-disable-account-scene__form">
        <m-input
          v-model="password"
          type="password"
          class="settings-disable-account-scene__input"
        >Password</m-input>
        <label class="settings-disable-account-scene__dropdown">
          <span class="settings-disable-account-scene__label">Reason</span>
          <a-select style="width: 100%" placeholder="Choose Reason">
            <template #suffixIcon>
              <m-icon icon="drop-down" />
            </template>
            <a-select-option value="jack">Jack</a-select-option>
            <a-select-option value="lucy">Lucy</a-select-option>
            <a-select-option value="Yiminghe">yiminghe</a-select-option>
          </a-select>
        </label>
        <m-button type="danger" :loading="loading">Disable</m-button>
      </form>
    </m-col>
  </m-container>
</template>
<script>
export default {
  name: 'SettingsDisableAccountScene',
  data() {
    return {
      password: '',
      reason: '',
      loading: false,
    };
  },
  methods: {
    submit() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1500);
    },
  },
};
</script>
<style lang="scss">
.settings-disable-account-scene {
  padding-top: 96px;
  &__inner {
    flex: 1;
    @include flex-row(center, center);
    color: $N0;
  }
  &__col {
    flex: 1 1 308px;
    max-width: 336px;
    padding: 0;
    text-align: left;
    padding-right: 28px;
    &:last-child {
      padding-left: 28px;
      padding-right: 0;
    }
  }
  &__back-btn {
    margin-bottom: 38px;
  }
  &__title {
    @include text($H32, 700, $N0);
    margin-bottom: 26px;
  }
  &__text {
    @include text($H12, 400, $G4);
    line-height: 1.6;
  }
  &__form {
    background-color: $dark;
    padding: 24px;
    border-radius: 2px;
    @include flex-col(stretch, stretch);
  }
  &__input {
    margin-bottom: 20px;
  }
  &__label {
    text-align: left;
    @extend %label;
  }
  &__dropdown {
    margin-bottom: 24px;
  }
}
</style>
