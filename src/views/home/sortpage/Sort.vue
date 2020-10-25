<template>
  <div class="sort-box">
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
    <div class="sort-body">
      <div class="sort-left">
        <sortbd></sortbd>
      </div>
      <div class="sort-right">
        <sortdb></sortdb>
      </div>
    </div>
  </div>
</template>

<script>
import sortbd from './sortbd'
import sortdb from './sortdb'
export default {
data() {
    return {}
  },
  components: {
    sortbd,
    sortdb
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
  div.sort-box
    height 100%
    display flex
    flex-direction column
  nav
    display flex
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
      flex-direction column
      justify-content center
      align-items center
  .sort-body
    flex 1
    display flex
    flex-direction row
  .sort-left
    overflow-y scroll
    width 1rem
  .sort-right
    flex 1
    overflow-y scroll
</style>
