<template>
  <div>
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

<style lang="stylus">
div 
  .scroll-box
    padding 0 0 0 .55rem
    background-color transparent
    width 100%
    .notice-swipe 
      width 100%
      text-align right
      height: .4rem
      line-height: .4rem
      color #fed8be
      font-size .14rem
</style>