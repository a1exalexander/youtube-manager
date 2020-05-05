<template>
  <div class="transcript-overview">
    <m-row jc="space-between">
      <m-col class="transcript-overview__col" v-for="{ name, value } in test_data" :key="name">
        <h6 class="transcript-overview__col-name">{{ name }}</h6>
        <span class="transcript-overview__value">{{ value }}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
export default {
  name: 'TranscriptOverview',
  data() {
    return {
      test_data: [
        {
          name: 'Title length',
          value: '8 words',
        },
        {
          name: 'description length',
          value: '35 words',
        },
        {
          name: 'transcript length',
          value: '1,650 words',
        },
        {
          name: 'keywords in title',
          value: 'Growth, Sales, B2B',
        },
        {
          name: 'keywords in description',
          value: 'Growth, Viral, Network Effects, B2B, Enterprise',
        },
        {
          name: 'most commonly used keywords in transcript',
          value: 'Growth, Business, Scale, Sales',
        },
        {
          name: 'sponsored or not',
          value: 'Yes',
        },
      ],
    };
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
