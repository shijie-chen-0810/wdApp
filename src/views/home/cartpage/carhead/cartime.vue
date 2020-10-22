<template>
  <div class="shell">
    <div class="left"></div>
    <div class="frame">
      <div class="box">
        <div class="top">
          <span class="iconfont">&#xe613;</span>
          <p>下单领好礼<span>剩余时间</span></p>
        </div>
        <div class="bottom">
          <carbottom class="son"></carbottom>
          <div class="blank"></div>
          <carbtn class="btn"></carbtn>
        </div>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>

<script>
import carbottom from './carbottom'
import carbtn from './carbtn'
export default {
  components:{
    carbottom,
    carbtn
  }
}
</script>

<style lang="stylus" scoped>
.shell
  width 100%
  height 0.7rem
  display flex
  .left
    flex 1
  .right
    flex 1
  .frame
    flex 23
    height 100%
    box-sizing border-box
    border-radius 0.2rem
    background #fbf4dc
    .box
      padding 0.09rem 0.1rem 0.1rem 0.12rem
      .top
        height 0.17rem
        margin-left 0.03rem
        display flex
        align-items center
        margin-bottom 0.1rem
        >span 
          display block
          width 0.17rem
          height 100%
          color #eb5d2a
        p
          color #da5225
          font-size 0.13rem
          font-weight bold
          >span
            font-size 0.11rem 
            font-weight normal
            margin 0 0.06rem
      .bottom
        width 100%
        height 0.24rem
        display flex
        .son
          flex 4
        .blank
          flex 1
</style>


