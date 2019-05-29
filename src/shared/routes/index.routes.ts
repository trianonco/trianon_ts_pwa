import Vue from "vue";
import Router from "vue-router";


import { HOME_ROUTES } from "./_home.routes";
import { LOGIN_ROUTES } from "./_login.routes";
import { PROFILE_ROUTES } from "./_profile.routes";
import { SHOP_ROUTES } from "./_shop.routes";
import { PRODUCT_ROUTES } from "./_product.routes";
import { ADMIN_ROUTES } from "./_admin.routes";
import { ABOUT_ROUTES } from "./_about.routes";
import { LOGISTICS_ROUTES } from "./_logistics.routes";
import { MAPS_ROUTES } from "./_maps.routes";
import { TERMS_AND_POLICIES_ROUTES } from "./_terms-policies.routes";
import { ERRORS_ROUTES } from "./_error.routes";


Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    ...HOME_ROUTES,
    ...ADMIN_ROUTES,
    ...LOGIN_ROUTES,
    ...SHOP_ROUTES,
    ...PRODUCT_ROUTES,
    ...PROFILE_ROUTES/*,
    ...ABOUT_ROUTES,
    ...LOGISTICS_ROUTES,
    ...ABOUT_ROUTES,
    ...MAPS_ROUTES,
    ...TERMS_AND_POLICIES_ROUTES,
    ...ERRORS_ROUTES
    */
  ]
});
