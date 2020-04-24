<template>
  <section>
    <h2>Dropdowns</h2>
    <row>
      <a-auto-complete
        :value="value"
        :dataSource="dataSource"
        style="width: 200px"
        @select="onSelect"
        @search="onSearch"
        @change="onChange"
        placeholder="Autocomplete"
      />
    </row>
  </section>
</template>
<script>
export default {
  name: 'Dropdowns',
  data() {
    return {
      value: '',
      dataSource: [],
    };
  },
  methods: {
    onSearch(searchText) {
      this.dataSource = !searchText
        ? []
        : [searchText, searchText.repeat(2), searchText.repeat(3)];
    },
    onSelect(value) {
      console.log('onSelect', value);
    },
    onChange(value) {
      this.value = value;
    },
  },
};
</script>
