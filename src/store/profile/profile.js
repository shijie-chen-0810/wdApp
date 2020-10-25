const state = {
  cellphonenumber:'15388599827',
  verifycode:'',
  islogin:false
}
const mutations = {
  changephonenum(state, phoneobj){
    state.cellphonenumber = phoneobj.cellphonenumber
    state.verifycode = phoneobj.verifycode
  },
  changeislogin(state, loginobj){
    state.islogin = loginobj.islogin
  },
  logout(state, logoutobj){
    state.islogin = logoutobj.islogin
  }
}

export default {
  namespace:true,
  state,
  mutations
}