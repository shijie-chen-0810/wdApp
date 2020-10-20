<template>
  <div>
    <div class="header">
      <span class="iconfont">&#xe60b;</span>
      <h2>购物袋</h2>
      <p>编辑</p>
    </div>
    <cartime></cartime>
    <carcenter></carcenter>
  </div>
</template>

<script>
import cartime from './carhead/cartime'
import carcenter from './carcenter/carcenter'
export default {
  components:{
    cartime,
    carcenter
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 0.44rem
  box-sizing border-box
  border-top 1px solid #e9e9e9 
  border-bottom 1px solid #e9e9e9 
  margin-bottom 0.15rem
  display flex
  justify-content space-between
  padding .12rem .1rem 0 .16rem
  h2
    font-size .14rem
  p
    font-size .14rem
    color #9e9e9e
</style>
