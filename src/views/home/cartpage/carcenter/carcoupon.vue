<template>
  <div class="coupon">
    <p>优惠卷</p>
    <p>再买129元减<span>29元</span><i class="iconfont">&#xe60c;</i></p>
  </div>
</template>

<script>
export default {

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