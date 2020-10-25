<template>
  <div class="item">
    <div class="item-con">
      <div class="item-top">
        <p><span>销量榜</span></p>
        <p><img :src="info.img" alt=""></p>
        <p><img src="https://s2.wandougongzhu.cn/s/10/mask_8fd8cd.png" alt=""></p>
      </div>
      <div class="item-bottom">
        <div class="item-bottom-img">
          <img src="https://s.wandougongzhu.cn/s/a2/Mask3x_58ba42.png" alt="">
        </div>
        <div class="item-bottom-desc">
          {{info.desc}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    info:Object
  }
}
</script>

<style lang="stylus" scoped>
.item
  display flex
  flex-direction column
  width 1.07rem
  height 1.47rem
  .item-con
    padding-top 0.03rem
    border-radius 0.1rem
    overflow hidden
    width 1.07rem
    height 1.33rem
    background-color #fafafa
    overflow hidden
    .item-top
      width 1.07rem
      height 1.07rem
      position relative
      p:nth-child(1)
        text-align center
        font-size 0.12rem
        font-weight 700
        span 
          padding-bottom 0.02rem
          border-bottom 0.02rem solid #d7a85d
      p:nth-child(2)
        position absolute
        z-index 996
        background-image url('https://s1.wandougongzhu.cn/s/21/maihui_c0886c.png')
        background-size 100%
        background-repeat no-repeat
        top 0.30rem
        height 0.83rem
        width 0.9rem
        margin 0 0.085rem
        display flex
        justify-content center
        align-items center
        img 
          width 0.95rem
      p:nth-child(3)
        position absolute
        bottom 0.03rem
        z-index 998
        img 
          width 1.07rem
          height 0.2rem  
    .item-bottom
      position relative
      height 0.3rem
      .item-bottom-img
        position absolute
        bottom 0
        background-color #d5a75d
        z-index 997
        img 
          width 100%
      .item-bottom-desc
        position absolute
        bottom 0
        width 100%
        height 0.3rem
        text-align center
        color white
        line-height 0.2rem
        z-index 999
</style>
