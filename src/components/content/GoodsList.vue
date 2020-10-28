<template>
  <div class="goods-list">
    <ul class="goods-con">
      <goods-item v-for="(item,index) in list" :key='index' :item='item'></goods-item>
    </ul>
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'
export default {
  props:{
    list:{
      type:Array
    }
  },
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
