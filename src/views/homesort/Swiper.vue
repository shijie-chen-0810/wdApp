<template>
  <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white" :duration='200'>
    <van-swipe-item>
      <div class="img-con">
        <img src="https://oss1.wandougongzhu.cn/f3e3eab05ff8acfa0135264c701d651b.png?x-oss-process=image/resize,w_1242/format,webp" alt="">
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="img-con">
        <img src="https://oss4.wandougongzhu.cn/72a4ac8e1d369be61879a8a65fedc8b9.png?x-oss-process=image/resize,w_621/format,webp" alt="">
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="img-con">
        <img src="https://oss2.wandougongzhu.cn/5a0819e7b490e2441c335f8aa8ae0b7c.jpg?x-oss-process=image/resize,w_621/format,webp" alt="">
      </div>
    </van-swipe-item>
    <van-swipe-item>
      <div class="img-con">
        <img src="https://oss5.wandougongzhu.cn/3f29089199a93edd60f24171dca4a242.png?x-oss-process=image/resize,w_621/format,webp" alt="">
      </div>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {

}
</script>

<style lang='stylus' scoped>
.my-swipe
  padding-bottom 0.15rem
.my-swipe .van-swipe-item 
  color #fff
  font-size 20px
  line-height 150px
  text-align center
  background-color #fff
.van-swipe-item 
  display flex
  justify-content center
  align-items center
  .img-con
    width 3.45rem
    height 1.85rem
    border-radius 0.2rem
    overflow hidden
    img 
      width 100%
      height 100%
</style>
