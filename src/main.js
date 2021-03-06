import Vue from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import filters from '@/filters';
import directives from '@/directives';

Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});

Object.keys(directives).forEach((key) => {
  Vue.directive(key, directives[key]);
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
