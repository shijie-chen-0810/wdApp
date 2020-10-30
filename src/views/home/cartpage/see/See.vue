<template>
  <div class="all">
    <header>
      <span class="iconfont" @click="back">&#xe60b;</span>
      <Seeheader></Seeheader>
    </header>
    <main>
      <Seemain></Seemain>
    </main>
    <footer>
      <div class="top">为你推荐</div>
      <Seefooter :goods="goods"></Seefooter>
    </footer>
  </div>
</template>

<script>
import Seeheader from './seenews/Seeheader'
import Seemain from './seenews/Seemain'
import Seefooter from './seenews/Seefooter'

import {getGoods} from 'network/homeRequest/homeRequest'
export default {
  data(){
    return {
      goods:[]
    }
  },
  components:{
    Seeheader,
    Seemain,
    Seefooter
  },
  methods:{
    back(){
      this.$router.go(-1)
    }
  },
  async mounted() {
    const a = await getGoods(0,60)
    this.goods = a.data
  },
}
</script>

<style lang="stylus" scoped>
.all
  background #C0383B
  header
    position relative
    span 
      position absolute
      top 0
      left 0
      color #ccc
      padding .1rem 
  footer
    .top
      line-height .28rem
      display inline-block
      padding 0 .17rem
      font-size .18rem
      color #eb4422
      background-color #ffce4c
      border-radius .14rem
      margin-bottom .15rem
      margin-left 1.3rem
</style>