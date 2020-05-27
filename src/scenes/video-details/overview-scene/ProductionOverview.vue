<template>
  <div class="production-overview">
    <m-row jc="space-between">
      <m-col
        class="production-overview__col"
        v-for="({ name, value, key }) in getDataList"
        :key="key"
      >
        <h6 class="production-overview__col-name">{{name}}</h6>
        <span class="production-overview__value">{{value}}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductionOverview',
  data() {
    return {
      structure: [
        {
          key: 'method',
          name: 'storytelling method',
          value: '',
        },
        {
          key: 'value',
          name: 'production value',
          value: '',
        },
        {
          key: 'on_camera_location',
          name: 'on-camera location',
          value: '',
        },
        {
          key: 'on_camera_gender',
          name: 'on-camera gender',
          value: '',
        },
        {
          key: 'on_camera_race',
          name: 'on-camera race',
          value: '',
        },
        {
          key: 'on_camera_age',
          name: 'on-camera age',
          value: '',
        },
        {
          key: 'faces_on_camera',
          name: 'faces on camera',
          value: '',
        },
        {
          key: 'numbers_of_shots_changes',
          name: 'number of shot changes',
          value: '',
        },
      ],
    };
  },
  computed: {
    ...mapState('video', {
      getData: ({ details }) => details.production_owerview,
    }),
    getDataList() {
      return this.structure.map(({ key, name }) => ({
        key,
        name,
        value: this.getData[key],
      }));
    },
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
