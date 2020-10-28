<template>
  <div>
    <div class="top">
      <p>假一赔十</p>
      <p>急速发货</p>
      <p>7天售后无忧</p>
    </div>
    <div class="position">
      <div>
        <span>收货人</span>
        <input type="text" placeholder="请使用真实姓名">
      </div>
      <div>
        <span>联系电话</span>
        <input type="text" placeholder="收件人电话号码">
      </div>
      <div>
        <span>所在地区</span>
        <input type="text" placeholder="请选择所在区域" @click="click"  :value="nowplace">
      </div>
      <div>
        <span>详细地址</span>
        <input type="text" placeholder="输入地址">
      </div>
    </div>
    <div class="xian">
      <img src="~assets/images/see/bg5.png" alt="">
    </div>
    <div class="xian2"></div>
    <div class="info">根据海关要求，购买跨境商品需要提供订购人身份证信息（请与支付账号实名信息相同）本信息仅用于海关清关，豌豆公主保证信息安全。</div>
    <div class="position">
      <div>
        <span>订购人</span>
        <input type="text" placeholder="请使用真实姓名">
      </div>
      <div>
        <span>身份证号</span>
        <input type="text" placeholder="将加密处理">
      </div>
    </div>
    <div class="xian2"></div>
    <div class="goods">
      <transition>
        <paygoods></paygoods>
      </transition>
    </div>
    <div class="num" @click="yundong">郑州保税仓共5件物品
      <span class="iconfont" v-if="dong">&#xe665;</span> 
      <span class="iconfont" v-else>&#xe65a;</span> 
    </div>
    <div class="xian2"></div>
    <div class="bottom">
      <div></div>
      <div>
        <p>积分抵现</p>
        <p>暂无可用积分</p>
      </div>
      <div>
        <p>支付宝</p>
        <p>
          <img src="~assets/images/see/pay5.png" alt="">
        </p>
      </div>
    </div>
    <div class="place" v-show="show">
      <van-area title="请选择地址" :area-list="areaList" :columns-placeholder="['请选择', '请选择', '请选择']" @confirm="ok" @cancel="off" class="change" :value="place"/>
    </div>
    <div class="all" v-show="show" @click.stop="quxiao"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Area } from 'vant';

Vue.use(Area);

import paygoods from './paygoods'

import areaList from '../address/citymsg'
// import { Toast } from 'vant';
export default {
  data() {
    return {
      areaList,
      show:false,
      place:'',
      nowplace:'',
      dong:true
    };
  },
  components:{
    paygoods
  },
  methods: {
    yundong(){
      this.dong = !this.dong
    },
    quxiao(){
      this.show = false
    },
    ok(val){
      this.nowplace = ''
      this.show = false
      this.place = val[2].code
      val.forEach(item=>{
        this.nowplace += item.name + ' '
      })
    },
    off(){
      this.show = false
    },
    click(){
      this.show = true
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.top
  display flex
  justify-content space-between
  background #f5f5f5
  padding 0 .2rem
  p
    width .78rem
    height .31rem 
    color #000
    font-size .13rem
    line-height .31rem
    text-align right
  p:first-child
    background url('~assets/images/see/pay1.png') no-repeat left center
    background-size .17rem .17rem
  p:nth-of-type(2)
    background url('~assets/images/see/pay2.png') no-repeat left center
    background-size .17rem .17rem
  p:last-child
    width .98rem
    background url('~assets/images/see/pay3.png') no-repeat left center
    background-size .17rem .17rem
.position
  padding-left .15rem
  >div
    height .44rem
    border_1px(0 0 1px 0)
    display flex
    justify-content space-between
    span 
      width 0.75rem
      font-size .14rem
      line-height .44rem
      color #191919
    input 
      border none 
      outline none
      font-size .12rem
      line-height .44rem
      width 2.85rem
  >div:nth-of-type(3)
    input 
      background url('~assets/images/see/pay4.png') no-repeat 2.6rem center
      background-size .07rem .13rem 
  >div:last-child
    border_1px(0) 
    margin-bottom .1rem
.xian
  height .03rem
  width 100%
  img 
    display block
    width 100%
    height 100%
.info
  width 100%
  padding .1rem .15rem
  background: #fff2f2;
  color: #ea4141;
  font-size: .12rem;
.xian2
  width 100%
  height .06rem
  background #f5f5f5
.goods
  padding-left .15rem
.num
  width 100%
  height .37rem
  line-height .37rem
  color #9e9e9e
  font-size .12rem
  text-align center
  border-top 1px solid #ccc
.bottom
  padding-left .15rem
  >div
    display flex
    justify-content space-between
    align-items center
    height .45rem
    border_1px(0 0 1px 0)
  >div:last-child
    border_1px(0)
    p
      color #000
      font-size .14rem
    p:last-child
      margin-right .1rem
      img 
        display block
        width .16rem
        height .16rem
.place
  border_1px(1px,solid,#6e6e6e)
  width 3rem
  height 3.5rem
  position fixed
  top 0
  left 0
  bottom 0
  right 0
  margin auto
  background #fff
  z-index 999
.all
  position fixed
  background-color rgba(0,0,0,.6)
  width 100vw
  height 100vh
  left 0
  top 0
  bottom 0
  right 0
  z-index 998
</style>