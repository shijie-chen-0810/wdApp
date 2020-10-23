<template>
  <div class="head">
    <div class="shop">
      <van-checkbox :value="checked" @click="click" checked-color="#000" icon-size=".2rem">{{shop}}</van-checkbox>
      <p>以免运费<span class="iconfont">&#xe60c;</span></p>
    </div>
    <carcoupon v-if="$parent.$parent.goodsAll(goods)[1] <= 650" :goods="goods"></carcoupon>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox } from 'vant';
Vue.use(Checkbox)
import carcoupon from './carcoupon'
export default {
  props:["goods","checked"],
  data(){
    return {
      // checked: true,
    }
  },
  methods:{
    click(){
      // console.log(this.checked)
      this.$emit("frag",!this.checked)
      // console.log(this.checked)
      // this.checked = !this.checked
      // this.goods.forEach(item=>item.checked === !this.checked)
      // this.$parent.checked = !this.$parent.checked
    }
  },
  computed:{
    shop(){
      const house = this.goods[0].house_id
      if(house === 200){
        return "郑州保税仓"
      }else{
        return "日本仓"
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