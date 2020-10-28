<template>
  <div class="con">
    <div class="main">
      <div class="title-con">
        <div class="title-list" ref="seckillTitleScroll">
          <ul>
            <li class="title-item"
                v-for="(item,index) in 8" 
                :key='index' 
                :class="{active:currentTitleIndex===index}"
                @click='titleClick(index)'
                >
              <span class="title-time">{{index}}:00</span>
              <span class="title-state">抢购中</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="title-con content-con">
        <div class="title-list content-list" ref="seckillItemScrol">
          <ul>
            <seckill-item class="content-item" v-for="item in list" :key="item.goods_id" :item='item'></seckill-item>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import SeckillItem from './SeckillItem'


import { getGoods } from 'network/homeRequest/homeRequest'

export default {
  data(){
    return {
      currentTitleIndex: 0,
      seckillTitleScroll: null,
      seckillItemScrol:null,
      list:[]
    }
  },
  components:{
    SeckillItem
  },
    
  methods:{
    async titleClick(index){
      this.currentTitleIndex = index
      const result = await getGoods((index+5)*8,8)
      this.seckillItemScrol.scrollTo(0,0,200)
      this.list = result.data
    },
    init() {
        this.seckillTitleScroll = new BScroll(this.$refs.seckillTitleScroll, {
          scrollX: true,
          click:false
        })
        this.seckillItemScrol = new BScroll(this.$refs.seckillItemScrol, {
          scrollX: true,
          click:false
        })
      },
  },
   async mounted(){
    const result = await getGoods((0+5)*8,8)
    this.list = result.data
    this.$nextTick(()=>{
      this.init()
    })
    
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.con
  display flex
  justify-content center
.main
  border_1px(1px,solid,#f3c76e,10px)
  width 91.5vw
.title-con
  display flex
  flex-wrap nowrap
  justify-content center
  border_1px(0 0 1px 0,solid,#f3c76e)
  .title-list
    display flex
    overflow-x scroll
    >ul
      display flex
      .title-item
        display flex
        flex-direction column
        justify-content center
        align-items center
        position relative
        text-align center
        width 0.86rem
        height 0.44rem
      .title-item::after
          position: absolute;
          width: 1px;
          height: .22rem;
          background-color: #e6e6e6;
          content: "";
          right: 0;
          top: 50%;
          margin-top: -.11rem;
.title-time
  font-size 0.12rem
.title-state
  font-size 0.12rem
  width 0.56rem
  height 0.15rem
  color #f3c76e
  border-radius 0.08rem
  background-color white
.title-item.active
  border-radius 0.1rem 0.1rem 0 0
  overflow hidden
  background-color #f3c76e
  .title-time
    font-size 0.16rem
    line-height 0.2rem
    color white
.content-list
  width 91.5vw
  height 1.875rem
  align-items center
  border-1px(1px 0 0 0)
  .content-item
    margin-right 0.05rem
    border_1px(1px,solid,#f3c76e,10px)
    text-align center
    width 1.06rem
    height 1.75rem
</style>
