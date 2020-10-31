<template>  
  <div>
    <div class="header">
      <p>超值换购</p>
      <p @click="click">x</p>
    </div>
    <div class="gun">
      <div class="case">实付满￥59可优惠换购，每单可选择1件</div>
      <div class="goods">
        <carchangegoods :goods="goods"></carchangegoods>
      </div>
    </div>
    <div class="bottom">
      <button @click="quxiao">确定</button>
    </div>
  </div>
</template>

<script>
import carchangegoods from 'views/home/cartpage/carcenter/carchange/carchangegoods'
export default {
  props:['goods'],
  methods: {
    click(){
      this.$parent.a = false
    },
    quxiao(){
      this.$parent.a = false
      this.$emit('goods')
    }
  },
  components:{
    carchangegoods
  }
}
</script>

<style lang="stylus" scoped>

.header
  width 100%
  height .44rem
  background #fafafa
  padding 0 .2rem
  display flex
  justify-content space-between
  align-items center
  p
    font-size .14rem
  p:last-child
    font-size .2rem
.gun
  height 43vh
  overflow-y scroll
  .case
    padding .15rem .2rem
    font-size .12rem
    color #191919
  .goods
    padding 0 .15rem
.bottom
  padding .1rem .15rem .18rem
  button 
    width 100%
    height .4rem
    border none
    outline none 
    text-align center
    line-height .4rem
    background-color #ee1414
    color #fff
    font-size .14rem
</style>