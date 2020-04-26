import Vue from 'vue';
import { AutoComplete, Select, Popover, Divider } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MButton from './components/common/buttons/MButton.vue';
import MSubtle from './components/common/buttons/MSubtle.vue';
import MInput from './components/common/form/MInput.vue';
import MCheckbox from './components/common/form/MCheckbox.vue';
import MCheckboxButton from './components/common/form/MCheckboxButton.vue';
import MSelectItem from './components/common/form/MSelectItem.vue';
import MIcon from './components/common/MIcon.vue';
import Container from './components/common/grid/Container.vue';
import Row from './components/common/grid/Row.vue';
import Col from './components/common/grid/Col.vue';
import MDivider from './components/common/MDivider.vue';
import MTransition from './components/common/animate/MTransition.vue';
import MAccordion from './components/common/animate/MAccordion.vue';
import MPopup from './components/common/MPopup.vue';
import MPopconfirm from './components/common/MPopconfirm.vue';
import { isDev, isProd } from './utils';
import './libs/animate.scss';
import './libs/antd.scss';
import './scss/style.scss';

Vue.config.productionTip = false;

Vue.prototype.$isDev = isDev;
Vue.prototype.$isProd = isProd;

// Grid
Vue.component('Container', Container);
Vue.component('Row', Row);
Vue.component('Col', Col);

// Helpers
Vue.component('MDivider', MDivider);
Vue.component('MIcon', MIcon);
Vue.component('MTransition', MTransition);
Vue.component('MAccordion', MAccordion);

// Componetns
Vue.component('MButton', MButton);
Vue.component('MInput', MInput);
Vue.component('MCheckbox', MCheckbox);
Vue.component('MCheckboxButton', MCheckboxButton);
Vue.component('MSubtle', MSubtle);
Vue.component('MPopup', MPopup);
Vue.component('MPopconfirm', MPopconfirm);
Vue.component('MSelectItem', MSelectItem);

Vue.use(AutoComplete);
Vue.use(Select);
Vue.use(Popover);
Vue.use(Divider);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
