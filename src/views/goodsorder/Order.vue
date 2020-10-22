<template>
  <div class="order-goods">
    <div class="orderbar">
      <div>
        <i>xx</i>
      </div>
      <b>我的订单</b>
      <span>关于物流</span>
    </div>
    <div class="getgift"></div>
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
export default {

}
</script>

<style lang="stylus" scoped>
div.order-goods
  div.orderbar
    display flex
    height .4rem
    >div
      width .5rem
      height 100%
      padding 0 .05rem
      line-height .4rem
      text-align center
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
    height .7rem
    margin .15rem .15rem 0
    background #eee
  >ul 
    height .4rem
    padding 0 .1rem
    display flex
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