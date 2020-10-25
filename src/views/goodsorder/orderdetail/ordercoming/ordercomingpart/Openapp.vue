<template>
  <div class="openapp">
    <div class="openapp-img">
      <img src="/resource/img/pc/logo-b.png" alt="">
    </div>
    <div class="openapp-desc" v-if="istrue">
      <span>打开豌豆公主app</span>
      <i>查看订单详情及物流</i>
    </div>
    <div class="openapp-desc" v-else>
      <span>打开豌豆公主app继续支付</span>
      <i>更多日本优品等你选</i>
    </div>
    <div class="openapp-btn">
      <span>立即打开</span>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      istrue: true
    }
  },
  mounted(){
    if(this.$route.path === '/order/pay'){
      this.istrue = false
    }else{
      this.istrue = true
    }
    
  }
}
</script>

<style lang="stylus" scoped>
.openapp 
  display flex
  padding .15rem
  align-items center
  background #fff
  height .7rem
  .openapp-img
    width .4rem
    height .4rem
    img 
     height 100%
     width 100%
  .openapp-desc
    flex 1
    display flex
    flex-direction column
    font-size .14rem
    padding 0 .05rem
  .openapp-btn
    width .74rem
    height .3rem
    line-height .3rem
    text-align center
    background #ee1414
    color #fff
    font-size .13rem
    border-radius .05rem
</style>