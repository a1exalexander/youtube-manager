import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MsButton from './components/common/buttons/MsButton.vue';
import MsInput from './components/common/form/MsInput.vue';
import MsCheckbox from './components/common/form/MsCheckbox.vue';
import MsCheckboxLabel from './components/common/form/MsCheckboxLabel.vue';
import Icon from './components/icons/Icon.vue';
import Container from './components/common/grid/Container.vue';
import Row from './components/common/grid/Row.vue';
import Col from './components/common/grid/Col.vue';
import Divider from './components/common/grid/Divider.vue';
import { isDev, isProd } from './utils';

Vue.config.productionTip = false;

Vue.prototype.$isDev = isDev;
Vue.prototype.$isProd = isProd;

Vue.component('Container', Container);
Vue.component('Row', Row);
Vue.component('Col', Col);
Vue.component('Divider', Divider);
Vue.component('Icon', Icon);
Vue.component('MsButton', MsButton);
Vue.component('MsInput', MsInput);
Vue.component('MsCheckbox', MsCheckbox);
Vue.component('MsCheckboxLabel', MsCheckboxLabel);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
