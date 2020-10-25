<template>
  <div>
    <div v-for="data in datalist" :key="data.id">
      <div class="order-list">
        <div class="time-pay">
          <span>{{data.ctime}}</span>
          <i>待支付</i>
        </div>
        <div class="goods-img">
          <ul>
            <li>
              <img :src="data.imgurl" alt="">
            </li>
          </ul>
        </div>
        <div class="tax-out">
          <div>
            <img src="~@/assets/images/profile/myorder/good_list_tax.png" alt="">
          </div>
          <div>
            <span>未付款不能申请退税</span>
            <i>消费税￥3338</i>
          </div>
          <div>
            <span>截止日期 2020-10-26</span>
          </div>
        </div>
        <div class="totalprice">
          <span>共1种</span>
          <span>应付:<i>￥25625</i></span>
        </div>
        <div class="ispay">
          <span class="gopay">去付款</span>
          <span class="cancle">取消订单</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      datalist: []
    }
  },
  mounted(){
    this.datalist = this.$parent.datalist
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'
.order-list
  background #fff
  margin-top .08rem
  padding 0 0 0 .15rem
  .time-pay
    height .42rem
    padding-right .15rem
    font-size .14rem
    display flex
    border_1px(0 0 1px 0, solid, hsla(0,0%,84.7%,.9))
    span 
      felx 2 
      line-height .42rem
    i 
      flex 1
      text-align right 
      line-height .42rem
  .goods-img
    height .8rem
    border_1px(0 0 1px 0, solid, hsla(0,0%,84.7%,.9))
    ul 
      display flex
      align-items center
      height 100%
      li 
        height 100%
        padding .05rem
        display flex
        align-items center
        img 
          width .55rem
          height .55rem
  .tax-out
    height .72rem
    padding .15rem 0
    display flex 
    border_1px(0 0 1px 0, solid, hsla(0,0%,84.7%,.9))
    >div:nth-of-type(1)
      width .3rem
      height .3rem
      img 
        height 100%
        width 100%
    >div:nth-of-type(2)
      flex 1
      display flex
      flex-direction column
      margin-left .15rem
      span 
        color #f45353
      i 
        color #000000
    >div:nth-of-type(3)
      width 1.2rem
      line-height .42rem
      margin-right .15rem
      margin-top .1rem
      span
        font-size .12rem
        color #9e9e9e
  .totalprice
    height .4rem 
    padding-right .15rem
    display flex 
    align-items center
    span 
      flex 1
      color #000
      font-size .14rem
      &:nth-of-type(2)
        text-align right
        i 
          color #ee1414
          font-size .14rem
  .ispay
    height .44rem
    display flex
    justify-content flex-end
    padding-right .15rem
    font-size .12rem
    span
      width .65rem
      height .3rem
      text-align center
      line-height .3rem
      &:nth-of-type(1)
        background #ee1414
        color #fff
      &:nth-of-type(2)
        border .01rem solid #a4a4a4
        color #a4a4a4
        margin-left .05rem

</style>