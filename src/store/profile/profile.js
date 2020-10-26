const state = {
  cellphonenumber:'15388599827',
  verifycode:'',
}
const mutations = {
  changephonenum(state, phoneobj){
    state.cellphonenumber = phoneobj.cellphonenumber
    state.verifycode = phoneobj.verifycode
  }
}

export default {
  namespace:true,
  state,
  mutations
}