<template>
  <div class="head">
    <div class="shop">
      <van-checkbox :value="!checked" @click="click" checked-color="#000" icon-size=".2rem">{{shop}}</van-checkbox>
      <p>以免运费<span class="iconfont">&#xe60c;</span></p>
    </div>
    <carcoupon v-if="price[5]" :goods="goods"></carcoupon>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox } from 'vant';
Vue.use(Checkbox)
import carcoupon from './carcoupon'
export default {
  props:["goods"],
  methods:{
    click(){
      const house = this.goods[0].house_id
      this.$store.commit({
        type:'cart/checked',
        checked:this.checked,
        house:house
      })
    }
  },
  computed:{
    shop(){
      const house = this.goods[0].house_id
      if(house == 200){
        return "郑州保税仓"
      }else{
        return "日本仓"
      }
    },
    price(){
      const house = this.goods[0].house_id
      return this.$store.getters['cart/price'](house)
    },
    checked(){
      if(this.goods[0].house_id == 200){
        return this.$store.getters['cart/zhengzhou']
      }else{
        return this.$store.getters['cart/japan']
      }
    }
  },
  components:{
    carcoupon
  }
}
</script>

<style lang="stylus" scoped>
.head
  padding 0.14rem 0 .14rem .15rem
  position sticky 
  top 0
  background #fff
  z-index 11
  .shop
    height .2rem
    padding-right .13rem
    display flex
    justify-content space-between
    align-items center
    p
      color #6e6e6e
      font-size .11rem
      span 
        color #d84f49
</style>