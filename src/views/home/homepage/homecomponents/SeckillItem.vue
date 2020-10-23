<template>
  <router-link :to='{name:"detail",params:{id:item.goods_id}}' class="item">
    <div class="item-img">
      <img :src="item.img_middle" alt="">
    </div>
    <div class="price">
      <span class="item-now-price">￥{{item.final_price}}</span>
      <span class="item-pre-price">￥{{item.market_price}}</span>
    </div>
    <div class="item-title">{{item.slogan}}</div>
    <div class="item-state-con">
      <div class="item-state">抢购中</div>
    </div>
  </router-link>
</template>
  
<script>
export default {
  props:{
    item:Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/ellipsis.styl'
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
  ellipsis_num(1)
  font-size 0.12rem
  height 0.18rem
  color black
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


