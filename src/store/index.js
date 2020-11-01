import Vue from 'vue'
import Vuex from 'vuex'

import profile from './profile/profile'
import cart from './cart/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    islogin:false, //登录状态 true为已登陆
    cellphonenumber: '',  //用户手机号  也为id
    avator:''
  },
  mutations: {
    //登录
    changeislogin(state, loginobj){
      state.islogin = loginobj.islogin
    },
    //退出
    logout(state, logoutobj){
      state.islogin = logoutobj.islogin
    },
    //用户id
    changephonenumroot(state, phoneobj){
      state.cellphonenumber = phoneobj.cellphonenumber
    },
    //用户头像
    changeavatorroot(state, avatorobj) {
      state.avator = avatorobj.avator
    }
  },
  actions: {
  },
  modules: {
    profile,
    cart
  }
})
