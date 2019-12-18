import Vue from "vue";
import Router from "vue-router";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue")
    },
    {
      path: "/classify",
      name: "classify",
      component: () => import("./views/Classify.vue")
    },
    {
      path: "/shopCar",
      name: "shopCar",
      component: () => import("./views/ShopCar.vue")
    },
    {
      path: "/me",
      name: "me",
      component: () => import("./views/Me.vue")
    }
  ]
});
