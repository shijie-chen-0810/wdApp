<template>
  <div class="detail">
    <header v-if="topShow">
      <div @click="goback">
        <svg t="1603350461898" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2787" width="16" height="16"><path d="M896 544H193.3312a32 32 0 1 1 0-64H896a32 32 0 0 1 0 64z" fill="#191919" p-id="2788"></path><path d="M426.5984 798.72a31.8976 31.8976 0 0 1-22.6304-9.3696L126.8736 512 403.968 234.9056a32 32 0 0 1 45.2608 45.2608L217.3952 512l231.8336 231.8336A32 32 0 0 1 426.5984 798.72z" fill="#191919" p-id="2789"></path></svg>
      </div>
      <ul>
        <li :class="{ active: isSelected === 'goods' }">商品</li>
        <li :class="{ active: isSelected === 'comment' }">评价</li>
        <li :class="{ active: isSelected === 'goodsdetail' }">详情</li>
        <li :class="{ active: isSelected === 'recommend' }">推荐</li>
      </ul>
    </header>
    <header v-else>
      <div class="active" @click="goback"><svg t="1603350461898" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2787" width="16" height="16"><path d="M896 544H193.3312a32 32 0 1 1 0-64H896a32 32 0 0 1 0 64z" fill="#191919" p-id="2788"></path><path d="M426.5984 798.72a31.8976 31.8976 0 0 1-22.6304-9.3696L126.8736 512 403.968 234.9056a32 32 0 0 1 45.2608 45.2608L217.3952 512l231.8336 231.8336A32 32 0 0 1 426.5984 798.72z" fill="#191919" p-id="2789"></path></svg></div>
    </header>
    <main ref='scroll'>
      <div ref="scroTop">
        <goods @refresh='refresh'></goods>
        <div ref="commentTop"><comment @refresh='refresh'></comment></div>
        <div ref="detailTop"><goods-detail @refresh='refresh'></goods-detail></div>
        <div ref="recommendTop"><recommend @refresh='refresh'></recommend></div>
      </div>
    </main>
    <footer>
      <div>
        <img v-if="isCollect" src="../../assets/img/cxj_detail/ic_collect_76e0b9.png" alt="">
        <img v-else src="../../assets/img/cxj_detail/ic_collected_25640b.png" alt="">
        <span>收藏</span>
      </div>
      <div>
        <img v-if="true" src="https://s4.wandougongzhu.cn/s/07/cart_a65b3c.png" alt="">
        <span>购物袋</span>
      </div>
      <div>加入购物车</div>
      <div>立即购买</div>
    </footer>
  </div>
</template>

<script>
import Goods from './Goods'
import Comment from './Comment'
import GoodsDetail from './GoodsDetail'
import Recommend from './Recommend'
import BScroll from '@better-scroll/core'

export default {
  name: 'detail',
  data() {
    return {
      isCollect: true,
      isSelected: 'goods',
      topShow: false,
      flag: true,
      commentTop: '',
      detailTop: '',
      recommendTop: '',
      bs:null
    }
  },  
  components: {
    Goods,
    Comment,
    GoodsDetail,
    Recommend,
  },
  mounted() {
    this.$nextTick(()=>{
      this.bs = new BScroll(this.$refs.scroll,{
        probeType:3,
        click:true,
        bounce:{
          top:false
        },
        mouseWheel:true
      })
      this.bs.on('scroll',this.scrollPos)
    })
  },
  methods: {
    scrollPos(position){
      if(this.flag){
        this.flag = false
        this.commentTop = this.$refs.commentTop.getBoundingClientRect().top
        this.detailTop = this.$refs.detailTop.getBoundingClientRect().top
        this.recommendTop = this.$refs.recommendTop.getBoundingClientRect().top
      }
      let topy = position.y
      if(topy <= 0){
        this.topShow = true
      } else {
        this.topShow = false
      }
      if(Math.abs(topy) < this.commentTop - 45){
        this.isSelected = 'goods'
      }
      if(Math.abs(topy) >= this.commentTop - 45){
        this.isSelected = 'comment'
      }
      if(Math.abs(topy) >= this.detailTop - 45){
        this.isSelected = 'goodsdetail'
      }
      if(Math.abs(topy) >= this.recommendTop - 45){
        this.isSelected = 'recommend'
      }
    },
    goback(){
      this.$router.push('/home')
      // this.$nextTick(()=>{
        
      //   location.reload()
      // })
    },
    refresh(){
      this.bs.refresh()
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'

.detail
  display flex
  height 100vh
  flex-direction column
  header
    height 0.45rem
    display flex
    align-items center
    padding-left 0.12rem
    div
      height 100%
      display flex
      align-items center
      justify-content center
      &.active
        width 0.35rem
        height 0.35rem
        border_1px(1px, solid, #ccc, 50%)
    ul
      display flex
      margin-left 0.1rem
      li
        width 0.45rem
        color #9e9e9e
        font-size 0.12rem
        line-height 0.45rem
        text-align center
        position relative
        &.active
          color #191919
          font-weight bold
          &::after
            content ''
            width 0.26rem
            height 0.02rem
            background #191919
            position absolute
            left 0.093rem
            bottom 0
  main
    flex 1
    overflow-x hidden
    overflow-y scroll
  footer 
    height 0.48rem
    display flex
    div:first-child
      display flex
      width 0.7rem
      height 100%
      flex-direction column
      align-items center
      justify-content center
      font-size 0.12rem
      color #191919
      img 
        width 0.2rem
        height 0.2rem
    div:nth-child(2)
      display flex
      width 0.825rem
      flex-direction column
      align-items center
      border-left 1px solid #D8D8D8
      margin 0.045rem 0
      font-size 0.12rem
      color #191919
      img 
        width 0.18rem
        height 0.2rem
    div:nth-child(3)
      width 1.065rem
      font-size 0.16rem
      text-align center
      line-height 0.39rem
      margin 0.045rem 0.05rem 0.045rem 0
      color #fff
      background #191919
      border-radius 0.02rem
    div:nth-child(4)
      width 1.065rem
      font-size 0.16rem
      line-height 0.39rem
      text-align center
      color #fff
      background #EA4141
      margin 0.045rem 0
      border-radius 0.02rem
</style>
