<template>
  <li class="goods-item">
    <div class="goods-img">
      <p>
        <img src="https://oss2.wandougongzhu.cn/5ca20bcfac81194cc75c63d1d8120bc6.jpg?x-oss-process=image/resize,w_621/format,webp" alt="">
      </p>
      <p>库存紧张</p>
    </div>
    <div class="goods-desc">
      <p class="goods-item-title">
        轻松缓解酸痛疲劳
      </p>
      <p class="goods-item-desc">
        啊实打实大苏打实打实大苏打啊实打实的啊啊实打实的
      </p>
      <p class="goods-item-tip">
        <span>99%好评</span>
      </p>
      <p class="goods-item-price">
        <span>￥<i>36</i></span>
        <span>￥34</span>
      </p>
    </div>
  </li>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.goods-item
  width 1.71rem
  height 3.03rem
  margin-bottom 0.1rem
  background-color #fafafa
  .goods-img
    width 1.71rem
    height 1.71rem
    position relative
    >p:nth-child(1)
      img 
        width 100%
        height 100%
    >p:last-child
      position absolute
      bottom 0
      height 0.19rem
      width 100%
      text-align center
      line-height 0.19rem
      color white
      font-size 0.12rem
      background-color rgba(0,0,0,0.2)
  .goods-desc
    font-size 0.13rem
    padding 0.09rem
    .goods-item-title
      margin-bottom 0.05rem
      height 0.185rem
    .goods-item-desc
      height 0.32rem
      font-size 0.12rem
      color #1a1819
      margin-bottom 0.06rem  
    .goods-item-tip
      height 0.22rem
      display flex
      margin-bottom 0.05rem
      span 
        line-height 0.22rem
        padding 0 0.06rem
        background-color #fef6a4
        font-size 0.12rem
    .goods-item-price
      height 0.27rem
      span:nth-child(1)
        font-size 0.11rem
        i 
          font-size 0.18rem
          font-weight 700
      span:nth-child(2)
        text-decoration line-through
        margin-left 0.1rem
</style>
