import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MsButton from './components/common/buttons/MsButton.vue';

Vue.component('MsButton', MsButton);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
