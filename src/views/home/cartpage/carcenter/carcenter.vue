<template>
  <div>
    <div class="center">
      <carshop></carshop>
      <carchange></carchange>
      <cargoods></cargoods>
      <carpay></carpay>
    </div>
    <div class="xian"></div>
  </div>
</template>

<script>
import carshop from './carshop'
import carchange from './carchange'
import cargoods from './cargoods'
import carpay from './carpay'
export default {
  components:{
    carshop,
    carchange,
    cargoods,
    carpay
  }
}
</script>

<style lang="stylus" scoped>
.center
  margin 0 0 .06rem 0
  padding 0 0 .05rem 0
.xian
  width 100%
  height .05rem
  background #f5f5f5
</style>