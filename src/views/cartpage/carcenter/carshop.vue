<template>
  <div class="shop">
    <van-checkbox v-model="checked" checked-color="#000" icon-size=".2rem">郑州报税仓</van-checkbox>
    <p>以免运费<span class="iconfont">&#xe60c;</span></p>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox } from 'vant';
Vue.use(Checkbox)
export default {
  data(){
    return {
      checked: true,
    }
  }
}
</script>

<style lang="stylus" scoped>
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