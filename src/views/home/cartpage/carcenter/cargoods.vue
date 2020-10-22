<template>
  <div class="goods">
    <div v-for="n in 5" :key="n">
      <van-checkbox class="btn" v-model="checked" checked-color="#000" icon-size=".2rem"></van-checkbox>
      <dl>
        <dt>
          <img src="./001.jpg" alt="">
        </dt>
        <dd>
          <p>今年萨巴赫的方式纪念爱上了的骄啊实打实打算啊实打实大苏打实打实的傲时刻都能啊速度啦的</p>
          <div class="change">
            <div class="case">郑州保税仓<span class="iconfont">&#xe665;</span></div>
          </div>
          <div class="bottom">
            <span>￥159</span>
            <van-stepper v-model="value" integer min="1" max="30" @plus="plus" @minus="minus" :key="n"/>
          </div>
          <cargoodschange></cargoodschange>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox, Stepper} from 'vant';
Vue.use(Checkbox).use(Stepper)


import cargoodschange from './cargoodschange'
export default {
  data(){
    return {
      checked:true,
      value:2
    }
  },
  components:{
    cargoodschange
  },
  methods:{
    plus(){
      this.value++
      console.log(this.value)
    },
    minus(){
      this.value--
      console.log(this.value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods
  margin-left .15rem
  width 3.45rem
  padding .1rem .05rem
  background #FAFAFA
  border-radius .1rem
  border 1px solid #999
  margin-bottom .05rem
  >div
    display flex
    align-items flex-start
    margin-bottom .1rem
    &:last-child
      dd
        border none
    .btn
      margin-top .3rem
    dl
      margin-left .05rem
      display flex
      dt
        width 0.8rem
        height 0.84rem
        margin-right .1rem
        img 
          display block
          width 100%
          height 100%
      dd
        width 2.1rem
        border-bottom 1px solid #ccc
        padding 0 0 .05rem
        p
          font-size .12rem
          line-height .18rem
          color #242424
          overflow hidden
          text-overflow ellipsis
          display -webkit-box
          -webkit-box-orient vertical
          -webkit-line-clamp 2
          margin-bottom .05rem
        .change
          width .83rem
          height .22rem
          background #ededed
          border-radius .05rem
          .case
            font-size .12rem
            color #6e6e6e   
            line-height .22rem
            margin-left .05rem
            span 
              margin-left .02rem
        .bottom
          display flex
          justify-content space-between
          align-items flex-end
</style>