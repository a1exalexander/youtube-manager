import { action } from '@storybook/addon-actions';
import MsButton from './MsButton.vue';

export default { title: 'Button', excludeStories: /.*Data$/ };

export const actionsData = {
  onClickPrimary: action('Click on Primary Button'),
};

export const PrimaryButton = () => ({
  components: { MsButton },
  template: '<ms-button @click="onClickPrimary">Primary</ms-button>',
  methods: actionsData,
});
