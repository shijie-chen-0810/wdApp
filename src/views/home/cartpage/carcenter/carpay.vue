<template>
  <div class="pay">
    <div class="left">
      <p>合计: <span>{{$parent.$parent.goodsAll(goods)[1]}}</span> <i>已优惠￥{{$parent.$parent.goodsAll(goods)[2]}}</i></p>
      <b>不含运费和综合税</b>
    </div>
    <router-link :to="{path:'/pay',query:{price:$parent.$parent.goodsAll(goods)[1]}}" tag="button">结算郑州保税仓({{$parent.$parent.goodsAll(goods)[0]}})</router-link>
  </div>
</template>

<script>
export default {
  props:["goods"]

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
</style>