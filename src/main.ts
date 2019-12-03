import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import '@/assets/scss/common.scss'
import 'lib-flexible'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
