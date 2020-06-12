<template>
  <div class="home-table-scene">
    <!-- <p class='home-table-scene__text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente soluta ipsam doloribus modi aperiam autem voluptas beatae sint quae perspiciatis nesciunt laboriosam enim, dignissimos in, deleniti alias? Dolores quos, quis, velit cum optio eum suscipit, voluptatem ex similique rem reprehenderit culpa. Esse facere ad laboriosam ipsam quasi commodi earum ex! Rem similique atque aperiam eum laudantium beatae! Id similique aut provident nam praesentium esse qui soluta pariatur illo facilis maiores reprehenderit consequuntur, eaque eum itaque at eos quia, rerum repudiandae magnam iste quaerat vel! Vero aut eveniet nobis neque illo aliquam incidunt, expedita eum pariatur nisi eius. Nulla nemo iure ad dolorum placeat, labore quisquam aliquam est aspernatur porro fugiat, quod animi temporibus cupiditate voluptas consequatur. Nesciunt soluta saepe tempora laborum minima repellat inventore eligendi delectus. Eligendi ipsam aspernatur provident animi ipsa repellat aliquid natus? Facere quos neque ut voluptates totam tenetur numquam repellendus alias, et nulla at architecto rem consequuntur? Quia vitae perferendis voluptates nihil alias maxime enim distinctio fugiat? Voluptatem tempora a, laboriosam doloremque amet perferendis tempore cupiditate vitae, recusandae odio mollitia, accusamus voluptatum suscipit deserunt. Doloremque sit facere atque quos sunt amet corporis quaerat aspernatur. Quam vero, nemo odit laborum eos in! Nostrum harum repudiandae incidunt odio?</p> -->
    <m-col class="home-table-scene__inner">
      <home-table-head
        v-model="selectedAll"
        :val="selectedAll && getCatalog.length === selected.length"
      />
      <m-transition>
        <home-table-empty key="empy" v-if="isEmpty" />
        <div key="table" v-else>
          <home-table-section-header :visible="isSearch">Catalog results:</home-table-section-header>
          <ul class="home-table-scene__list">
            <home-table-item
              v-for="video in getCatalog"
              :key="video.id"
              :video="video"
              v-model="selected"
            />
          </ul>
          <home-table-section-header :visible="isSearch">Global results:</home-table-section-header>
          <ul class="home-table-scene__list" v-if="isSearch && !isEmpty">
            <home-table-item
              v-for="video in getCatalog"
              :key="video.id"
              :video="video"
              v-model="selected"
            />
          </ul>
        </div>
      </m-transition>
    </m-col>
  </div>
</template>
<script>
import { mapGetters, mapState, mapMutations } from 'vuex';
import HomeTableHead from './table/HomeTableHead.vue';
import HomeTableEmpty from './table/HomeTableEmpty.vue';
import HomeTableItem from './table/HomeTableItem.vue';
import HomeTableSectionHeader from './table/HomeTableSectionHeader.vue';
import { CATALOG_SELECTED_SET } from '../../store';

export default {
  name: 'HomeTableScene',
  components: {
    HomeTableHead,
    HomeTableEmpty,
    HomeTableItem,
    HomeTableSectionHeader,
  },
  data() {
    return {
      selectedAll: false,
    };
  },
  methods: {
    ...mapMutations('catalog', [CATALOG_SELECTED_SET]),
  },
  computed: {
    ...mapGetters('catalog', ['getCatalog', 'isSearch', 'isEmpty']),
    ...mapState('catalog', { getSelected: (state) => state.selected }),
    selected: {
      get() {
        return this.getSelected;
      },
      set(e) {
        this[CATALOG_SELECTED_SET](e);
      },
    },
  },
  watch: {
    async selectedAll() {
      await this.$nextTick();
      if (this.selectedAll) {
        this[CATALOG_SELECTED_SET]([...this.getCatalog.map(({ id }) => id)]);
      } else {
        this[CATALOG_SELECTED_SET]([]);
      }
    },
  },
};
</script>
<style lang="scss">
$style: home-table-scene;
.#{$style} {
  background-color: $dark;
  max-width: 100vw;
  overflow-x: scroll;
  @include media($screen-hd) {
    overflow: visible;
    max-width: 100%;
  }
  &__inner {
    min-width: 1366px;
  }
  &__text {
    white-space: nowrap;
  }
}
</style>
