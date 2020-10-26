<template>
  <div class="fix-wh536">
        <van-swipe class="my-swipe" indicator-color="white" autoplay="false">
          <van-swipe-item><van-image src="https://oss1.wandougongzhu.cn/f0111ad6e7c64a79064d4cbb44a3d799.png?x-oss-process=image/resize,w_1242/format,webp" alt=""></van-image></van-swipe-item>
          <van-swipe-item><van-image src="https://oss4.wandougongzhu.cn/6718349957128cc5fe233dbc325e2e02.png?x-oss-process=image/resize,w_1242/format,webp" alt=""></van-image></van-swipe-item>
          <van-swipe-item><van-image src="https://oss4.wandougongzhu.cn/7fcc6eb757c852ebe089c3858c3da3ea.png?x-oss-process=image/resize,w_1242/format,webp" alt=""></van-image></van-swipe-item>
          <van-swipe-item><van-image src="https://oss2.wandougongzhu.cn/84f92e57f3c61cb54acfb004db2a2c6e.png?x-oss-process=image/resize,w_1242/format,webp" alt=""></van-image></van-swipe-item>
        </van-swipe>
      </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  data(){
    return {
      value:''
    }
  },
}
</script>

<style lang='stylus' scoped>
.my-swipe .van-swipe-item 
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  img 
    width 100%
    height 100%
.fix-wh536
  width 100%
  padding-bottom 53.6%
  position relative
  .my-swipe
    position absolute
    width 100%
    height 100%
.van-image
  height 100%
  display flex
  justify-content center
  align-items center
  i
    font-size 0.5rem
</style>
