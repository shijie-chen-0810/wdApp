const state = {
  verifycode:'',
}
const mutations = {
  changephonenum(state, phoneobj){
    state.verifycode = phoneobj.verifycode
  }
}

export default {
  namespace:true,
  state,
  mutations
}