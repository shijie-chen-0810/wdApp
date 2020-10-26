<template>
  <div class="home-sort-page">
    <van-nav-bar
      :title="decodeURI($route.path).replace('/homesort/','')"
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #left>
        <span class="iconfont title-bar-left">&#xe775;</span>
      </template>
      <template #right>
        <span class="iconfont title-bar-right">&#xe65c;</span>
      </template>
    </van-nav-bar>
    <better-scroll class="better-scroll" ref="bscroll">
        <swiper></swiper>
        <div class="official">
          <img src="https://oss2.wandougongzhu.cn/b63f128d60feac676b62c0889227f6f9.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'>
        </div>
        <div class="discount-coupon">
          <img src="https://oss4.wandougongzhu.cn/e5d1905f329ec9da970e3bfe8471a2b9.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'>
        </div>
        <sort class="sort"></sort>
        <JapanOneThing :imgList='imgList'></JapanOneThing>
        <h4>一周新草</h4>
        <div class="new-grass-con">
          <ul class="new-grass">
            <li><img src="https://oss4.wandougongzhu.cn/846bb3da9764c0985ead8c8e291f4f7a.png?x-oss-process=image/resize,w_623/format,webp" alt="" @load='refresh'></li>
            <li><img src="https://oss4.wandougongzhu.cn/28c67d28a239043edec88b2f9e5815e4.png?x-oss-process=image/resize,w_620/format,webp" alt="" @load='refresh'></li>
          </ul>
          <ul class="new-grass">
            <li><img src="https://oss2.wandougongzhu.cn/0e6c25a524a3806cfde2b9729631afe1.png?x-oss-process=image/resize,w_623/format,webp" alt="" @load='refresh'></li>
            <li><img src="https://oss5.wandougongzhu.cn/83d0f4af698f075712be915d986a4b29.png?x-oss-process=image/resize,w_620/format,webp" alt="" @load='refresh'></li>
          </ul>
        </div>
        <h4>大牌试用</h4>
        <swiper-y :showMore='true'></swiper-y>
        <h4>权威榜单</h4>
        <authority-list></authority-list>
        <h4>百里挑一</h4>
        <one-in-hundred v-for="(item,index) in bannerImgList" :key='index' :bannerImg='item'></one-in-hundred>
        <h4>更多推荐</h4>
        <goods-list :list='goodsList'></goods-list>
    </better-scroll>
  </div>
</template>

<script>
import { getGoods } from 'network/homeRequest/homeRequest'

import Vue from 'vue';
import { NavBar } from 'vant';

Vue.use(NavBar);

import BetterScroll from 'components/common/bscroll/BetterScroll'
import Swiper from './Swiper'
import Sort from 'components/content/HomeSort'
import JapanOneThing from 'components/content/JapanOneThing'
import SwiperY from './SwiperY'
import AuthorityList from './AuthorityList'
import OneInHundred from './OneInHundred'
import GoodsList from 'components/content/GoodsList'

export default {
  data(){
    return{
      timer:0,
      imgList:['https://oss2.wandougongzhu.cn/2866c8bc27420a5678a4d42ad97de871.png?x-oss-process=image/resize,w_1242/format,webp','https://oss3.wandougongzhu.cn/1b1c6c453a8a230aef32affb78380259.png?x-oss-process=image/resize,w_1242/format,webp'],
      bannerImgList:[
        'https://oss3.wandougongzhu.cn/6d0c87418ca4a4c2d81215b804949e54.jpg?x-oss-process=image/resize,w_1242/format,webp',
        'https://oss1.wandougongzhu.cn/eec5eb96d7aefe233c143879f10ce809.png?x-oss-process=image/resize,w_1242/format,webp',
        'https://oss4.wandougongzhu.cn/73c513d2502084243361be5a83739bd5.png?x-oss-process=image/resize,w_1242/format,webp',
        'https://oss5.wandougongzhu.cn/2f14fcae383899e62e5209408a78f27b.jpg?x-oss-process=image/resize,w_1242/format,webp',
        'https://oss2.wandougongzhu.cn/5508b75edbb2f97c50e548b4f5738052.png?x-oss-process=image/resize,w_1242/format,webp'
      ],
      goodsList:null
    }
  },
  components:{
    JapanOneThing,
    Sort,
    Swiper,
    BetterScroll,
    SwiperY,
    AuthorityList,
    OneInHundred,
    GoodsList
  },
  async mounted(){
    this.goodsList = await getGoods(230,6)
  },
  methods:{
    onClickLeft(){
      this.$router.go(-1)
    },
    onClickRight(){
      this.$router.push('/search')
    },
    refresh(){
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        this.$refs.bscroll.bscroll.refresh()
      },200)
    }
  }
}
</script>

<style lang='stylus' scoped>
.home-sort-page
  display flex
  height 100vh
  flex-direction column
  .better-scroll
    flex 1
    overflow-y scroll
.van-nav-bar
  width 100vw
  height 0.44rem
  background-color #fafafa
  .title-bar-right
    font-size 0.18rem
    font-weight 700
  .title-bar-left
    font-size 0.2rem
    font-weight 900
.sort
  padding-top 0rem
  height 1.76rem
h4
  padding 0.1rem 0.12rem
  font-size 0.2rem
.one-thing
  height 2.4rem
  display flex
  flex-direction column
  justify-content space-between
  p
    height 1.2rem
    img 
      width 100%
      height 100%
.official,.discount-coupon
  img
    width 100%

.new-grass-con 
  display flex
  flex-direction column
  .new-grass
    display flex
    flex-wrap wrap
    li
      flex 662
      img 
        width 100%
</style>
