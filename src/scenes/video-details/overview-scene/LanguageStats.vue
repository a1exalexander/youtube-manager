<template>
  <div class="langiage-stats">
    <m-row jc="space-between">
      <m-col class="langiage-stats__col" v-for="({ name, value }) in test_data" :key="name">
        <h6 class="langiage-stats__col-name">{{name}}</h6>
        <span class="langiage-stats__value">{{value}}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
export default {
  name: 'LanguageStats',
  data() {
    return {
      test_data: [
        {
          name: 'word count',
          value: '1,650',
        },
        {
          name: 'commonly used words',
          value: 'Growth, Business, Scale, Sales',
        },
        {
          name: 'objects',
          value: 'Man, Power Point, Graph, White Board',
        },
        {
          name: 'sponsors',
          value: 'Yes',
        },
        {
          name: 'Proper nouns',
          value: 'Dropbox, Twilio, SurveyMonkey, GitHub, Microsoft, Google, AirBnB',
        },
      ],
    };
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
