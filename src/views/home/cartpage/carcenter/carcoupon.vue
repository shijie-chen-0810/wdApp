<template>
  <div class="coupon">
    <p>优惠卷</p>
    <p>再买{{term[0]}}元减<span>{{term[1]}}元</span><i class="iconfont">&#xe60c;</i></p>
  </div>
  
</template>

<script>
export default {
  props:["goods"],
  computed:{
    term(){
      const parent = this.$parent.$parent.$parent.goodsAll(this.goods)
      // console.log(parent)
      return [parent[3],parent[4]]
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