<template>
  <div class="center">
    <div class="place" v-for="(key,index) in place" :key="index">
      <div class="left">
        <p>{{key.name}}  {{key.phone}}</p>
        <p>{{key.nowplace}}  {{key.xiangplace}}</p>
      </div>
      <div class="right">
        <van-checkbox :value="key.checked" @click="checked(key)" checked-color="#000"></van-checkbox>
      </div>
    </div>
    <router-link to="set" tag="div" class="new">添 加 新 地 址</router-link>
    <button @click='click'>确定</button>
  </div>
</template>

<script>
import Vue from 'vue';
import { Checkbox } from 'vant';

Vue.use(Checkbox);
export default {
  data(){
    return {
      place:[]
    }
  },
  methods: {
    click(){
      const name = this.$store.state.cellphonenumber
      localStorage.setItem(name,JSON.stringify(this.place))
      this.$router.go(-1)
    },
    checked(key){
      this.place.forEach(item=>{
        if(item == key){
          item.checked = true
        }else{
          item.checked = false
        }
      })

    }
  },
  activated() {
    this.place = JSON.parse(localStorage.getItem(this.$store.state.cellphonenumber))
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/ellipsis.styl'
@import '~assets/stylus/border.styl'
.center
  width 100%
  height 100%
  padding 0 .15rem
  .place
    display flex
    justify-content space-between
    align-items center
    padding .1rem 0
    border_1px(0 0 1px 0)
    .left
      width 3rem
      p
        width 100%
        ellipsis_num(1)
        line-height .20rem
        font-size .14rem
      p:last-child
        font-size .12rem
        color #6e6e6e
  .new
    width 100%
    height .41rem
    border_1px(0 0 1px 0)
    text-align center
    line-height .4rem
  button
    width 100%
    height .43rem
    border none
    margin-top .25rem
    color #fff
    text-align center
    line-height .43rem
    outline none 
    font-size .15rem
    background-color #ee1414
    border-radius .05rem
</style>