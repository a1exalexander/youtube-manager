<template>
  <container class="components">
    <h1>Components</h1>
    <divider />
    <buttons />
    <divider />
    <subtles />
    <divider />
    <inputs />
    <divider />
    <dropdowns />
    <divider />
    <checkboxes />
    <divider />
    <popup />
    <divider />
  </container>
</template>
<script>
import Buttons from '@/scenes/components/Buttons.vue';
import Subtles from '@/scenes/components/Subtles.vue';
import Inputs from '@/scenes/components/Inputs.vue';
import Checkboxes from '@/scenes/components/Checkboxes.vue';
import Dropdowns from '@/scenes/components/Dropdowns.vue';
import Popup from '@/scenes/components/Popup.vue';

export default {
  name: 'Components',
  components: {
    Buttons,
    Subtles,
    Inputs,
    Checkboxes,
    Dropdowns,
    Popup,
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
