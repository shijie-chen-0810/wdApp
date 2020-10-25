<template>
  <div class="all">
    <header>
      <Seeheader></Seeheader>
    </header>
    <main>
      <Seemain></Seemain>
    </main>
    <footer>
      <div class="top">为你推荐</div>
      <Seefooter></Seefooter>
    </footer>
  </div>
</template>

<script>
import Seeheader from './seenews/Seeheader'
import Seemain from './seenews/Seemain'
import Seefooter from './seenews/Seefooter'
export default {
  components:{
    Seeheader,
    Seemain,
    Seefooter
  }
}
</script>

<style lang="stylus" scoped>
.all
  background #C0383B
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