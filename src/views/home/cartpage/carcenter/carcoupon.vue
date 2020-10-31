<template>
  <div class="coupon">
    <p>满额减</p>
    <p>买{{price[3]}}元减<span>{{price[4]}}元</span><i class="iconfont">&#xe60c;</i></p>
  </div>
  
</template>

<script>
export default {
  props:["goods"],
  computed:{
    price(){
      const house = this.goods[0].house_id
      return this.$store.getters['cart/price'](house)
    }
  }
}
</script>

<style lang="stylus" scoped>
.coupon
  overflow hidden
  margin .14rem 0 0
  display flex
  align-items center
  p:first-child
    border-radius .04rem
    background #d84f49
    color #fff
    text-align center
    font-size .12rem
    line-height .12rem
    padding .03rem
    margin 0 .05rem 0 .32rem
  p:last-child
    font-size .14rem
    line-height .14rem
    span 
      color #d84f49
      margin-left .02rem
</style>