<template>
  <div class="content">
    <div class="search">
      <input v-model="value" placeholder="输入商品或品牌名称" class="search-box" />
    </div>
    <better-scroll :isLoadingMore='true' @getmoregoods='getmoregoods' ref='bscroll'>
      <swipe-x></swipe-x>
      <div class="health">
        <img src="https://oss1.wandougongzhu.cn/8e415cd8201d8d1933ba8bbedc7a8d33.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @click='test'>
      </div>
      <sort></sort>
      <div class="new-con">
        <p>
          <img src="https://oss3.wandougongzhu.cn/9b77a5f16a29215e35d6de02fe0deb2b.gif?x-oss-process=image/resize,w_484" alt="" @load='refresh'>
        </p>
        <p>
          <img src="https://oss3.wandougongzhu.cn/00a791a83fb76bb8b12f4c8a3186df6e.png?x-oss-process=image/resize,w_443/format,webp" alt="" @load='refresh'>
        </p>
      </div>
      <div class="holiday">
        <p>
          <img src="https://oss3.wandougongzhu.cn/5c0c81a629d340f2a0ef6753ea3d001d.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'>
        </p>
        <p>
          <img src="https://oss4.wandougongzhu.cn/24057f1e842d6d55a5f3047fac9a611d.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'>
        </p>
      </div>
      <div class="holiday">
        <p>
          <img src="https://oss5.wandougongzhu.cn/352ec7ff13e1dae56ab092176c292bb2.png?x-oss-process=image/resize,w_622/format,webp" alt="" @load='refresh'>
        </p>
        <p>
          <img src="https://oss3.wandougongzhu.cn/a7cc713af9a83aaed55e71047967a9c5.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'>
        </p>
      </div>
      <div class="holiday">
        <p>
          <img src="https://oss3.wandougongzhu.cn/e9674e8f48779e075745c0425231fdfe.png?x-oss-process=image/resize,w_622/format,webp" alt="" @load='refresh'>
        </p>
        <p>
          <img src="https://oss3.wandougongzhu.cn/d13ae93bcd4507c853483021b4b17331.png?x-oss-process=image/resize,w_621/format,webp" alt="" @load='refresh'>
        </p>
      </div>
      <h4>限时秒杀</h4>
      <swipe-y></swipe-y>
      <h4>日本一物</h4>
      <div class="one-thing">
        <p>
          <img src="https://oss4.wandougongzhu.cn/7a9f14083a40100d36dcdf2613249d3a.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'>
        </p>
        <p>
          <img src="https://oss5.wandougongzhu.cn/e16770acf98f9ead0f775a041d53f370.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'>
        </p>
      </div>
      <h4>权威榜单</h4>
      <authority-list></authority-list>
      <div class='recommand'>
        <img src="https://oss5.wandougongzhu.cn/f16f89df44cf7f8d9590b5c926ded7b3.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'>
      </div>
      <goods-list></goods-list>
    </better-scroll>
  </div>
</template>

<script>


import BetterScroll from 'components/common/bscroll/BetterScroll'
import Sort from './HomeSort'
import SwipeX from './Swipe-X'
import SwipeY from './Swipe-Y'
import AuthorityList from './AuthorityList'
import GoodsList from './GoodsList'

export default {
  data(){
    return{
      value:'',
      timer: 0
    }
  },
  components:{
    Sort,
    SwipeX,
    SwipeY,
    BetterScroll,
    AuthorityList,
    GoodsList
  },
  methods:{
    test(){
      this.$router.push('/detail')
    },
    getmoregoods(){
      console.log('loadingmore')
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
.content
  padding-top 0.44rem
  height 100vh
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
  background #fff
  input 
    width 100%
    height 100%
    border none
    padding-left 0.275rem
    background-color #f3f3f3

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
.recommand
  img 
    width 100%
    height 100%
</style>
