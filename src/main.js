import Vue from 'vue';
import {
  AutoComplete, Select, Popover, Divider, Tabs,
} from 'ant-design-vue';
import VueCompositionApi from '@vue/composition-api';
import App from './App.vue';
import router, { routeName, routePath } from './router';
import store from './store';
import MButton from './components/common/buttons/MButton.vue';
import MSubtle from './components/common/buttons/MSubtle.vue';
import MInput from './components/common/form/MInput.vue';
import MCheckbox from './components/common/form/MCheckbox.vue';
import MCheckboxButton from './components/common/form/MCheckboxButton.vue';
import MSelectItem from './components/common/form/MSelectItem.vue';
import MIcon from './components/common/MIcon.vue';
import MContainer from './components/common/grid/MContainer.vue';
import MRow from './components/common/grid/MRow.vue';
import MCol from './components/common/grid/MCol.vue';
import MDivider from './components/common/MDivider.vue';
import MTransition from './components/common/animate/MTransition.vue';
import MAccordion from './components/common/animate/MAccordion.vue';
import MPopup from './components/common/MPopup.vue';
import MPopconfirm from './components/common/MPopconfirm.vue';
import MRadio from './components/common/form/MRadio.vue';
import MSliderTabs from './components/common/navigation/MSliderTabs.vue';
import MBadge from './components/common/MBadge.vue';
import MInputWrapper from './components/common/form/MInputWrapper.vue';
import MAvatar from './components/common/MAvatar.vue';
import {
  isDev, isProd,
} from './config';
import {
  isArray, isFunction, isNumber, isObject, isString,
} from './utils';
import './libs/animate.scss';
import './libs/antd.scss';
import './scss/style.scss';

Vue.config.productionTip = false;

Vue.prototype.$isDev = isDev;
Vue.prototype.$isProd = isProd;
Vue.prototype.$routeName = routeName;
Vue.prototype.$routePath = routePath;
Vue.prototype.$isArray = isArray;
Vue.prototype.$isFunction = isFunction;
Vue.prototype.$isNumber = isNumber;
Vue.prototype.$isObject = isObject;
Vue.prototype.$isString = isString;

// Grid
Vue.component('MContainer', MContainer);
Vue.component('MRow', MRow);
Vue.component('MCol', MCol);

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
Vue.component('MRadio', MRadio);
Vue.component('MSliderTabs', MSliderTabs);
Vue.component('MBadge', MBadge);
Vue.component('MInputWrapper', MInputWrapper);
Vue.component('MAvatar', MAvatar);

Vue.use(VueCompositionApi);
Vue.use(AutoComplete);
Vue.use(Select);
Vue.use(Popover);
Vue.use(Divider);
Vue.use(Tabs);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
