<template>
  <div class="all">
    <div class="header">
      <span class="iconfont">&#xe60b;</span>
      <h2>购物袋</h2>
      <p>编辑</p>
    </div>
    <div class="info">
      <cartime></cartime>
      <carcenter v-for="n in 2" :key="n"></carcenter>
    </div>
    <carfooter></carfooter>
  </div>
</template>

<script>
import cartime from './carhead/cartime'
import carcenter from './carcenter/carcenter'
import carfooter from './carfooter/carfooter'
export default {
  components:{
    cartime,
    carcenter,
    carfooter
  }
}
</script>

<style lang="stylus" scoped>
.all
  height 100vh
  overflow-y scroll
  padding .44rem 0 0.49rem
  .header
    width 100%
    height 0.44rem
    box-sizing border-box
    border-top 1px solid #e9e9e9 
    border-bottom 1px solid #e9e9e9 
    display flex
    position fixed
    left 0
    top 0
    background #fff
    z-index 999
    justify-content space-between
    padding .12rem .1rem 0 .16rem
    h2
      font-size .14rem
    p
      font-size .14rem
      color #9e9e9e
  .info
    margin-top .15rem
</style>
