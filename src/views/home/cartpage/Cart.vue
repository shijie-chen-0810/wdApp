<template>
  <div class="all">
    <div class="header">
      <span class="iconfont" @click="back">&#xe60b;</span>
      <h2>购物袋</h2>
      <p @click="click">{{operation}}</p>
    </div>
    <div class="info">
      <cartime></cartime>
      <carcenter v-if="$store.state.cart.zhengzhou.length != 0" :goods="$store.state.cart.zhengzhou" ref="zhengzhou"></carcenter>
      <carcenter v-if="$store.state.cart.japan.length != 0" :goods="$store.state.cart.japan" ref="japan"></carcenter>
      <div class="tishi" v-if="$store.state.cart.zhengzhou.length == 0 && $store.state.cart.japan.length == 0 && frag">您的购物车还没有物品，快去找找你喜欢的物品加入购物车吧O(∩_∩)O</div>
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
      operation:'编辑',
      goodsList:[],
      frag:false
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
    }
      
  },
  computed:{
    zhengzhou1(){
      let goodsZhengzhou = this.car.filter(item=>{ return item.house_id == 200 })
      return goodsZhengzhou
    },
    japan(){
      let goodsJapan = this.car.filter(item=>{ return item.house_id != 200 })
      return goodsJapan
    },
    zhengzhou(){
      return (val)=>{
        return this.$store.getters['cart/zhengzhou'](val)
      }
    }
  },
  async mounted(){
    const b = await this.$store.dispatch('cart/goods')
    const a = await getGoods(100,24)
    this.goodsList = a.data
    this.frag = true
  }
}
</script>

<style lang="stylus" scoped>
.all
  height 100vh
  overflow-y scroll
  padding .44rem 0 0.48rem
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
    .tishi
      heigth 3rem
      padding .2rem .1rem
      font-size .16rem
      color #000
      line-height .20rem
      font-weight bold
      text-indent 2
</style>
