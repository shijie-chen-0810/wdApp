<template>
  <div class="order-goods">
    <div class="orderbar">
      <div>
        <i @click="gobackprofile"></i>
      </div>
      <b>我的订单</b>
      <span>关于物流</span>
    </div>
    <div class="getgift">
      <div>
        <cartime></cartime>
      </div>
    </div>
    <ul>
      <router-link to="all" tag="li" active-class="active" >全部订单</router-link>
      <router-link to="pay" tag="li" active-class="active" >待付款</router-link>
      <router-link to="send" tag="li" active-class="active" >代发货</router-link>
      <router-link to="take" tag="li" active-class="active" >待收货</router-link>
      <router-link to="commit" tag="li" active-class="active" >待评价</router-link>
    </ul>
    <router-view></router-view>
  </div>
  
</template>

<script>
import cartime from 'views/home/cartpage/carhead/cartime'
export default {
  methods:{
    gobackprofile(){
      this.$router.push('/profile')
    }
  },
  components:{
    cartime
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'
div.order-goods
  background #f0eff5
  height 100vh
  div.orderbar
    display flex
    height .4rem
    background #fafafa
    border_1px(0 0 1px 0, solid, hsla(0,0%,84.7%,.5))
    border
    >div
      width .5rem
      height 100%
      padding 0 .05rem
      line-height .4rem
      text-align center
      i 
        display block
        width 100%
        height 100%
        background url('../../assets/images/profile/myorder/gobackprofile.png') no-repeat 50%/.175rem .165rem
    >b 
      flex 1
      text-align center
      line-height .4rem
      font-size .15rem
      color #1a1819
      font-weight normal
    >span 
      width .7rem
      height 100%
      padding 0 .05rem
      color #9e9e9e
      font-size .15rem
      line-height .4rem
      text-align center
  .getgift
    height .85rem
    background #fafafa
    padding-top .15rem
    >div
      height 100%
      background #fafafa
  >ul 
    height .4rem
    padding 0 .1rem
    display flex
    background #fafafa
    li 
      flex 1
      margin 0 .05rem .05rem
      font-size .14rem
      color #000
      text-align center
      line-height .4rem
    li.active 
      border-bottom .03rem solid #000
</style>