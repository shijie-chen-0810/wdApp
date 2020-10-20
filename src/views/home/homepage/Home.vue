<template>
  <div>
    <van-search v-model="value" placeholder="请输入搜索关键词" class="search-box" />
    <div class="fix-wh536">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
      </van-swipe>
    </div>
    <div class="health">
      <img src="https://oss1.wandougongzhu.cn/8e415cd8201d8d1933ba8bbedc7a8d33.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @click='test'>
    </div>
    <sort></sort>
  </div>
</template>

<script>
import Vue from 'vue'
import { Search } from 'vant';
import { Swipe, SwipeItem } from 'vant';


import Sort from './HomeSort'

Vue.use(Search);
Vue.use(Swipe)
Vue.use(SwipeItem)
export default {
  data(){
    return {
      value:''
    }
  },
  components:{
    Sort
  },
  methods:{
    test(){
      this.$router.replace('/detail')
    }
  }
}
</script>

<style scoped lang='stylus'>
.my-swipe .van-swipe-item 
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #39a9ed;
  
.search-box
  padding 0.07rem 0.12rem
  height 0.44rem
.van-cell
  padding 3px 8px 3px 0
.fix-wh536
  width 100%
  padding-bottom 53.6%
  position relative
  .my-swipe
    position absolute
    width 100%
    height 100%
.health
  height 0.77rem
  width 100%
  >img 
    width 100%
    height 100%
    display block

</style>
