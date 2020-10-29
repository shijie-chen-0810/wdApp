<template>
  <router-link tag="li" :to='{name:"detail",params:{id:item.goods_id}}' class="goods-item" >
    <div class="goods-img">
      <p class='goods_img_part'>
        <van-image :src="item.img_middle" alt=""></van-image>
      </p>
      <p class="goods_desc_part" v-if='item.img_bottom_desc!==""'>{{item.img_bottom_desc}}</p>
    </div>
    <div class="goods-desc">
      <p class="goods-item-title">
        {{item.slogan}}
      </p>
      <p class="goods-item-desc">
        {{item.goods_name}}
      </p>
      <p class="goods-item-tip">
        <span v-if="item.display_act_tag!==''">{{item.display_act_tag}}</span>
        <span v-else>{{item.praise_desc}}</span>
      </p>
      <p class="goods-item-price">
        <span>￥<i>{{item.final_price}}</i></span>
        <span v-if='item.market_price-item.final_price!==0'>￥{{item.market_price}}</span>
      </p>
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
.goods-item
  width 45.6vw
  height 3.03rem
  margin-bottom 0.1rem
  background-color #fafafa
  .goods-img
    width 45.6vw
    height 45.6vw
    position relative
    >p.goods_img_part
      img 
        width 100%
        height 100%
    >p.goods_desc_part
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
      ellipsis_num(1)
      margin-bottom 0.05rem
      height 0.185rem
      font-weight 700
      color black
    .goods-item-desc
      ellipsis_num(2)
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
