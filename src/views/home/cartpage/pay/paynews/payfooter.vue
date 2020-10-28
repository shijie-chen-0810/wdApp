<template>
  <div class="footer">
    <div class="copy">提交订单则表示您同意<a href="https://m.wandougongzhu.cn/user/rulesdown?act_id=435">《用户购买协议》</a></div>
    <div class="price">
      <div class="left">
        合计<span>￥{{price}}</span>
      </div>
      <div class="right">
        <button>确认支付</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['price']
}
</script>

<style lang="stylus" scoped>
.footer
  width 100vw
  height .7rem
  background #fff
  padding 0 .05rem 0 .15rem
  .copy
    font-size .12rem
    line-height .2rem
    color #6e6e6e
    a
      color #6e6e6e
  .price
    height .5rem 
    display flex
    justify-content space-between
    .left
      font-size .12rem
      line-height .5rem
      color #000
      span 
        font-size .17rem
        color #ea4141
        line-height .5rem
    .right
      button
        border none 
        outline none
        margin-top .05rem
        line-height: .4rem;
        width: 1.4rem;
        background: #ea4141;
        color: #fff;
        text-align: center;
</style>