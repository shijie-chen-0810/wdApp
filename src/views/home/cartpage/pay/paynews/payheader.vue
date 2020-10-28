<template>
  <div class="header">
    <span class="iconfont" @click="back">&#xe60b;</span>
    确认订单
  </div>
</template>

<script>
export default {
  methods:{
    back(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100vw
  height .4rem
  background #fff
  color #1a1819
  font-size .15rem
  line-height .4rem
  text-align center
  span 
    position absolute
    top 0
    left 0
    padding 0 .1rem
</style>