<template>
  <div class="one-in-hundred">
    <div class="banner-img-con">
      <div class="banner-img">
        <img :src="bannerImg" alt="">
      </div>
    </div>
    <swiper-y :listNum='3'></swiper-y>
  </div>
</template>

<script>
import SwiperY from './SwiperY'
export default {
  props:{
    bannerImg:String
  },
  components:{
    SwiperY
  }
}
</script>

<style lang='stylus' scoped>
.one-in-hundred
  height 4.05rem
  width 100%
  .banner-img-con
    display flex
    padding-bottom 0.15rem
    justify-content center
    align-items center
    .banner-img
      width 3.45rem
      height 1.85rem
      border-radius 0.1rem
      overflow hidden
      img 
        width 100%
        height 100%
</style>
