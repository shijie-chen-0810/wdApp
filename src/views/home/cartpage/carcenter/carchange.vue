<template>
  <div>
    <div class="change">
      <div class="left">
        <p class="p1">加购价</p>
        <p class="p2">实付满￥59可优惠换购</p>
      </div>
      <div class="right" @click="click">去换购<span class="iconfont">&#xe60c;</span></div>
    </div>
    <div class="yidong" :class="{active:a}">显示</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      a:false
    }
  },
  methods: {
    click(){
      this.a = true
    }
  },
}
</script>

<style lang="stylus" scoped>
.change
  margin-left .15rem
  height .35rem
  width 3.45rem
  border 1px solid #f5c2bf
  border-radius .1rem
  margin-bottom .1rem
  background #fdf8f8
  display flex
  justify-content space-between
  align-items center
  .left
    margin-left .08rem
    display flex
    .p1
      color #fff
      padding .05rem .03rem
      background #d84f49
      border-radius .05rem
      font-size .12rem
      line-height .12rem
    .p2
      color #d84f49
      font-size .14rem
      line-height .24rem
      margin-left .08rem
  .right
    color #d84f49
    font-size .14rem
    line-height .12rem

.yidong
  position fixed
  width 100vw
  height 4rem
  background #fff
  bottom -4rem
  border 1px solid #ccc
  border-radius .3rem .3rem 0 0
  z-index 100000
  transition all .5s 0s linear 
.active
  bottom 0
</style>