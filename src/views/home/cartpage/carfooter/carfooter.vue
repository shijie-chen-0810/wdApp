<template>
  <div class="footer">
    <div class="top">大家都在买</div>
    <van-swipe class="my-swipe" :autoplay="0" indicator-color="white" :touchable="true">
      <van-swipe-item v-for="(datalist,index) in goods" :key="index">
        <ul>
          <router-link tag="li" v-for="key in datalist" :key="key.goods_id" :to="{name:'detail',params:{id:key.goods_id}}">
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
          </router-link>
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
  props:['list'],
  computed:{
    goods(){
      const list1 = this.list.slice(0,6)
      const list2 = this.list.slice(6,12)
      const list3 = this.list.slice(12,18)
      const list4 = this.list.slice(18)
      return [list1,list2,list3,list4]
    }
  }
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