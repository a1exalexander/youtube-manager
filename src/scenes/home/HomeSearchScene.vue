<template>
  <m-container class="home-search-scene">
    <m-popconfirm
      :visible="visible.delete"
      title="Delete Video?"
      width="374px"
      text="Are you sure that you want to delete video How to Build an Open Source Business from the Video
        Catalog?"
      @close="() => hide('delete')"
      @danger-action="() => hide('delete')"
    >
    </m-popconfirm>
    <home-export-popup
      :visible="visible.export"
      @close="() => hide('export')"
      @submit="() => hide('export')"
    />
    <m-row
      jc="space-between"
      ai="center"
      class="home-search-scene__wrapper"
    >
      <m-row
        ai="center"
        class="home-search-scene__inner"
      >
        <h2 class="home-search-scene__title">Video Catalog</h2>
        <m-row
          ai="center"
          class="home-search-scene__search"
        >
          <m-transition>
            <m-subtle
              v-show="!!search"
              @click="() => SEARCH_SET('')"
              class="home-search-scene__search-btn"
              type="white"
            >
              <m-icon icon="close" />
            </m-subtle>
          </m-transition>
          <m-input
            v-model="search"
            class="home-search-scene__input"
          />
        </m-row>
      </m-row>
      <m-row ai="center">
        <m-transition>
          <m-subtle
            v-if="true"
            @click="() => show('delete')"
            type="danger"
            class="home-search-scene__delete-btn"
          >Delete<template #icon-right>
              <m-icon icon="trash" /></template></m-subtle>
        </m-transition>
        <m-subtle
          @click="() => show('export')"
          class="home-search-scene__export-btn"
        >Export</m-subtle>
        <m-subtle class="home-search-scene__add-btn">
          <template #icon>
            <m-icon icon="plus" />
          </template>
          New Video
        </m-subtle>
      </m-row>
    </m-row>
  </m-container>
</template>
<script>
import { mapMutations, mapState } from 'vuex';
import { CATALOG_SEARCH_SET } from '../../store';
import HomeExportPopup from './HomeExportPopup.vue';
// import { eventBus } from '../../services';

export default {
  name: 'HomeSearchScene',
  components: {
    HomeExportPopup,
  },
  data() {
    return {
      visible: {
        delete: false,
        export: false,
      },
    };
  },
  methods: {
    ...mapMutations('catalog', [CATALOG_SEARCH_SET]),
    show(name) {
      if (name in this.visible) this.visible[name] = true;
    },
    hide(name) {
      if (name in this.visible) this.visible[name] = false;
    },
  },
  computed: {
    ...mapState('catalog', { getSearch: (state) => state.search }),
    search: {
      set(value) {
        this[CATALOG_SEARCH_SET](value);
      },
      get() {
        return this.getSearch;
      },
    },
  },
};
</script>
<style lang="scss">
$style: home-search-scene;
.#{$style} {
  background-color: $dark;
  padding-top: 21px;
  padding-bottom: 24px;
  &__wrapper {
    flex-grow: 1;
  }
  &__inner {
    flex-grow: 1;
  }
  &__title {
    @include text($H18, 500);
    margin-right: 20px;
    white-space: nowrap;
  }
  &__search {
    position: relative;
    margin-right: 20px;
    flex-basis: 300px;
    &:active {
      input {
        border-color: $G6;
      }
    }
  }
  &__search-btn {
    position: absolute !important;
    z-index: 2;
    transform: translateY(1px);
    left: 8px;
    svg {
      width: 15px !important;
      height: 15px !important;
    }
  }
  &__input {
    width: 100%;
    input {
      padding-left: 28px;
    }
  }
  &__delete-btn {
    margin-right: 22px;
  }
  &__export-btn {
    margin-right: 22px;
  }
}
</style>
