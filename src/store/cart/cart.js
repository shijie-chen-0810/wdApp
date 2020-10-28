import {getCartData} from 'network/cartRequest/cartRequest'
export default {
  namespaced:true,
  state: {
    zhengzhou:[],
    japan:[],
    payzhengzhou:[],
    payjapan:[]
  },
  mutations: {
    goods(state,a){
      a.forEach(item=>{
        item.checked = Number(item.checked)
        item.num = Number(item.num)
      })
      state.zhengzhou = a.filter(item=>item.house_id == 200)
      state.japan = a.filter(item=>item.house_id != 200)
    },
    checked(state,{checked,house}){
      if(house == 200){
        state.zhengzhou.forEach(item=>item.checked = checked)
      }else{
        state.japan.forEach(item=>item.checked = checked)
      }
    },
    onechecked(state,{house,goods}){
      if(house == 200){
        const index = state.zhengzhou.findIndex(item=>item == goods)
        state.zhengzhou[index].checked = state.zhengzhou[index].checked == 0?1:0
      }else{
        const index = state.japan.findIndex(item=>item == goods)
        state.japan[index].checked = state.japan[index].checked == 0?1:0
      }
    },
    addNum(state,{house,goods}){
      if(house == 200){
        const index = state.zhengzhou.findIndex(item=>item == goods)
        if(state.zhengzhou[index].num < state.zhengzhou[index].residue_dount) state.zhengzhou[index].num ++
      }else{
        const index = state.japan.findIndex(item=>item == goods)
        if(state.zhengzhou[index].num < state.zhengzhou[index].residue_dount) state.zhengzhou[index].num ++
      }
    },
    jianNum(state,{house,goods}){
      if(house == 200){
        const index = state.zhengzhou.findIndex(item=>item == goods)
        if(state.zhengzhou[index].num > 1) state.zhengzhou[index].num --
      }else{
        const index = state.japan.findIndex(item=>item == goods)
        if(state.zhengzhou[index].num > 1) state.zhengzhou[index].num --
      }
    },
    delete(state,{house,goods}){
      if(house == 200){
        const index = state.zhengzhou.findIndex(item=>item == goods)
        state.zhengzhou.splice(index,1)
      }else{
        const index = state.japan.findIndex(item=>item == goods)
        state.japan.splice(index,1)
      }
    },
    paygoods(state,{house}){
      if(house == 200){
        state.payzhengzhou =  state.zhengzhou.filter(item=>item.checked == true)
      }else{
        state.payjapan =  state.japan.filter(item=>item.checked == true)
      }
    }
  },
  actions: {
     async goods(context){
         const a = await getCartData(context.rootState.cellphonenumber)
         context.commit('goods',a)
    }
  },
  getters:{
    zhengzhou(state){
      return state.zhengzhou.some(item=>item.checked == 0)
    },
    japan(state){
      return state.japan.some(item=>item.checked == 0)
    },
    price(state){
      return (house)=>{
        let num = 0
        let price = 0
        let priceY = 0
        let c = 50
        let jian = 8
        let type = 0
        let frg = 1
        if(house == 200){
          state.zhengzhou.forEach(item=>{
            if(item.checked == 1){
              num += item.num
              price += item.final_price * item.num
              priceY += (item.market_price - item.final_price) * item.num
              if(price >= 50 && price <= 250){
                c = 200
                jian = 16 
                type = jian - 16 + 8
              }else if(price >= 250 && price <= 650){
                c = 400
                jian = 50
                type = jian - 50 + 24
              }else if(price >= 650){
                type = 74
                frg = 0
              }
            }
          })
        }else{
          state.japan.forEach(item=>{
            if(item.checked == 1){
              num += item.num
              price += item.final_price * item.num
              priceY += (item.market_price - item.final_price) * item.num
              if(price >= 50 && price <= 250){
                c = 200
                jian = 16 
                type = jian - 16 + 8
              }else if(price >= 250 && price <= 650){
                c = 400
                jian = 50
                type = jian - 50 + 24
              }else if(price >= 650){
                type = 74
                frg = 0
              }
            }
          })
        }
        price = price - type
        priceY = priceY + type
        return [num,price,priceY,c,jian,frg]
      }
    },
    paynum(state){
      return (house)=>{
        let num = 0
        if(house == 200){
          state.payzhengzhou.forEach(item=>num+=item.num)
        }else{
          state.payjapan.forEach(item=>num+=item.num)
        }
        return num
      }
    }
  }
}