<template>
  <div>
    <div class="header">
      <div class="left" @click="click"><span class="iconfont">&#xe60b;</span></div>
      <div class="center">收货地址</div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(JSON.parse(localStorage.getItem(this.$store.state.cellphonenumber)))
  },
  methods: {
    click(){
      this.$router.go(-1)
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.header
  display flex
  border_1px(0 0 1px 0)
  .left,.right
    width .5rem
    height .4rem
    text-align center
    line-height .4rem
  .center
    flex 1
    text-align center
    line-height .4rem
    font-size .15rem
    color #000
</style>