<template>
  <div class="content">
    <div class="search">
      <router-link tag="input" to="/search" placeholder="输入商品或品牌名称" />
      <span class="iconfont">&#xe65c;</span>
    </div>
    <better-scroll :isLoadingMore='false' @getmoregoods='getmoregoods' ref='bscroll' class="betterscroll">
      <swipe-x></swipe-x>
      <div class="health">
        <van-image src="https://oss1.wandougongzhu.cn/8e415cd8201d8d1933ba8bbedc7a8d33.png?x-oss-process=image/resize,w_1242/format,webp" alt=""></van-image>
      </div>
      <sort></sort>
      <div class="new-con">
        <p>
          <van-image src="https://oss3.wandougongzhu.cn/9b77a5f16a29215e35d6de02fe0deb2b.gif?x-oss-process=image/resize,w_484" alt="" @load='refresh'></van-image>
        </p>
        <p>
          <van-image src="https://oss3.wandougongzhu.cn/00a791a83fb76bb8b12f4c8a3186df6e.png?x-oss-process=image/resize,w_443/format,webp" alt="" @load='refresh'></van-image>
        </p>
      </div>
      <div class="holiday">
        <p>
          <van-image src="https://oss3.wandougongzhu.cn/5c0c81a629d340f2a0ef6753ea3d001d.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'></van-image>
        </p>
        <p>
          <van-image src="https://oss4.wandougongzhu.cn/24057f1e842d6d55a5f3047fac9a611d.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'></van-image>
        </p>
      </div>
      <div class="holiday">
        <p>
          <van-image src="https://oss5.wandougongzhu.cn/352ec7ff13e1dae56ab092176c292bb2.png?x-oss-process=image/resize,w_622/format,webp" alt="" @load='refresh'></van-image>
        </p>
        <p>
          <van-image src="https://oss3.wandougongzhu.cn/a7cc713af9a83aaed55e71047967a9c5.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'></van-image>
        </p>
      </div>
      <div class="holiday">
        <p>
          <van-image src="https://oss3.wandougongzhu.cn/e9674e8f48779e075745c0425231fdfe.png?x-oss-process=image/resize,w_622/format,webp" alt="" @load='refresh'></van-image>
        </p>
        <p>
          <van-image src="https://oss3.wandougongzhu.cn/d13ae93bcd4507c853483021b4b17331.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'></van-image>
        </p>
      </div>
      <h4>限时秒杀</h4>
      <swipe-y></swipe-y>
      <JapanOneThing @refresh = 'refresh' :imgList='imgList'></JapanOneThing>
      <h4>权威榜单</h4>
      <authority-list :data='authoritylistdata'></authority-list>
      <div class='recommand'>
        <van-image src="https://oss5.wandougongzhu.cn/f16f89df44cf7f8d9590b5c926ded7b3.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'></van-image>
      </div>
      <goods-list :list='goodsList'></goods-list>
      <div class="loading-icon" v-if='total!==goodsList.length'>
        <van-loading type="spinner" size="18px">加载中</van-loading>
      </div>
      <bot-cpn ref="bot"></bot-cpn>
    </better-scroll>
  </div>
</template>

<script>
import authoritylistdata from 'assets/data/AuthorityList'
import { getGoods } from 'network/homeRequest/homeRequest'

import Vue from 'vue'
import { Loading } from 'vant';
Vue.use(Loading);

import BetterScroll from 'components/common/bscroll/BetterScroll'
import Sort from 'components/content/HomeSort'
import SwipeX from './homecomponents/Swipe-X'
import SwipeY from './homecomponents/Swipe-Y'
import JapanOneThing from 'components/content/JapanOneThing'
import AuthorityList from './homecomponents/AuthorityList'
import GoodsList from 'components/content/GoodsList'
import BotCpn from 'components/content/BotCpn'

export default {
  data(){
    return{
      imgList:['https://oss4.wandougongzhu.cn/fa60681750d104f54e426560d3d1789e.png?x-oss-process=image/resize,w_1242/format,webp','https://oss2.wandougongzhu.cn/f963e4b9e401800fba8e380700344e6c.png?x-oss-process=image/resize,w_1242/format,webp'],
      timer: 0,
      authoritylistdata,
      goodsList:[],
      offset:0,
      total:-1,
      interSectionObserver:null
    }
  },
  components:{
    Sort,
    SwipeX,
    SwipeY,
    BetterScroll,
    JapanOneThing,
    AuthorityList,
    GoodsList,
    BotCpn
  },
  mounted(){
    this.interSectionObserver = new IntersectionObserver((entries)=> {
    // 如果不可见，就返回
    if (entries[0].intersectionRatio <= 0) return;
    // loadItems(10);
    this.getmoregoods()
  })
    this.interSectionObserver.observe(this.$refs.bot.$el)
  },
  methods:{
    async loadData(offset){
      try{
        const tmpResult = await getGoods(offset,10)
        this.goodsList.push(...tmpResult.data)
        this.total = tmpResult.total
        this.offset += 10
      }catch(e){
        this.$toast('请求超时')
      }
    },
    async getmoregoods(){
      if(this.offset===this.total&&this.offset!==0){
        this.$toast('没有更多了')
        this.$refs.bscroll.bscroll.finishPullUp()
        return
      }
      await this.loadData(this.offset)
      this.$refs.bscroll.bscroll.refresh()
    },
    refresh(){
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        this.$refs.bscroll.bscroll.refresh()
      },300)
    }
  },
  
}
</script>

<style scoped lang='stylus'>
.betterscroll
  flex 1
.content
  padding-top 0.44rem
  height 100vh
  display flex
  padding-bottom 0.49rem
  overflow-y scroll
.search
  position fixed
  top 0
  left 0
  right 0
  height 0.44rem
  padding 0.07rem 0.12rem
  z-index 999
  background rgba(249, 249, 249,.92)
  input 
    width 100%
    height 100%
    border none
    font-size 0.14rem
    padding-left 0.275rem
    background-color #f3f3f3
  span 
    position absolute
    top 0.12rem
    left 0.2rem
    font-size 0.14rem
h4
  padding 0.1rem 0.12rem
  font-size 0.2rem
.health
  height 0.77rem
  width 100%
  >img 
    width 100%
    height 100%
    display block
.new-con
  display flex
  p:first-child
    flex 800
    img 
      width 100%
      height 100%
  p:last-child
    flex 442
    img
      width 100%
      height 100%
.holiday
  display flex
  p
    flex 1
    img 
      width 100%
      height 100%

.recommand
  img 
    width 100%
    height 100%
.loading-icon
  height 0.41rem
  line-height 0.41rem
  background-color white
  text-align center
</style>
