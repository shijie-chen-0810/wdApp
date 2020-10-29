<template>
  <ul>
    <li v-for="(key,i) in goods" :key="i">
      <router-link tag="dl" :to="{name:'detail',params:{id:key.goods_id}}">
        <dt>
          <img :src="key.img_middle" alt="">
        </dt>
        <dd>
          <p>{{key.slogan}}{{key.goods_name}}</p>
          <div class="price">￥{{key.final_price}}<span v-if="key.discount != 0">{{key.discount}}折</span> </div>
        </dd>
      </router-link>
      <div class="bottom">
        <p>加入购物袋</p>
        <img src="~assets/images/see/bg-add.png" alt="">
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  props:['goods']
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
@import '~assets/stylus/ellipsis.styl'
ul
  padding 0 .15rem .15rem
  display flex
  justify-content space-between
  flex-wrap wrap
  li
    margin-bottom .05rem
    width 1.1rem
    height 2.1rem
    border-radius .1rem
    overflow hidden
    background #fff
    dl
      width 100%
      height 1.81rem
      border_1px(0 0 1px)
      dt
        width 100%
        height 1.08rem
        margin-bottom .05rem
        img 
          display block
          width 100%
          height 100%
      dd
        width 100%
        padding 0 .02rem
        p
          ellipsis_num(2)
          font-size .12rem
          line-height .16rem
          color rgb(105, 105, 105)
        .price
            color rgb(238, 20, 20)
            margin-top .1rem
            text-align center
            font-size .14rem
            line-height .14rem
            span 
              display inline-block
              padding .01rem .05rem
              background rgb(238, 20, 20)
              color #fff
              margin-left .1rem
              border-radius .1rem
    .bottom
      display flex
      padding .05rem .05rem 0
      p
        font-size .14rem
        line-height .20rem
      img 
        display block
        width .2rem
        height .2rem
        margin-left .05rem
</style>