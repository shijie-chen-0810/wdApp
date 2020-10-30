<template>
  <div class="all">
    <div class="top">
      <div class="left">本单支付金额</div>
      <div class="right">￥{{price}}</div>
    </div>
    <div class="bottom">
      <div class="left">
        <div class="top">使用第三方平台支付:</div>
        <div class="bottom">支付宝支付</div>
      </div>
      <div class="right">
        <img src="~assets/images/see/payprice.gif" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    price(){
      return this.$route.query.price
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.all
  >div
    border_1px(0 0 1px 0,solid ,#ccc)
    padding .1rem 0
    display flex
    justify-content space-between
    align-content center
  .top
    >div
      font-size .14rem
      line-height .24rem
    .right
      color #ee1414
  .bottom
    .left
      width 1.2rem
      .top
        line-height .22rem
        font-size .12rem
        color #9d9d9d
      .bottom
        line-height .4rem
        font-size .14rem
        text-align right
        background url('~assets/images/see/payprice.png') no-repeat left center
        background-size .4rem .4rem
    .right
      width .2rem
      align-self center
      img 
        display block
        width 100%
        height .15rem
</style>