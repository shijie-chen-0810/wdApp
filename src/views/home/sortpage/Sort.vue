<template>
  <div>
    <nav>
      <ul>
        <li class="active">
          分类
          <span></span>
        </li>
        <li>
          品牌馆
          <span></span>
        </li>
      </ul>
      <div class="sousuo">
          <span class="iconfont">&#xe65c;</span>
      </div>
    </nav>
    <div class="sort-left">
      <sortbd></sortbd>
    </div>
  </div>
</template>

<script>
import sortbd from './sortbd'

export default {
data() {
    return {}
  },
  components: {
    sortbd
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
  div
    height 100%
    display flex
    flex-direction column
  nav
    display  flex
    height .44rem
    line-height .44rem
    text-align center
    border_1px(0 0 1px 0)
    ul
      flex 1
      display flex
      li
        flex 1
        color #ccc
        &.active
          color #333
          border-bottom 2px solid #191919
    .sousuo 
      display flex
      width .44rem
      height .44rem
  .sort-left
    overflow-y scroll
    flex 1
</style>
