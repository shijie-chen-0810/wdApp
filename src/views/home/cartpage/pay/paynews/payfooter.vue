<template>
  <div>
    <div class="footer">
      <div class="copy">提交订单则表示您同意<a href="https://m.wandougongzhu.cn/user/rulesdown?act_id=435">《用户购买协议》</a></div>
      <div class="price">
        <div class="left">
          合计<span>￥{{price}}</span>
        </div>
        <div class="right">
          <button @click="click">确认支付</button>
        </div>
      </div>
    </div>
    <div class="tan" v-if="frg">{{news}}</div>
  </div>
</template>

<script>
import {updateCart} from 'network/cartRequest/cartRequest'
export default {
  props:['price'],
  data(){
    return {
      frg:false,
      news:'请填写用户名'
    }
  },
  computed:{
    goods(){
      const {house_id} = this.$route.query
      if(house_id == 200){
        return this.$store.state.cart.payzhengzhou
      }else{
        return this.$store.state.cart.payjapan
      }
    }
  },
  methods: {
    click(){
      const a = this.$parent.info
      const reg = /^1[3456789]\d{9}$/
      if(!a.name){
        this.news = "请填写用户名"
        this.frg = true
      }else if(a.name&&!a.phone){
        this.news = "请填写手机号"
        this.frg = true
      }else if(a.name && a.phone && !a.nowplace){
        this.news = "请选择地址"
        this.frg = true
      }else if(a.name && a.phone && a.nowplace && !a.xiangplace){
        this.news = "请填写详细地址"
        this.frg = true
      }else if(a.name && a.phone && a.nowplace && a.xiangplace && !a.shouname){
        this.news = "请填写收件人姓名"
        this.frg = true
      }else if(a.name && a.phone && a.nowplace && a.xiangplace && a.shouname && !a.id){
        this.news = "请填写身份证号"
        this.frg = true
      }else if(a.name && a.phone && a.nowplace && a.xiangplace && a.shouname && a.id && !reg.test(a.phone)){
        this.news = "请填写正确手机号"
        this.frg = true
      }else{
        const name = this.$store.state.cellphonenumber


        const time = new Date().getTime()
        const user_id = this.$store.state.cellphonenumber
        let arr = []
        this.goods.forEach(item=>{
          arr.push({
            user_id,
            goods_id:item.goods_id,
            ctime:time,
            order_status:'待支付'
          })
        })
        updateCart(arr)
        this.$router.replace({path:'/cart/pay',query:{price:this.price,time}})
      }
      setTimeout(()=>{
          this.frg = false
      },2000)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'

.footer
  width 100vw
  height .7rem
  background #fff
  padding 0 .05rem 0 .15rem
  .copy
    font-size .12rem
    line-height .2rem
    color #6e6e6e
    a
      color #6e6e6e
  .price
    height .5rem 
    display flex
    justify-content space-between
    .left
      font-size .12rem
      line-height .5rem
      color #000
      span 
        font-size .17rem
        color #ea4141
        line-height .5rem
    .right
      button
        border none 
        outline none
        margin-top .05rem
        line-height: .4rem;
        width: 1.4rem;
        background: #ea4141;
        color: #fff;
        text-align: center;
.tan
  width 1.5rem
  height .5rem
  background #fff
  border_1px(1px,solid,#333,.2rem)
  text-align center
  font-size .14rem
  line-height .5rem
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  margin auto
</style>
