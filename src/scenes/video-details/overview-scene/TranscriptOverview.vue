<template>
  <div class="transcript-overview">
    <m-row jc="space-between">
      <m-col
        class="transcript-overview__col"
        v-for="{ name, value, key } in getDataList"
        :key="key"
      >
        <h6 class="transcript-overview__col-name">{{ name }}</h6>
        <span
          class="transcript-overview__value"
          :class="{_nowrap: key.includes('length')}"
        >{{ value }}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'TranscriptOverview',
  data() {
    return {
      structure: [
        {
          key: 'title_length',
          name: 'Title length',
          value: '',
        },
        {
          key: 'description_length',
          name: 'description length',
          value: '',
        },
        {
          key: 'transcript_length',
          name: 'transcript length',
          value: '',
        },
        {
          key: 'keywords_in_title',
          name: 'keywords in title',
          value: '',
        },
        {
          key: 'keywords_in_description',
          name: 'keywords in description',
          value: '',
        },
        {
          key: 'most_used_keywords',
          name: 'most commonly used keywords in transcript',
          value: '',
        },
        {
          key: 'is_sponsored',
          name: 'sponsored or not',
          value: '',
        },
      ],
    };
  },
  computed: {
    ...mapState('video', {
      getData: ({ details }) => details.transcript_overview,
    }),
    getDataList() {
      return this.structure.map(({ key, name }) => {
        switch (key) {
          case 'title_length':
            return {
              key,
              name,
              value: `${this.getData[key]} words`,
            };
          case 'description_length':
            return {
              key,
              name,
              value: `${this.getData[key]} words`,
            };
          case 'transcript_length':
            return {
              key,
              name,
              value: `${this.getData[key]} words`,
            };
          case 'keywords_in_title':
            return {
              key,
              name,
              value: this.getData[key].join(', '),
            };
          case 'keywords_in_description':
            return {
              key,
              name,
              value: this.getData[key].join(', '),
            };
          case 'most_used_keywords':
            return {
              key,
              name,
              value: this.getData[key].join(', '),
            };
          case 'is_sponsored':
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
$styles: transcript-overview;
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
