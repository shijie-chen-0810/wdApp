<template>
  <div class="bottom">
    <caryuan></caryuan>
    <div class="xian"></div>
    <caryuan></caryuan>
    <div class="xian"></div>
    <caryuan></caryuan>
  </div>
</template>

<script>
import caryuan from './caryuan'
export default {
  components:{
    caryuan
  }
}
</script>

<style lang="stylus" scoped>
.bottom
  height 0.24rem
  display flex
  align-items center
  .xian
    flex 1
    transform scale(1.05)
    height 0.11rem
    background  #f2af77
</style>