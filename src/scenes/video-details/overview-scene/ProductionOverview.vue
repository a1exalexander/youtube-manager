<template>
  <div class="production-overview">
    <m-row jc="space-between">
      <m-col class="production-overview__col" v-for="({ name, value }) in test_data" :key="name">
        <h6 class="production-overview__col-name">{{name}}</h6>
        <span class="production-overview__value">{{value}}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
export default {
  name: 'ProductionOverview',
  data() {
    return {
      test_data: [
        {
          name: 'storytelling method',
          value: 'Lecture',
        },
        {
          name: 'production value',
          value: '2',
        },
        {
          name: 'on-camera location',
          value: 'Indoors',
        },
        {
          name: 'on-camera gender',
          value: 'Male',
        },
        {
          name: 'on-camera race',
          value: 'White',
        },
        {
          name: 'on-camera age',
          value: '45',
        },
        {
          name: 'faces on camera',
          value: '1',
        },
      ],
    };
  },
};
</script>
<style lang="scss">
$styles: production-overview;
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
