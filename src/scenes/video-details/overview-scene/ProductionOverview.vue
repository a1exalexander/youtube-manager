<template>
  <div class="production-overview">
    <m-row jc="space-between">
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">storytelling method</h6>
        <span class="production-overview__value">{{getData.method}}</span>
      </m-col>
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">production value</h6>
        <span class="production-overview__value">{{$number(getData.value)}}</span>
      </m-col>
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">on-camera location</h6>
        <span class="production-overview__value">{{getData.on_camera_location}}</span>
      </m-col>
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">on-camera gender</h6>
        <span class="production-overview__value">{{getData.on_camera_gender}}</span>
      </m-col>
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">on-camera race</h6>
        <span class="production-overview__value">{{getData.on_camera_race}}</span>
      </m-col>
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">on-camera age</h6>
        <span class="production-overview__value">{{$number(getData.on_camera_age)}}</span>
      </m-col>
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">faces on camera</h6>
        <span class="production-overview__value">{{$number(getData.faces_on_camera)}}</span>
      </m-col>
      <m-col class="production-overview__col">
        <h6 class="production-overview__col-name">number of shot changes</h6>
        <span class="production-overview__value">{{$number(getData.numbers_of_shots_changes)}}</span>
      </m-col>
    </m-row>
  </div>
</template>
<script>
import { mapState } from 'vuex';

export default {
  name: 'ProductionOverview',
  computed: {
    ...mapState('video', {
      getData: ({ details }) => details?.['production_owerview'],
    }),
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
