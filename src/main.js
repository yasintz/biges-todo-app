import Vue from 'vue';
import App from './App.vue';
import router from './router';
import i18n from './i18n';
import ApiService from './api';
import store from './store';
import LocalStorages from './lib/localStorage';

import VueToast from 'vue-toast-notification';
import VueDropdown from 'vue-dropdowns';

import Input from './components/common/Input';
import Button from './components/common/Button';
import TrashIcon from './components/common/TrashIcon';

import 'vue-toast-notification/dist/theme-default.css';

const { userLocalStorage } = LocalStorages;

Vue.use(VueToast);

Vue.config.productionTip = false;

Vue.prototype.$apiService = ApiService;

Vue.component('VInput', Input);
Vue.component('VButton', Button);
Vue.component('VDropdown', VueDropdown);
Vue.component('VTrashIcon', TrashIcon);

router.beforeEach((to, from, next) => {
  const user = userLocalStorage.getItem();

  if (!user && to.name !== 'Login') {
    next({ name: 'Login' });
    return;
  }

  if (to.name === 'Login' && user) {
    next({ name: 'Home' });
    return;
  }

  next();
});

new Vue({
  render: (h) => h(App),
  store,
  i18n,
  router,
}).$mount('#app');
