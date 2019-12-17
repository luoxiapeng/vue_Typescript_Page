import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import 'lib-flexible/flexible'
import 'vant/lib/index.css'
import 'amfe-flexible/index.js'

import { Button, Row, Col,Swipe, SwipeItem,Lazyload,Tabbar, TabbarItem, Tab, Tabs } from 'vant'
Vue.use(Button)
  .use(Row)
  .use(Col)
  .use(Swipe).use(SwipeItem)
  .use(Lazyload).use(Tabbar)
  .use(TabbarItem).use(Tab)
  .use(Tabs);;

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: (h: any): any => h(App)
}).$mount('#app')
