<template>
  <div>
    <div class="top">
      <img src="~assets/images/see/bg1-1.png" alt="">
    </div>
    <div class="info">
      <div class="info-t">
        <div class="hong">
          <img src="~assets/images/see/bg2-1.png" alt="">
          <div class="suo">
            <img src="~assets/images/see/bg2-1-g.png" alt="">
          </div>
        </div>
        <div class="hong">
          <img src="~assets/images/see/bg2-2.png" alt="">
          <div class="suo">
            <img src="~assets/images/see/bg2-1-g.png" alt="">
          </div>
        </div>
        <div class="hong">
          <img src="~assets/images/see/bg2-3.png" alt="">
          <div class="suo">
            <img src="~assets/images/see/bg2-1-g.png" alt="">
          </div>
        </div>
      </div>
      <div class="info-c">
        <p>未解锁</p>
        <p>未解锁</p>
        <p>未解锁</p>
      </div>
      <div class="info-b">
        距离活动结束还有: <van-count-down :time="time" format="DD天 HH:mm:ss" class="time"/>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { CountDown } from 'vant';
Vue.use(CountDown);
export default {
  created(){
    this.time = new Date('2020-11-30 00:00:00') - new Date()
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.top
    background url('~assets/images/see/bg1.png') 
    background-size 3.75rem 2rem
    img 
      display block
      height 2rem
      width 100%
  .info
    height 3rem 
    background url('~assets/images/see/bg2.png') no-repeat
    background-size 3.75rem 3rem
    background-position-y -.15rem
    .info-t
      height 1.8rem
      padding .5rem .4rem .1rem
      display flex
      justify-content space-around
      .hong
        position relative
        img 
          display block
          width .9rem
          height 1.2rem
        .suo
          position absolute
          left .32rem
          top .19rem
          img 
            display block
            width .24rem
            height .24rem
    .info-c
      height .24rem
      display flex
      padding 0 .4rem
      justify-content space-around
      p
        width .65rem
        height 100%
        border_1px(1px,solid ,#999,.2rem)
        text-align center
        line-height .24rem
        font-size .12rem
        color #999
    .info-b
      display flex
      width 100%
      height .5rem
      transform scale(.8)
      color #D98F56
      padding .3rem 0 0 .75rem
      .time
        color #D98F56
        margin-left .1rem
</style>