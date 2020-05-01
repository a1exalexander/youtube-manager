<template>
  <m-container class="components">
    <h1>Components</h1>
    <m-divider />
    <buttons />
    <m-divider />
    <subtles />
    <m-divider />
    <inputs />
    <m-divider />
    <dropdowns />
    <m-divider />
    <checkboxes />
    <m-divider />
    <popup />
    <m-divider />
    <popconfirm />
    <m-divider />
    <radio-buttons />
    <m-divider />
    <slider />
    <m-divider />
    <badges />
    <m-divider />
  </m-container>
</template>
<script>
import Buttons from '@/scenes/components/Buttons.vue';
import Subtles from '@/scenes/components/Subtles.vue';
import Inputs from '@/scenes/components/Inputs.vue';
import Checkboxes from '@/scenes/components/Checkboxes.vue';
import Dropdowns from '@/scenes/components/Dropdowns.vue';
import Popup from '@/scenes/components/Popup.vue';
import Popconfirm from '@/scenes/components/Poponfirm.vue';
import RadioButtons from '@/scenes/components/RadioButtons.vue';
import Slider from '@/scenes/components/Slider.vue';
import Badges from '@/scenes/components/Badges.vue';

export default {
  name: 'Components',
  components: {
    Buttons,
    Subtles,
    Inputs,
    Checkboxes,
    Dropdowns,
    Popup,
    Popconfirm,
    RadioButtons,
    Slider,
    Badges,
  },
};
</script>
<style lang="scss">
.components {
  color: $N0;
  padding: 24px 40px;
  h1 {
    margin-bottom: 24px;
  }
  section {
    margin-bottom: 24px;
  }
  h2 {
    margin-bottom: 24px;
  }
  .row > * {
    margin-right: 24px;
    margin-bottom: 20px;
  }
  pre,
  code {
    @include text($H12, 400, $G4);
  }
}
</style>
