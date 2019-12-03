import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'lib-flexible'
import '@/assets/scss/common.scss'

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h:any):any => h(App),
}).$mount('#app');
