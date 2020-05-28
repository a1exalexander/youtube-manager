<template>
  <div class="langiage-stats">
    <m-row jc="space-between">
      <m-col class="langiage-stats__col">
        <h6 class="langiage-stats__col-name">words count</h6>
        <span class="langiage-stats__value">{{$separator(getData.words_count)}}</span>
      </m-col>
      <m-col class="langiage-stats__col">
        <h6 class="langiage-stats__col-name">commonly used words</h6>
        <span class="langiage-stats__value">{{$wordsFromArray(getData.commonly_used_words)}}</span>
      </m-col>
      <m-col class="langiage-stats__col">
        <h6 class="langiage-stats__col-name">objects</h6>
        <span class="langiage-stats__value">{{$wordsFromArray(getData.objects)}}</span>
      </m-col>
      <m-col class="langiage-stats__col">
        <h6 class="langiage-stats__col-name">sponsors</h6>
        <span class="langiage-stats__value">{{$yesNo(getData.sponsors)}}</span>
      </m-col>
      <m-col class="langiage-stats__col">
        <h6 class="langiage-stats__col-name">Proper nouns</h6>
        <span class="langiage-stats__value">{{$wordsFromArray(getData.proper_nouns)}}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'LanguageStats',
  computed: {
    ...mapState('video', {
      getData: ({ details }) => details?.['language_stats'],
    }),
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
