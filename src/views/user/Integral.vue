<template>
  <div class="box-con">
    <div class="balance">
      <span>积分余额</span>
      <em>积分规则</em>
      <div class="price-box">
        <b>0</b>
        <i>下单可抵0.00元</i>
      </div>
      <div class="verscroll">
        <van-notice-bar :scrollable="false" class="scroll-box">
        <van-swipe
          vertical
          class="notice-swipe"
          :autoplay="3000"
          :show-indicators="false"
        >
          <van-swipe-item>顺丰物流极速即达</van-swipe-item>
          <van-swipe-item>会员专享价低至7.5折</van-swipe-item>
          <van-swipe-item>客服无需排队1V1</van-swipe-item>
        </van-swipe>
      </van-notice-bar>
      </div>
    </div>
    <div class="desc">
      -暂无积分明细-
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { NoticeBar } from 'vant';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(NoticeBar);
export default {

}
</script>

<style lang="stylus" scoped>
.box-con
  display flex
  flex-direction column
  align-items center
  .balance
    margin-top .1rem
    width 3.6rem
    height 2rem
    background url("~assets/images/profile/integral.png") no-repeat 0 0/3.6rem 2rem
    color #fff
    position relative
    span 
      display block
      padding .12rem .15rem
      font-size .16rem
    em
      position absolute
      top .16rem
      right .15rem
      font-size .12rem
    .price-box
      padding .2rem .15rem
      b 
        font-size .4rem
        font-weight normal
      i 
        font-size .13rem
    .verscroll
      .scroll-box
        background-color transparent
        width 100%
        .notice-swipe 
          width 100%
          height: .4rem
          line-height: .4rem
          color #fff
          font-size .13rem
  .desc 
    color #666
    font-size .14rem
    margin-top .1rem
</style>