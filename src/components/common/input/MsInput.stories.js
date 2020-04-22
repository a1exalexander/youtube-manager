import { action } from '@storybook/addon-actions';
import MsInput from './MsInput.vue';

export default { title: 'Input', excludeStories: /.*Data$/ };

export const actionsData = {
  onClickPrimary: action('Click on Input'),
};

export const Input = () => ({
  components: { MsInput },
  template: '<ms-input @click="onClickPrimary">Input</ms-input>',
  methods: actionsData,
});
