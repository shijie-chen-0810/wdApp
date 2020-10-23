<template>
  <div class="youhui">
      <p>{{fuli}}</p>
      <b>{{goods.dispaly_act_tag}}</b>
      <i>更换</i>
  </div>
</template>

<script>
export default {
  props:['goods'],
  computed:{
    fuli(){
      const reg = /^\d{2}/
      if(reg.test(this.goods.dispaly_act_tag)) return "N元自选"
      if(this.goods.dispaly_act_tag==="新人专享") return "新人"
      if(this.goods.dispaly_act_tag==="限时折扣") return "折扣"
    }
  }
}
</script>

<style lang="stylus" scoped>
.youhui
  margin-top .1rem
  display flex
  justify-content space-between
  p
    padding .05rem .02rem .05rem .03rem
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