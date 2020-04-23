<template>
  <container class="components">
    <h1>Components</h1>
    <divider />
    <section>
      <h2>Buttons</h2>
      <row wrap class="row">
        <ms-button>Primary</ms-button>
        <ms-button loading>Primary</ms-button>
        <ms-button
          ><template #icon><icon #icon/></template>Primary Icon</ms-button
        >
        <ms-button google>Primary Google</ms-button>
      </row>
      <row wrap class="row">
        <ms-button type="secondary">Secondary</ms-button>
        <ms-button type="secondary" loading>Secondary</ms-button>
        <ms-button type="secondary"
          ><template #icon><icon #icon/></template>Secondary</ms-button
        >
        <ms-button type="secondary" google>Secondary google</ms-button>
      </row>
      <pre>
props: {
  type: {
    validator(value) {
      return ['primary', 'secondary'].indexOf(value) !== -1;
    },
    default: 'primary',
  },
  fluid: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  google: {
    type: Boolean,
    default: false,
  },
}
      </pre>
    </section>
    <divider />
  </container>
</template>
<script>
export default {
  name: 'Components',
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
    margin-bottom: 24px;
  }
  pre {
    @include text($H12, 400, $G4);
  }
}
</style>
