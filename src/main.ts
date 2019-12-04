import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/index';
import 'lib-flexible/flexible';
import '@/assets/scss/common.scss';
import 'vant/lib/index.css';
import 'amfe-flexible/index.js'
import { Button } from 'vant'
Vue.use(Button)



Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: (h:any):any => h(App),
}).$mount('#app');
