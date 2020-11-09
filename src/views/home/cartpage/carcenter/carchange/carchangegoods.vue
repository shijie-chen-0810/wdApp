<template>
  <div>
    <div class="goodsone" v-for="(key,index) in goodslist" :key="index">
      <van-checkbox :value="key.checked" @click="click(key)"></van-checkbox>
      <dl>
        <dt>
          <img :src="key.img_middle" alt="">
        </dt>
        <dd>
          <p>{{key.slogan}} {{key.goods_name}}</p>
          <p>￥{{key.final_price}}<span>￥{{key.market_price}}</span></p>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox } from 'vant';

Vue.use(Checkbox);
export default {
  props:['goods'],
  data() {
    return {
      goodslist:[]
    }
  },
  methods: {
    click(goods){
      if(this.goods[0].house_id == 200){
        this.$store.commit('cart/huangougoods',goods)
      }else{
        this.$store.commit('cart/huangougoodsjapan',goods)
      }
    }
  },
  async mounted() {
    if(this.goods[0].house_id == 200){
      await this.$store.dispatch('cart/huangou')
      this.goodslist = this.$store.state.cart.goodsList
    }else{
      await this.$store.dispatch('cart/huangoujapan')
      this.goodslist = this.$store.state.cart.goodsjapan
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/ellipsis.styl'
@import '~assets/stylus/border.styl'

.goodsone
  width 100%
  height .96rem
  display flex
  justify-content space-between
  align-items center
  dl
    padding .1rem 0
    width 3.15rem
    height 100%
    display flex
    border_1px(0 0 1px 0)
    dt
      width .75rem
      height .75rem
      margin-right .1rem
      img 
        display block
        width 100%
        height 100%
    dd
      width 2.1rem
      height 100%
      p
        font-size .12rem
        line-height .16rem
      p:first-child
        height .48rem
        ellipsis_num(3)
      p:last-child
        font-size .16rem
        margin-top .1rem
        span 
          color #ccc
          text-decoration line-through
          font-size .12rem
          line-height .12rem
          margin-left .05rem
</style>