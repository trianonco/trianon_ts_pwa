import Vue from 'vue'
import App from './App.vue'
import router from './shared/routes/index.routes'
import store from './shared/store/store'
import './registerServiceWorker'

import { config } from "./shared/database/firebase.config";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";
import "firebase/functions";
import "firebase/storage";
// Init Vendors & Services //
firebase.initializeApp(config);


import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

import VLazyImagePlugin from "v-lazy-image";
Vue.use(VLazyImagePlugin);

import VueGeolocation from "vue-browser-geolocation";
Vue.use(VueGeolocation);

import VueAnalytics from "vue-analytics";
Vue.use(VueAnalytics, { id: "UA-138600827-1" });

import VueFacebookPixel from 'vue-analytics-facebook-pixel'
Vue.use(VueFacebookPixel);

import * as VueGoogleMaps from 'vue2-google-maps';
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDIwlZ8kuzsE9T0_1OMhN6GoeQYXT7pvus',
    libraries: 'places',
    // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }
});



console.clear();
console.log('');
console.group(' Trianon PWA Welcome ! ');
console.warn('  --------------------------------------------- ');
console.warn(' |                                             |');
console.warn(' |            TRIANON PWA APP                  |');
console.warn(' |                                             |');
console.warn(' | + By Trianon Colombia                       |');
console.warn(' | + Updated at 18/04/19                       |');
console.warn(' | + Contact with jl.mayorga236@gmail.com      |');
console.warn(' | + Thanks, Gracias, ありがとう, 谢谢          |');
console.warn(' |                                             |');
console.warn('  --------------------------------------------- ');
console.groupEnd();
console.log('');


Vue.filter('toCurrency', function (value: any) {
  if (typeof value !== "number") {
    return value;
  }
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0
  });
  return formatter.format(value);
});


const FACEBOOK_CODE = '984344015003425';
const FACEBOOK_EMAIL = 'trianonoficial@gmail.com';
(Vue as any).analytics.fbq.init(FACEBOOK_CODE, {
  em: FACEBOOK_EMAIL
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
