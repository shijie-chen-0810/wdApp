<template>
  <div class="goods">
    <van-checkbox v-model="checked" checked-color="#000" icon-size=".2rem"></van-checkbox>
    <dl>
      <dt>
        <img src="./001.jpg" alt="">
      </dt>
      <dd></dd>
    </dl>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox } from 'vant';
Vue.use(Checkbox)
export default {
  data(){
    return {
      checked:true
    }
  }
}
</script>

<style lang="stylus" scoped>
.goods
  width 3.45rem
  padding .1rem .05rem
  display flex
  align-items center 
  background #FAFAFA
  border-radius .1rem
  border 1px solid #999
  margin-bottom .05rem
  dl
    height 0.92rem
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
      height 100%
</style>