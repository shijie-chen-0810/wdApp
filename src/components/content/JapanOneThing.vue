<template>
  <div>
    <h4>日本一物</h4>
    <div class="one-thing">
      <p>
        <img :src="imgList[0]" alt="">
      </p>
      <p>
        <img :src="imgList[1]" alt="">
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    imgList:Array
  }
}
</script>

<style lang='stylus' scoped>
h4
  padding 0.1rem 0.12rem
  font-size 0.2rem
.one-thing
  height 2.4rem
  display flex
  flex-direction column
  justify-content space-between
  p
    height 1.2rem
    img 
      width 100%
      height 100%
</style>
