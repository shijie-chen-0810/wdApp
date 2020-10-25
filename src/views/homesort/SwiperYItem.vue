<template>
  <router-link tag="li" :to="url" class="major-suit-item">
    <div class="item">
      <div class="item-img">
        <p>
          <img :src="item.img_middle" alt="">
        </p>
        <p v-if="item.img_bottom_desc!==''">{{item.img_bottom_desc}}</p>
      </div>
      <p class="item-title">{{item.goods_name}}</p>
      <p class="item-price">
        <span>￥{{item.final_price}}</span>
        <span v-if='item.discount!=="0"'>{{item.discount}}折</span>
      </p>
      <p class="item-comment">{{item.praise_desc}}</p>
      <i class="iconfont" @click.stop='addToCart(item.goods_id)'>&#xe701;</i>
    </div>
  </router-link>
</template>

<script>
export default {
  props:{
    item:Object
  },
  data(){
    return{
      url:'/detail/'+this.item.goods_id
    }
  },
  methods:{
    addToCart(id){
      console.log(id)
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~assets/stylus/ellipsis.styl'
@import '~assets/stylus/border.styl'
.major-suit-item
  width 1.2rem
  height 100%
  .item
    background-color #fafafa
    position relative
    width 1.10rem
    height 100%
    border-radius 0.1rem
    overflow hidden
    border 1px solid transparent
    border_1px(1,solid,#f0f0f0)
    .item-img
      position relative
      width 100%
      height 1.10rem
      img 
        width 100%
      p:nth-child(2)
        background-color #e8766d
        height 0.15rem
        width 100%
        position absolute
        bottom 0
        font-size 0.12rem
        text-align center
        line-height 0.15rem
        color #fff
    .item-title
      ellipsis_num(2)
      padding 0 0.05rem
      height 0.32rem
      line-height 0.15rem
      font-size 0.12rem
      margin-top 0.05rem
    .item-price
      height 0.19rem
      font-size .15rem
      display flex
      span:nth-child(2)
        margin-top 0.02rem
        font-size 0.12rem
        display inline-block
        padding 0 0.05rem
        height 0.17rem
        border-radius 0.2rem
        line-height 0.17rem
        margin-left 0.02rem
        background-color red
        color white
    .item-comment
        font-size 0.12rem
        color #6e6e6e
        padding-left 0.05rem
    .iconfont
      position absolute
      right 0.04rem
      bottom 0
      font-size .2rem
</style>
