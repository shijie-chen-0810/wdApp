<template>
  <div>
    <div v-for="(data,i) in datalist" :key="i" class="list-sort">
      <div class="order-list">
        <div class="time-pay">
          <span>{{data[0].ctime}}</span>
          <i>{{data[0].order_status}}</i>
        </div>
        <div class="goods-img">
          <ul>
            <li v-for="(item,ind) in data" :key="ind">
              <img :src="item.img_middle" alt="">
            </li>
          </ul>
        </div>
        <div class="tax-out">
          <div>
            <img src="~@/assets/images/profile/myorder/good_list_tax.png" alt="">
          </div>
          <div>
            <span>未付款不能申请退税</span>
            <i>消费税￥{{(totalpri(data)*0.08).toFixed(2)}}</i>
          </div>
          <div>
            <span>截止日期 {{formattime(data[0].ctime)}}</span>
          </div>
        </div>
        <div class="totalprice">
          <span>共{{data.length}}种</span>
          <span v-show="data[0].order_status==='待支付'" class="total-span">应付:<i>￥{{totalpri(data)}}</i></span>
          <span v-show="data[0].order_status==='已完成'" class="total-span">总计:<i>￥{{totalpri(data)}}</i></span>
          <span v-show="data[0].order_status==='未完成'" class="total-span">总计:<i>￥{{totalpri(data)}}</i></span>
        </div>
        <div class="ispay">
          <span class="gopay" v-show="data[0].order_status==='待支付'">去付款</span>
          <span class="cancle" v-show="data[0].order_status==='待支付'">取消订单</span>
          <span class="cancle" v-show="data[0].order_status==='已完成'">已完成</span>
          <span class="cancle" v-show="data[0].order_status==='未完成'">继续购买</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import BScroll from '@better-scroll/core'
// let scroll = new BScroll('.goods-img',{
//   scrollX: true,
//   click: true
// })
export default {
  data(){
    return {
      datalist: [],
    }
  },
  mounted(){
    this.datalist = this.$parent.datalist
    
  },
  methods:{
    //计算总价
    totalpri(data){
      let total = 0;
      data.forEach(item => {
        total += item.num * item.final_price
      })
      if(total >= 50){
        total -= 8;
      }else if(total >= 250){
        total -= 24
      }else if(total >= 650){
        total -= 74
      }
      return total
    },
    //格式化时间
    formattime(data){
      let str = data.slice(0, data.indexOf(' '))
      return this.getNewDay(str, 1)
    },
    //结束时间
    getNewDay(dateTemp, days) {
      var dateTemp = dateTemp.split("-");
      var nDate = new Date(dateTemp[1] + '-' + dateTemp[2] + '-' + dateTemp[0]); //转换为MM-DD-YYYY格式  
      var millSeconds = Math.abs(nDate) + (days * 24 * 60 * 60 * 1000);
      var rDate = new Date(millSeconds);
      var year = rDate.getFullYear();
      var month = rDate.getMonth() + 1;
      if (month < 10) month = "0" + month;
      var date = rDate.getDate();
      if (date < 10) date = "0" + date;
      return (year + "-" + month + "-" + date);
    }
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
    display flex
    ul 
      display flex
      align-items center
      height 100%
      overflow-x scroll
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
    span.total-span
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
    span.gopay
      background #ee1414
      color #fff
    span.cancle
      border .01rem solid #a4a4a4
      color #a4a4a4
      margin-left .05rem

</style>