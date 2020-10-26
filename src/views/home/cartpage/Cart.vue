<template>
  <div class="all">
    <div class="header">
      <span class="iconfont" @click="back">&#xe60b;</span>
      <h2>购物袋</h2>
      <p @click="click">{{operation}}</p>
    </div>
    <div class="info">
      <cartime></cartime>
      <carcenter v-if="zhengzhou.length != 0" :goods="zhengzhou" ref="zhengzhou"></carcenter>
      <carcenter v-if="japan.length != 0" :goods="japan" ref="japan"></carcenter>
    </div>
    <carfooter :list="goodsList"></carfooter>
  </div>
</template>

<script>
import cartime from './carhead/cartime'
import carcenter from './carcenter/carcenter'
import carfooter from './carfooter/carfooter'

// import car from 'network/cartRequest/cartRequest'

import {getGoods} from 'network/homeRequest/homeRequest'
export default {
  data(){
    return {
      car:[],
      operation:'编辑',
      goodsList:[]
    }
  },
  components:{
    cartime,
    carcenter,
    carfooter
  },
  methods:{
    back(){
      this.$router.go(-1)
    },
    click(){
      this.operation = this.operation === "编辑" ? "完成" : "编辑"
    },
    delete(goods){
      const index = this.car.findIndex(item=>item === goods)
      this.car.splice(index,1)
      const good1 = this.car.filter(item=>item.house_id === 200)
      const good2 = this.car.filter(item=>item.house_id !== 200)
      const info1 = good1.some(item=>item.checked === false)
      const info2 = good2.some(item=>item.checked === false)
      if(info1) {
        this.$refs.zhengzhou.checked = false
      }else{
        this.$refs.zhengzhou.checked = true
      }
      if(info2){
        this.$refs.japan.checked = false
      }else{
        this.$refs.japan.checked = true
      }
    },
    frg(goods,frg){
      if(goods[0].house_id === 200){
        this.car.forEach(item=>{
          if(item.house_id === 200){
            item.checked = frg
          }
        })
      }else{
        this.car.forEach(item=>{
          if(item.house_id !== 200){
            item.checked = frg
          }
        })
      }
    },
    goodsAll(goods){
      let num1 = 0
      let num2 = 0
      let price1 = 0
      let price2 = 0
      let priceY1 = 0
      let priceY2 = 0
      let case1 = 50
      let case2 = 50
      let jian1 = 8
      let jian2 = 8
      let type1 = 0
      let type2 = 0
      this.car.forEach(item=>{
        if(item.house_id === 200 && item.checked === true){
          num1 += item.num
          if(price1 >= 50 && price1 <= 250){
            case1 = 200
            jian1 = 16 
            type1 = jian1 - 16 + 8
          }else if(price1 >= 250 && price1 <= 650){
            case1 = 400
            jian1 = 50
            type1 = jian1 - 50 + 24
          }else if(price1 >= 650){
            type1 = jian1 + 24
          }
          price1 += item.final_price * item.num
          priceY1 += (item.market_price - item.final_price) * item.num
        }else if((item.house_id !== 200 && item.checked === true)){
          num2 += item.num
          if(price2 >= 50 && price2 <= 250){
            case2 = 200
            jian2 = 16
            type2 = jian2 - 16 + 8
          }else if(price2 >= 250 && price2 <= 650){
            case2 = 400
            jian2 = 50
            type2 = jian2 - 50 + 24
          }else if(price2 >= 650){
            type2 = jian2 + 24
          }
          price2 += item.final_price * item.num
          priceY2 += (item.market_price - item.final_price) * item.num 
        }
      })
      price1 = price1 - type1
      priceY1 = priceY1 + type1
      price2 = price2 - type2
      priceY2 = priceY2 + type2
      if(goods[0].house_id === 200) return [num1,price1,priceY1,case1,jian1]
      return [num2,price2,priceY2,case2,jian2]
    }
  },
  computed:{
    zhengzhou(){
      let goodsZhengzhou = this.car.filter(item=>{ return item.house_id == 200 })
      return goodsZhengzhou
    },
    japan(){
      let goodsJapan = this.car.filter(item=>{ return item.house_id != 200 })
      return goodsJapan
    }
  },
  async mounted(){
    const a = await getGoods(100,24)
    this.goodsList = a.data
    console.log()
    a.data.forEach(item=>{
      this.car.push({
        ...item,
        checked:true,
        num:1
      })
    })
  }
}
</script>

<style lang="stylus" scoped>
.all
  height 100vh
  overflow-y scroll
  padding .44rem 0 0.49rem
  .header
    width 100%
    height 0.44rem
    box-sizing border-box
    border-top 1px solid #e9e9e9 
    border-bottom 1px solid #e9e9e9 
    display flex
    position fixed
    left 0
    top 0
    background #fff
    z-index 999
    justify-content space-between
    padding .12rem .1rem 0 .16rem
    h2
      font-size .14rem
    p
      font-size .14rem
      color #9e9e9e
  .info
    margin-top .15rem
</style>
