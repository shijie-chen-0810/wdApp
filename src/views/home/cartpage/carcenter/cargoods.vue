<template>
  <div class="goods">
    <div v-for="key in goods" :key="key.goods_id">
      <van-checkbox class="btn" :value="key.checked" @click="change(key)" checked-color="#000" icon-size=".2rem"></van-checkbox>
      <dl>
        <dt>
          <img :src="key.img_middle" alt="">
        </dt>
        <dd>
          <p>{{key.slogan}}{{key.goods_name}}</p>
          <div class="change">
            <div class="case">{{type}}<span class="iconfont">&#xe665;</span></div>
          </div>
          <div class="bottom" v-if="$parent.$parent.operation == '编辑'">
            <span>￥{{key.final_price}}</span>
            <van-stepper v-model="key.num" integer min="1" :max="key.residue_count" @plus="plus(key)" @minus="minus(key)" :key="key.goods_id"/>
          </div>
          <div class="bottom" v-else>
            <van-stepper v-model="key.num" integer min="1" :max="key.residue_count" @plus="plus(key)" @minus="minus(key)" :key="key.goods_id"/>
            <span @click="clickDelete(key)">删除</span>
          </div>
          <div v-if="key.dispaly_act_tag">
            <cargoodschange  :goods="key"></cargoodschange>
          </div>
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
  props:["goods",'checked'],
  computed:{
    type(){
      if(this.goods[0].house_id === 200) return "郑州保税仓"
      return "日本仓"
    }
  },
  components:{
    cargoodschange
  },
  methods:{
    clickDelete(goods){
      var r = confirm("您确定要删除这个物品");
      if (r == true) this.$parent.$parent.delete(goods)
    },
    fun(goods){
      const goodsInfo = this.$parent.$parent.car
      const index = goodsInfo.findIndex(item=>item===goods)
      goodsInfo[index].checked = !goodsInfo[index].checked
    },
    plus(goods){
      const goodsInfo = this.$parent.$parent.car
      const index = goodsInfo.findIndex(item=>item===goods)
      goodsInfo[index].num++
    },
    minus(goods){
      const goodsInfo = this.$parent.$parent.car
      const index = goodsInfo.findIndex(item=>item===goods)
      goodsInfo[index].num--
    },
    change(a){
      this.fun(a)
      const frag = this.goods.some(item=>item.checked===false)
      if(frag){
        this.$parent.checked = false
      }else{
        this.$parent.checked = true
      }
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
        padding-right .1rem
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
          margin-top .05rem
          span 
            color #999
            padding-bottom .05rem
</style>