<template>
  <div class="langiage-stats">
    <m-row jc="space-between">
      <m-col class="langiage-stats__col" v-for="({ name, value, key }) in getDataList" :key="key">
        <h6 class="langiage-stats__col-name">{{name}}</h6>
        <span class="langiage-stats__value">{{value}}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'LanguageStats',
  data() {
    return {
      structure: [
        {
          key: 'words_count',
          name: 'word count',
          value: '',
        },
        {
          key: 'commonly_used_words',
          name: 'commonly used words',
          value: '',
        },
        {
          key: 'objects',
          name: 'objects',
          value: '',
        },
        {
          key: 'sponsors',
          name: 'sponsors',
          value: '',
        },
        {
          key: 'proper_nouns',
          name: 'Proper nouns',
          value: '',
        },
      ],
    };
  },
  computed: {
    ...mapState('video', {
      getData: ({ details }) => details.language_stats,
    }),
    getDataList() {
      return this.structure.map(({ key, name }) => {
        switch (key) {
          case 'words_count':
            return {
              key,
              name,
              value: this.$separator(this.getData[key]),
            };
          case 'commonly_used_words':
            return {
              key,
              name,
              value: this.getData[key].join(', '),
            };
          case 'objects':
            return {
              key,
              name,
              value: this.getData[key].join(', '),
            };
          case 'proper_nouns':
            return {
              key,
              name,
              value: this.getData[key].join(', '),
            };
          case 'sponsors':
            return {
              key,
              name,
              value: this.getData[key] ? 'yes' : 'no',
            };
          default:
            return {
              key,
              name,
              value: this.getData[key],
            };
        }
      });
    },
  },
};
</script>
<style lang="scss">
$styles: langiage-stats;
.#{$styles} {
  &__col:not(:last-child) {
    margin-right: 40px;
  }
  &__col-name {
    @extend %overview-col-name;
  }
  &__value {
    @extend %overview-col-value;
  }
}
</style>
