import { getDetail } from "../../network/detailRequest/detailRequest"

const state = {
    goodsDetail: {}
}
const mutations = {
    setData(state, data){
        state.goodsDetail = data
    }
}
const getters = {
   
}
const actions = {
    async loadData({commit}, id) {
      let data = await getDetail(id)
      commit('setData', data)
    }
}

export default {
    namespaced: true,
    state, 
    mutations, 
    actions,
    getters
}