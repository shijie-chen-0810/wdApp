<template>
  <div class="footer">
    <div class="top">大家都在买</div>
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="white" :touchable="true">
      <van-swipe-item v-for="n in 4" :key="n">
        <ul>
          <li v-for="key in car" :key="key.goods_id">
            <dl>
              <dt>
                <img :src="key.img_middle" alt="">
              </dt>
              <dd>
                <p>{{key.goods_name}}</p>
                <p>{{key.slogan}}</p>
                <p>￥{{key.final_price}}</p>
              </dd>
            </dl>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  inject:["car"]
}
</script>

<style lang="stylus" scoped>
.footer
  width 100%
  height 4.03rem
  padding .1rem 0 .05rem 0
  .top
    font-size .14rem
    line-height .14rem
    color #000
    margin-bottom .22rem
    margin-left .1rem
  ul
    width 3.75rem
    height 3.5rem
    display flex
    justify-content space-around
    align-content space-between
    flex-wrap wrap
    background #fafafa
    li
      width 1.09rem
      height 1.7rem
      border-radius .1rem
      border 2px solid #ccc
      overflow hidden
      dl
        width 100%
        height 100%
        dt
          width 100%
          height 1.09rem
          img 
            display block
            width 100%
            height 100%
        dd
          width 100%
          margin-top .04rem
          p
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            text-align center
            font-size .12rem
            line-height .12rem
            color #000
          p:first-child
            margin 0 .02rem 0 .06rem
          p:nth-of-type(2)
            margin .06rem .02rem .06rem .06rem
          p:last-child{
            color #d84f49
          }
</style>