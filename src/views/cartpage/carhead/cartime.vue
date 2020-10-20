<template>
  <div class="shell">
    <div class="left"></div>
    <div class="frame"></div>
    <div class="right"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.shell
  width 100%
  height 0.7rem
  display flex
  .left
    flex 1
  .right
    flex 1
  .frame
    flex 23
    height 100%
    box-sizing border-box
    border-radius 0.2rem
    background #fbf4dc
</style>


