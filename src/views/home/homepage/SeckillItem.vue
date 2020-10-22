<template>
  <div class="item">
    <div class="item-img">
      <img src="https://oss3.wandougongzhu.cn/3cb8c17530dffbf3de990df1fa48bc61.png?x-oss-process=image/resize,w_180/format,png" alt="">
    </div>
    <div class="price">
      <span class="item-now-price">￥99</span>
      <span class="item-pre-price">￥249</span>
    </div>
    <div class="item-title">舒适一次性口罩</div>
    <div class="item-state-con">
      <div class="item-state">已结束</div>
    </div>
  </div>
</template>
  
<script>
export default {

}
</script>

<style lang="stylus" scoped>

.item-img
  width 1.04rem
  height 0.97rem
  padding-top 0.07rem
  display flex
  justify-content center
  img 
    width 0.9rem
    height 0.9rem
.price
  height 0.18rem
  font-size 0.12rem
  line-height 0.18rem
  .item-now-price
    color red
  .item-pre-price
    text-decoration line-through
    color #6e6e6e
.item-title
  font-size 0.12rem
  height 0.18rem
.item-state-con
  margin-top 0.08rem
  display flex
  justify-content center
.item-state
  width 0.8rem
  height 0.22rem
  font-size 0.12rem
  line-height 0.22rem
  background-color #f3c76e
  color #fff
</style>


