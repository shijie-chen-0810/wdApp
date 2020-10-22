<template>
  <div class="goods-list">
    <ul class="goods-con">
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
      <goods-item></goods-item>
    </ul>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  components:{
    GoodsItem
  }
}
</script>

<style lang="stylus" scoped>
.goods-list
  padding 0.1rem 0.12rem 0
  .goods-con
    display flex
    justify-content space-between
    flex-wrap wrap
    
    
</style>
