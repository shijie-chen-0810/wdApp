import {getCartData} from 'network/cartRequest/cartRequest'
import {getGoods} from 'network/homeRequest/homeRequest'
export default {
  namespaced:true,
  state: {
    zhengzhou:[],
    japan:[],
    payzhengzhou:[],
    payjapan:[],
    goods:[],
    goodsList:[],
    goodsjapan:[],
  },
  mutations: {
    clear(state){
      state.goodsList.forEach(item=>item.checked = false)
      state.goodsjapan.forEach(item=>item.checked = false)
    },
    huangougoods(state,goods){
      state.goodsList.forEach(item=>{
        if(item == goods){
          item.checked = !item.checked
        }else{
          item.checked = false
        }
      })
    },
    huangougoodsjapan(state,goods){
      state.goodsjapan.forEach(item=>{
        if(item == goods){
          item.checked = !item.checked
        }else{
          item.checked = false
        }
      })
    },
    goods(state,a){
      a = a.filter(item=>item.ctime == 0)
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
        if(state.japan[index].num < state.japan[index].residue_dount) state.japan[index].num ++
      }
    },
    jianNum(state,{house,goods}){
      if(house == 200){
        const index = state.zhengzhou.findIndex(item=>item == goods)
        if(state.zhengzhou[index].num > 1) state.zhengzhou[index].num --
      }else{
        const index = state.japan.findIndex(item=>item == goods)
        if(state.japan[index].num > 1) state.japan[index].num --
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
    },
    paypricegoods(state,{a,time}){
      state.goods= a.filter(item=>item.ctime == time)
    },
    huangou(state,a){
      a.data.forEach(item=>{
        state.goodsList.push({
          ...item,
          num:1,
          checked:false
        })
      })
    },
    huangoujapan(state,a){
      a.data.forEach(item=>{
        state.goodsjapan.push({
          ...item,
          num:1,
          checked:false
        })
      })
    }
  },
  actions: {
    async goods(context) {
      const a = await getCartData(context.rootState.cellphonenumber)
      context.commit('goods',a)
    },
    async paypricegoods(context,time){
      const a = await getCartData(context.rootState.cellphonenumber)
      context.commit('paypricegoods',{a,time})
    },
    async huangou(context) {
      const a = await getGoods(200,24)
      context.commit('huangou',a)
    },
    async huangoujapan(context) {
      const a = await getGoods(300,24)
      context.commit('huangoujapan',a)
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
                c = 250
                jian = 16 
                type = jian - 16 + 8
              }else if(price >= 250 && price <= 650){
                c = 650
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
                c = 250
                jian = 16 
                type = jian - 16 + 8
              }else if(price >= 250 && price <= 650){
                c = 650
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
