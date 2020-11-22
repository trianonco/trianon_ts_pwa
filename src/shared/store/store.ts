import Vue from 'vue'
import Vuex from 'vuex'

import chatModule from './chatModule/index';
import shoppingCartModule from './shoppingCartModule/index';
import inProcessCartModule from './inProcessCartModule/index';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    chatModule,
    shoppingCartModule,
    inProcessCartModule
  }
})
