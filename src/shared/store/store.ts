import Vue from 'vue'
import Vuex from 'vuex'

import chatModule from './chatModule/index';
import shoppingCartModule from './shoppingCartModule/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chatModule,
    shoppingCartModule
  }
})
