<template>
  <div class="youhui">
      <p>N元自选</p>
      <b>155元任选两件155元任选两件</b>
      <i>更换</i>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.youhui
  margin-top .1rem
  display flex
  p
    padding .05rem .03rem
    background #d84f49
    color #fff
    font-size .12rem
    line-height .12rem
    border-radius .04rem
  b
    display block
    width 1.3rem
    font-size .12rem
    line-height .12rem
    font-weight normal
    margin .05rem 0 0 .02rem
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  i  
    color #d84f49
    font-size .12rem
    line-height .12rem
    margin .05rem 0 0 .01rem
</style>