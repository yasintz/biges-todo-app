import Vue from 'vue';
import App from './App.vue';
import router from './router';

import Input from './components/common/Input';
import Button from './components/common/Button';

Vue.config.productionTip = false;

Vue.component('VInput', Input);
Vue.component('VButton', Button);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
