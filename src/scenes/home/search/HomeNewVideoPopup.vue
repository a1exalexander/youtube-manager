<template>
  <m-popup :visible="visible" width="384px" title="Add New Video" @close="() => $emit('close')">
    <div class="home-new-video-popup">
      <a-tabs v-model="tab" class="home-new-video-popup__tabs">
        <a-tab-pane class="home-new-video-popup__tab-content" tab="From YouTube via Link" key="1">
          <p class="home-new-video-popup__caption">Add video to the catalog from YouTube via Link</p>
          <m-input
            v-model="link"
            :error="!isValid.link && !!link"
            :message="vErrors.link"
            @blur="vBlur.link"
            placeholder="Place Link here"
            iconLeft="link"
          />
        </a-tab-pane>
        <a-tab-pane class="home-new-video-popup__tab-content" tab="From Youtube Channel" key="2">
          <p class="home-new-video-popup__caption">Add video to the catalog from my YouTube channel</p>
          <m-input-wrapper label="YouTube Channel" class="home-new-video-popup__select-wrapper">
            <a-select
              v-model="channel"
              style="width: 100%"
              placeholder="Select from available channels or sign in"
            >
              <template #suffixIcon>
                <m-icon icon="drop-down" />
              </template>
              <template class="home-new-video-popup__channel-dropdown" v-slot:dropdownRender="menu">
                <v-nodes :vnodes="menu" />
                <div
                  @mousedown="e => e.preventDefault()"
                  class="home-new-video-popup__select-footer"
                >
                  <m-subtle @click="() => undefined" icon="plus">Add New</m-subtle>
                </div>
              </template>
              <a-select-option value="1">TEDx</a-select-option>
              <a-select-option value="2">Greg Blackman</a-select-option>
            </a-select>
          </m-input-wrapper>
          <m-input-wrapper>
            <template #label>
              <span>Video</span>
              <m-row>
                <m-subtle
                  @click="clean"
                  :disabled="!channel"
                  class="home-new-video-popup__select-subtle"
                >Clear</m-subtle>
                <m-subtle :disabled="!channel">Select All</m-subtle>
              </m-row>
            </template>
            <a-select
              :disabled="!channel"
              v-model="video"
              style="width: 100%"
              placeholder="Choose video from the list"
            >
              <template #suffixIcon>
                <m-icon icon="drop-down" />
              </template>
              <a-select-option value="jack">Jack</a-select-option>
              <a-select-option value="lucy">Lucy</a-select-option>
            </a-select>
          </m-input-wrapper>
        </a-tab-pane>
        <a-tab-pane class="home-new-video-popup__tab-content" tab="Upload" key="3">
          <m-transition>
            <div v-if="imageUrl" key="image">
              <m-row class="home-new-video-popup__upload-header">
                <div class="home-new-video-popup__upload-image-wrapper">
                  <img :src="imageUrl" alt class="home-new-video-popup__upload-image" />
                </div>
                <m-subtle @click="imageUrl = ''" type="danger" icon="close">Delete</m-subtle>
              </m-row>
              <m-input v-model="name" class="home-new-video-popup__input">Video Name</m-input>
              <m-input
                v-model="description"
                placeholder="Optional"
                class="home-new-video-popup__input"
              >Description</m-input>
            </div>
            <a-upload-dragger
              key="upload"
              v-else
              name="file"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              @change="handleChange"
              :showUploadList="false"
              :before-upload="beforeUpload"
              list-type="picture-card"
              class="home-new-video-popup__drop"
            >
              <m-icon class="ant-upload-drag-icon" icon="upload" />
              <p
                class="ant-upload-text"
              >Drag the video here or click the button below to select it on the computer.</p>
              <m-subtle>Select File</m-subtle>
            </a-upload-dragger>
          </m-transition>
        </a-tab-pane>
      </a-tabs>
    </div>
    <template #buttons>
      <m-button @click="() => $emit('close')" type="secondary">Cancel</m-button>
      <m-button :loading="loading" :disabled='disabled' @click="onSubmit">Add Video</m-button>
    </template>
  </m-popup>
</template>
<script>
import { getBase64 } from '@/utils';
import { mapActions } from 'vuex';
import { CATALOG_ADD } from '../../../store';
import { useValidation } from '../../../services';

export default {
  name: 'HomeNewVideoPopup',
  props: {
    visible: Boolean,
  },
  components: {
    VNodes: {
      functional: true,
      render: (h, ctx) => ctx.props.vnodes,
    },
  },
  setup() {
    const options = {
      required: ['email', 'password'],
    };
    const { isValid, vErrors, link, vBlur } = useValidation(options);
    return {
      isValid,
      vErrors,
      vBlur,
      link,
    };
  },
  data() {
    return {
      tab: '1',
      loading: false,
      channel: undefined,
      video: undefined,
      imageUrl: '',
      name: '',
      description: '',
    };
  },
  methods: {
    ...mapActions('catalog', [CATALOG_ADD]),
    clean() {
      this.video = undefined;
      this.channel = undefined;
    },
    async onSubmit() {
      this.loading = true;
      const ok = await this[CATALOG_ADD](this.link);
      this.loading = false;
      if (ok) this.$emit('close');
    },
    handleChange(info) {
      if (info.file.status === 'uploading') {
        this.loading = true;
        return;
      }
      if (info.file.status === 'done') {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, (imageUrl) => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        this.$message.warn('You can only upload JPG file!');
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.warn('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    },
  },
  computed: {
    disabled() {
      switch (this.tab) {
        case '1':
          return !(this.isValid.link && this.link);
        default:
          return false;
      }
    },
  },
};
</script>
<style lang="scss">
$style: home-new-video-popup;
.#{$style} {
  &__tabs {
    .ant-tabs-bar {
      padding: 0 24px;
      margin: 0 0 20px 0;
      display: flex;
      width: 100%;
    }
    .ant-tabs-nav .ant-tabs-tab {
      padding: 20px 1px 16px;
      margin: 0 24px 0 0;
    }
    .ant-tabs-nav.ant-tabs-nav-animated > div {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
  &__tab-content {
    padding: 0 24px 24px;
  }
  &__caption {
    @include text($H12, 500);
    margin-bottom: 20px;
  }
  &__select-wrapper {
    margin-bottom: 12px;
  }
  &__channel-dropdown {
    .ant-select-dropdown-menu.ant-select-dropdown-menu-vertical.ant-select-dropdown-menu-root {
      padding-bottom: 4px;
    }
  }
  &__select-subtle {
    margin-right: 16px;
  }
  &__select-footer {
    padding: 0 12px 12px;
  }
  &__drop {
    padding: 26px 0 32px;
  }
  &__upload-image-wrapper {
    width: 70px;
    height: 40px;
    margin-right: 16px;
  }
  &__upload-image {
    @include size(100%);
    object-fit: cover;
  }
  &__input {
    &:not(:last-of-type) {
      margin-bottom: 13px;
    }
  }
  &__upload-header {
    margin-bottom: 20px;
  }
}
</style>
