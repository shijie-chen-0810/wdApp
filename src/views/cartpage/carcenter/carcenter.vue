<template>
  <div class="center">
    <carshop></carshop>
    <carcoupon></carcoupon>
    <carchange></carchange>
    <cargoods></cargoods>
  </div>
</template>

<script>
import carshop from './carshop'
import carcoupon from './carcoupon'
import carchange from './carchange'
import cargoods from './cargoods'
export default {
  components:{
    carshop,
    carcoupon,
    carchange,
    cargoods
  }
}
</script>

<style lang="stylus" scoped>
.center
  margin .16rem 0 .06rem 0
  padding 0 0 .05rem .15rem
</style>