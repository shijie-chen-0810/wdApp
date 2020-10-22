<template>
  <div class="content">
    <div>
      <div class="search">
        <input v-model="value" placeholder="输入商品或品牌名称" class="search-box" />
      </div>
      <swipe-x></swipe-x>
      <div class="health">
        <img src="https://oss1.wandougongzhu.cn/8e415cd8201d8d1933ba8bbedc7a8d33.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @click='test'>
      </div>
      <sort></sort>
      <div class="new-con">
        <p>
          <img src="https://oss3.wandougongzhu.cn/9b77a5f16a29215e35d6de02fe0deb2b.gif?x-oss-process=image/resize,w_484" alt="">
        </p>
        <p>
          <img src="https://oss3.wandougongzhu.cn/00a791a83fb76bb8b12f4c8a3186df6e.png?x-oss-process=image/resize,w_443/format,webp" alt="">
        </p>
      </div>
      <div class="holiday">
        <p>
          <img src="https://oss3.wandougongzhu.cn/5c0c81a629d340f2a0ef6753ea3d001d.png?x-oss-process=image/resize,w_621/format,webp" alt="">
        </p>
        <p>
          <img src="https://oss4.wandougongzhu.cn/24057f1e842d6d55a5f3047fac9a611d.png?x-oss-process=image/resize,w_621/format,webp" alt="">
        </p>
      </div>
      <div class="holiday">
        <p>
          <img src="https://oss5.wandougongzhu.cn/352ec7ff13e1dae56ab092176c292bb2.png?x-oss-process=image/resize,w_622/format,webp" alt="">
        </p>
        <p>
          <img src="https://oss3.wandougongzhu.cn/a7cc713af9a83aaed55e71047967a9c5.png?x-oss-process=image/resize,w_621/format,webp" alt="">
        </p>
      </div>
      <div class="holiday">
        <p>
          <img src="https://oss3.wandougongzhu.cn/e9674e8f48779e075745c0425231fdfe.png?x-oss-process=image/resize,w_622/format,webp" alt="">
        </p>
        <p>
          <img src="https://oss3.wandougongzhu.cn/d13ae93bcd4507c853483021b4b17331.png?x-oss-process=image/resize,w_621/format,webp" alt="">
        </p>
      </div>
      <h4>限时秒杀</h4>
      <swipe-y></swipe-y>
    </div>
  </div>
</template>

<script>



import Sort from './HomeSort'
import SwipeX from './Swipe-X'
import SwipeY from './Swipe-Y'



export default {
  created(){
    console.log('create')
  },
  activated(){
    console.log('aaa')
  },
  data(){
    return{
      value:''
    }
  },
  components:{
    Sort,
    SwipeX,
    SwipeY
  },
  methods:{
    test(){
      this.$router.push('/detail')
    }
  }
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
</style>
