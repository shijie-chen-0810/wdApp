<template>
  <div>
    <div class="header">
      <div class="left"></div>
      <div class="center">豌豆公主收银台</div>
      <div class="right" @click="guanbi">x</div>
    </div>
    <div class="centent">
      <payconter></payconter>
    </div>
    <div class="bottom">
      <button @click="zhifu">前往支付</button>
    </div>
  </div>
</template>

<script>
import payconter from 'views/home/cartpage/payprice/payconter'
export default {
  components:{
    payconter
  },
  mounted() {
    console.log(this.$route.query.price)
  },
  methods: {
    guanbi(){
      this.$router.push('/cart')
    },
    zhifu(){
      console.log("aaa")
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'

.header
  width 100%
  height .4rem
  display flex
  justify-content space-between
  border_1px(0 0 1px 0,solid , #ccc)
  .left
    width .4rem
    height .4rem
    padding 0 .05rem
  .right
    width .4rem
    height .4rem
    padding 0 .05rem
    line-height .4rem
    font-size .20rem
    text-align center
    color #ccc
  .center
    flex 1
    text-align center
    line-height .4rem
    font-size .16rem
    color #000
.centent
  padding 0 .15rem
.bottom
  padding 0 .15rem
  button
    width 100%
    height .43rem
    margin-top .25rem
    background-color #ee1414
    border none
    outline none
    color #fff
</style>