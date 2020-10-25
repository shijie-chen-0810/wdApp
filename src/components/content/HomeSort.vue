<template>
  <div class="sort">
      <div class="line">
        <router-link :to="{name:'homesort',params:{sortType:sortitem.title}}" tag="p" class="sort-item" v-for="sortitem in sort1" :key='sortitem.tick'>
          <img :src="JSON.parse(sortitem.list)[0].img" alt="">
          <span>{{sortitem.title}}</span>
        </router-link>
      </div>
      <div class="line">
        <router-link :to="{name:'homesort',params:{sortType:sortitem.title}}" tag="p" class="sort-item" v-for="sortitem in sort2" :key='sortitem.tick'>
          <img :src="JSON.parse(sortitem.list)[0].img" alt="">
          <span>{{sortitem.title}}</span>
        </router-link>
      </div>
  </div>
</template>

<script>
import { getSortData } from 'network/homeRequest/homeRequest'
export default {
  data(){
    return{
      sort1: [],
      sort2: []
    }
  },
  async mounted(){
    const result = await getSortData()
    this.sort1 = result.slice(0,5)
    this.sort2 = result.slice(5)
  }
}
</script>

<style lang='stylus' scoped>
@import '~assets/stylus/border.styl'
.sort
  padding-top 0.24rem
  padding-bottom 0.155rem
  height 2rem
  display flex
  flex-direction column
  justify-content space-between
  border_1px(0 0 1px 0,solid,#ccc)
  .line
    display flex
    justify-content space-around
    .sort-item
      display flex
      flex-direction column
      justify-content space-between
      height 0.765rem
      width 0.54rem
      img 
        background-color #f4f4f4
        width 0.54rem
        height 0.54rem
        border-radius 50%
        overflow hidden
      span 
        font-size 0.12rem
        text-align center
        overflow hidden 
        text-overflow emphasis 
        white-space nowrap
</style>
