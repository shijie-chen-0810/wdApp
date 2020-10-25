import Vue from 'vue'
import Vuex from 'vuex'
import profile from './profile/profile'

import cart from './cart/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    profile,
    cart
  }
})
