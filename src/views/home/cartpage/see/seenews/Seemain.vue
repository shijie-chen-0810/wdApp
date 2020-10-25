<template>
  <div class="main">
    <div class="top">活动规则
      <div class="dian1"></div>
      <div class="dian2"></div>
    </div>
    <div class="news">
      <div>
        <div class="left">1</div>
        <div class="right">
          <p>活动日期？</p>
          <p>2020-10-01 00:00 至 2020-10-31 24:00</p>
        </div>
      </div>
      <div>
        <div class="left">2</div>
        <div class="right">
          <p>如何参加活动？</p>
          <p>活动期间在豌豆公主成功下单的新用户，即可参加活动</p>
        </div>
      </div>
      <div>
        <div class="left">3</div>
        <div class="right">
          <p>什么时候的购物能被计入？？</p>
          <p>活动期内的用户支付的有效订单，都可计入活动</p>
        </div>
      </div>
      <div>
        <div class="left">4</div>
        <div class="right">
          <p>购买哪些商品能被计入？</p>
          <p>在豌豆公主下单的商品就可以，除去红包、拍卖、团购、预售、会员卡订单</p>
        </div>
      </div>
      <div>
        <div class="left">5</div>
        <div class="right">
          <p>多商品一起付款算几笔？</p>
          <p>如果是同一仓库里的东西，多商品一起付款算1笔订单</p>
        </div>
      </div>
      <div>
        <div class="left">6</div>
        <div class="right">
          <p>如何领取奖品？</p>
          <p>完成订单，活动页面点击领取奖励，即可领取，现金将以退款的形式原路返回至您的支付账户（温馨提示：不是立即到账，退款需要5-7个工作日到账）</p>
        </div>
      </div>
      <div>
        <div class="left">7</div>
        <div class="right">
          <p>奖品详情？</p>
          <p>第一单奖品：订单实际支付须大于或等于59元，可返现5元</p>
          <p>第二单奖品：订单实际支付须大于或等于99元，可返现10元</p>
          <p>第三单奖品：订单实际支付须大于或等于99元，可返现15元</p>
          <p>同一用户最高可得30元现金奖励。</p>
        </div>
      </div>
      <div>
        <div class="left">8</div>
        <div class="right">
          <p>可参加几次？</p>
          <p>每个用户可参加一次三单有礼活动</p>
        </div>
      </div>
      <div>
        <div class="left">9</div>
        <div class="right">
          <p>退款规则</p>
          <p>订单支付成功则计算为有效订单，若支付成功后取消订单或发生退货，退款金额 = 订单实付金额 - 本单返现金额，本单实付金额按照0元计算</p>
        </div>
      </div>
      <div>
        <div class="left">10</div>
        <div class="right">
          <p>活动规定</p>
          <p>本次活动期间，如用户存在违规行为（包括但不限于恶意退单、恶意套现、机器作弊），豌豆公主将取消用户获奖资格，并有权收回奖品，同时将依照相关规则进行处罚。</p>
          <p>豌豆公主可根据本活动的实际举办情况对活动规则进行变动或调整，在法律允许的范围内豌豆公主拥有最终解释权。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.main
  padding .15rem
  .top
    height .4rem
    line-height .4rem
    font-size .18rem
    background-color #db4145
    color #fff
    border-radius .1rem .1rem 0 0
    text-align center
    font-family SourceHanSansCN-Medium
    font-weight bold
    position relative
    >div
      width .08rem
      height .08rem
      border-radius 50%
      background-color: #ec674d;
      position absolute
      top .07rem
      box-shadow -.01rem -.01rem 0 0 rgba(177,50,35,.8) inset
    .dian1
      left .07rem
    .dian2
      right .07rem
  .news
    background #FFF6E2
    padding .15rem
    > div
      display flex
      margin-bottom .15rem
      .left
        width .18rem
        height .18rem
        color #9d4f16
        font-size .12rem
        text-align center
        line-height .18rem
        border-radius 50%
        margin-right .1rem
        background-image linear-gradient(0deg,#f8cf9a,#ffeacb)
      .right
        color #000
        font-size .12rem
        line-height .16rem
</style>