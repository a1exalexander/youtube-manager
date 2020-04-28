<template>
  <section>
    <h2>Dropdowns</h2>
    <m-row wrap class="row">
      <a-auto-complete
        :value="value"
        :dataSource="dataSource"
        style="width: 200px"
        @select="onSelect"
        @search="onSearch"
        @change="onChange"
        placeholder="Autocomplete"
      />
      <a-select style="width: 200px" placeholder="Select">
        <template #suffixIcon><m-icon icon="drop-down"/></template>
        <a-select-option value="jack">Jack</a-select-option>
        <a-select-option value="lucy">Lucy</a-select-option>
        <a-select-option value="disabled" disabled>Disabled</a-select-option>
        <a-select-option value="Yiminghe">yiminghe</a-select-option>
      </a-select>
      <a-popover trigger="hover" placement="bottomLeft">
        <template slot="content">
          <m-select-item
            @click="hoverItem = 'search'"
            :active="hoverItem == 'search'"
            icon="search"
            >Search Page</m-select-item
          >
          <m-select-item
            @click="hoverItem = 'check'"
            :active="hoverItem == 'check'"
            icon="check"
            >Check</m-select-item
          >
          <a-divider />
          <m-select-item icon="close">Close</m-select-item>
        </template>
        <m-button>Hover me</m-button>
      </a-popover>
      <a-popover trigger="click" placement="bottomRight">
        <template slot="content">
          <m-select-item
            @click="clickItem = 'search'"
            :active="clickItem == 'search'"
            icon="search"
            >Search Page</m-select-item
          >
          <m-select-item
            @click="clickItem = 'check'"
            :active="clickItem == 'check'"
            icon="check"
            >Check</m-select-item
          >
          <a-divider />
          <m-select-item icon="close">Close</m-select-item>
        </template>
        <m-button>Click me</m-button>
      </a-popover>
    </m-row>
  </section>
</template>
<script>
export default {
  name: 'Dropdowns',
  data() {
    return {
      value: '',
      dataSource: [],
      hoverItem: 'search',
      clickItem: 'check',
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
