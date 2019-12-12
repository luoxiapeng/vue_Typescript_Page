import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import( './views/Home.vue'),
    },
    {
      path: '/find',
      name: 'find',
      component: () => import( './views/Find.vue'),
    },
    {
      path: '/shopCar',
      name: 'shopCar',
      component: () => import('./views/ShopCar.vue'),
    },
    {
      path: '/me',
      name: 'me',
      component: () => import('./views/Me.vue'),
    }
  ],
});
