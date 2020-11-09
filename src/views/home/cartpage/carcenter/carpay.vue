<template>
  <div class="pay">
    <div class="left">
      <p>合计: <span>{{price[1] + xuangou[0]}}</span> <i>已优惠￥{{price[2]}}</i></p>
      <b>不含运费和综合税</b>
    </div>
    <router-link
    :class="{btn:good.length ==0}" 
    :disabled="good.length == 0" 
    :to="{path:'/pay',query:{price:price[1] + xuangou[0],house_id:goods[0].house_id}}" tag="button"
    >结算{{type}}({{price[0]+xuangou[1]}})</router-link>
  </div>
</template>

<script>
export default {
  props:["goods"],
  data(){
    return {
      type:'郑州保税仓',
      wu:[]
    }
  },
  computed: {
    price(){
      const house = this.goods[0].house_id
      return this.$store.getters['cart/price'](house)
    },
    good(){
      const house = this.goods[0].house_id
      this.$store.commit({
        type:'cart/paygoods',
        house
      })
      if(house == 200){
        return this.$store.state.cart.payzhengzhou
      }else{
        return this.$store.state.cart.payjapan
      }
    },
    xuangou(){
      if(this.goods[0].house_id == 200){
         this.wu = this.$store.state.cart.goodsList
        const goodsone = this.wu.filter(item=>item.checked == true)
        if(goodsone.length == 0){
          return [0,0]
        }else{
          return [goodsone[0].final_price,goodsone[0].num]
        }
      }else{
         this.wu = this.$store.state.cart.goodsjapan
        const goodsone = this.wu.filter(item=>item.checked == true)
        if(goodsone.length == 0){
          return [0,0]
        }else{
          return [goodsone[0].final_price,goodsone[0].num]
        }
      }
    }
  },
  mounted(){
    if(this.goods[0].house_id == 200){
      this.type = "郑州保税仓"
    }else{
      this.type = "日本仓"
    }
  }
}
</script>

<style lang="stylus" scoped>
.pay
  padding-left .15rem
  position sticky 
  bottom 0
  background #fff
  z-index 10
  padding-top .2rem
  display flex
  padding-right .05rem
  justify-content space-between
  align-items center
  .left
    display flex
    flex-direction column
    p
      font-size .12rem
      span 
        font-size .16rem
        font-weight bold
        color #d84f49
      i 
        font-size .12rem
        line-height .12rem
        color #d84f49
    b
      font-size .12rem
      color #9e9e9e
  button 
    width 1.37rem
    height .4rem
    background #d84f49
    border none 
    outline none
.btn
  background #ccc!important
</style>
