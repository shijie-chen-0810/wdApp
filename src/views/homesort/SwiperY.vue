<template>
  <div class="major-suit" ref="majorSuit">
    <ul class="major-suit-con" :class="{isOnePage:!showMore}">
      <swiper-y-item  v-for="(item,index) in data" :key='index' :item='item'></swiper-y-item>
      <li class="getMore" v-if="showMore">
        <div @click='clickHandler'>
          <span>查看更多</span>
          もっと見る
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import SwiperYItem from './SwiperYItem'
import BScroll from '@better-scroll/core'
import {getGoods} from 'network/homeRequest/homeRequest'
export default {
  props:{
    listNum:{
      type:Number,
      default:10
    },
    showMore:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return{
      bs:null,
      data:null
    }
  },
  components:{
    SwiperYItem
  },
  methods:{
    clickHandler(){
      console.log('getMore')
    }
  },
  async mounted(){
    const offset = Math.ceil(Math.random()*200)
    const data = await getGoods(offset,this.listNum)
    this.data = data.data
    this.$nextTick(()=>{
      console.log(this.$refs,this.listNum)
      this.bs = new BScroll(this.$refs.majorSuit,{
        scrollX:true
      })
    })
  }
}
</script>

<style lang='stylus' scoped>
@import '~assets/stylus/border.styl'
.major-suit
  width 100vw
  height 1.99rem
  display flex
  padding 0 0.1rem 0.1rem 0.15rem
.major-suit-con
  display flex
  height 100%
.getMore
  width 1.1rem
  border-radius 0.1rem
  overflow hidden
  border 1px solid transparent
  div
    display flex
    color #ea4141
    flex-direction column
    width 1.03rem
    height 100%
    border-radius 0.1rem
    border 1px solid black
    background-color #fafafa
    justify-content center
    align-items center
    border-radius 0.1rem
    overflow hidden
    border 1px solid transparent
    border_1px(1,solid,#f0f0f0)
    span 
      border_1px(0 0 1px 0,solid,#111)
.isOnePage
  width 101vw
</style>
