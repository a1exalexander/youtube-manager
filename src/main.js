import Vue from 'vue';
import { AutoComplete } from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MButton from './components/common/buttons/MButton.vue';
import MSubtle from './components/common/buttons/MSubtle.vue';
import MInput from './components/common/form/MInput.vue';
import MCheckbox from './components/common/form/MCheckbox.vue';
import MCheckboxButton from './components/common/form/MCheckboxButton.vue';
import Icon from './components/common/Icon.vue';
import Container from './components/common/grid/Container.vue';
import Row from './components/common/grid/Row.vue';
import Col from './components/common/grid/Col.vue';
import Divider from './components/common/Divider.vue';
import MTransition from './components/common/animate/MTransition.vue';
import MAccordion from './components/common/animate/MAccordion.vue';
import MPopup from './components/common/MPopup.vue';
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
Vue.component('Divider', Divider);
Vue.component('Icon', Icon);
Vue.component('MTransition', MTransition);
Vue.component('MAccordion', MAccordion);

// Componetns
Vue.component('MButton', MButton);
Vue.component('MInput', MInput);
Vue.component('MCheckbox', MCheckbox);
Vue.component('MCheckboxButton', MCheckboxButton);
Vue.component('MSubtle', MSubtle);
Vue.component('MPopup', MPopup);

Vue.use(AutoComplete);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
