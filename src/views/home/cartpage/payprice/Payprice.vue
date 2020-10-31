<template>
  <div>
    <div class="header">
      <div class="left"></div>
      <div class="center">豌豆公主收银台</div>
      <div class="right" @click="guanbi">x</div>
    </div>
    <div class="centent">
      <payconter></payconter>
    </div>
    <div class="bottom">
      <button @click="zhifu">前往支付</button>
    </div>
    <div class="payall" v-if="frg"><div class="pay">支付成功</div></div>
  </div>
</template>

<script>
import payconter from 'views/home/cartpage/payprice/payconter'
import {updateCart} from 'network/cartRequest/cartRequest'
export default {
  data(){
    return {
      frg : false
    }
  },
  components:{
    payconter
  },
  methods: {
    guanbi(){
      this.$router.replace('/cart')
    },
    async zhifu(){
      const goodstime = this.$route.query.time
      const time = new Date().getTime()
      await this.$store.dispatch('cart/paypricegoods',goodstime)
      const goods = this.$store.state.cart.goods
      const user_id = this.$store.state.cellphonenumber
      let arr = []
      goods.forEach(item=>{
        arr.push({
          user_id,
          goods_id:item.goods_id,
          ctime:time,
          order_status:'已完成'
        })
      })
      updateCart(arr)
      this.frg = true
      setTimeout(()=>{
        this.frg = false
        this.$router.replace('/cart')
      },2000)
    }
  },
  
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'

.header
  width 100%
  height .4rem
  display flex
  justify-content space-between
  border_1px(0 0 1px 0,solid , #ccc)
  .left
    width .4rem
    height .4rem
    padding 0 .05rem
  .right
    width .4rem
    height .4rem
    padding 0 .05rem
    line-height .4rem
    font-size .20rem
    text-align center
    color #ccc
  .center
    flex 1
    text-align center
    line-height .4rem
    font-size .16rem
    color #000
.centent
  padding 0 .15rem
.bottom
  padding 0 .15rem
  button
    width 100%
    height .43rem
    margin-top .25rem
    background-color #ee1414
    border none
    outline none
    color #fff
.payall
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  background #999
  opacity .5
  z-index 10000
  .pay
    width 1.5rem
    height .4rem
    border_1px(1px,solid,#ccc,.2rem)
    font-size .14rem
    color #000
    line-height .4rem
    text-align center
    position fixed
    top 0
    left 0
    bottom 0
    right 0
    margin auto
    background #fff
  
</style>