<template>
  <div class="transcript-overview">
    <m-row jc="space-between">
      <m-col class="transcript-overview__col">
        <h6 class="transcript-overview__col-name">Title length</h6>
        <span
          class="transcript-overview__value _nowrap _lowercase"
        >{{$wordsCount(getData.title_length)}}</span>
      </m-col>
      <m-col class="transcript-overview__col">
        <h6 class="transcript-overview__col-name">description length</h6>
        <span
          class="transcript-overview__value _nowrap _lowercase"
        >{{$wordsCount(getData.description_length)}}</span>
      </m-col>
      <m-col class="transcript-overview__col">
        <h6 class="transcript-overview__col-name">transcript length</h6>
        <span
          class="transcript-overview__value _nowrap _lowercase"
        >{{$wordsCount(getData.transcript_length)}}</span>
      </m-col>
      <m-col class="transcript-overview__col">
        <h6 class="transcript-overview__col-name">keywords in title</h6>
        <span class="transcript-overview__value">{{$wordsFromArray(getData.keywords_in_title)}}</span>
      </m-col>
      <m-col class="transcript-overview__col">
        <h6 class="transcript-overview__col-name">keywords in description</h6>
        <span
          class="transcript-overview__value"
        >{{$wordsFromArray(getData.keywords_in_description)}}</span>
      </m-col>
      <m-col class="transcript-overview__col">
        <h6 class="transcript-overview__col-name">most commonly used keywords in transcript</h6>
        <span class="transcript-overview__value">{{$wordsFromArray(getData.most_used_keywords)}}</span>
      </m-col>
      <m-col class="transcript-overview__col">
        <h6 class="transcript-overview__col-name">sponsored or not</h6>
        <span class="transcript-overview__value">{{$yesNo(getData.is_sponsored)}}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'TranscriptOverview',
  computed: {
    ...mapState('video', {
      getData: ({ details }) => details?.['transcript_overview'],
    }),
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
