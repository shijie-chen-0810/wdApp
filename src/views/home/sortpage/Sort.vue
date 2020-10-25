<template>
  <div class="sort-box">
    <nav>
      <ul>
        <li 
            @click="sortClick('sort')"
            :class="{active: currentqh === 'sort'}"
        >
          分类
          <span></span>
        </li>
        <li 
          @click="brandClick('brand')"
          :class="{active: currentqh === 'brand'}"
        >
          品牌馆
          <span></span>
        </li>
      </ul>
      <div class="sousuo">
        <span class="iconfont">&#xe65c;</span>
      </div>
    </nav>
    <div class="sort-body" v-show="currentpage == 'sort'">
      <div class="sort-left">
        <sortbd></sortbd>
      </div>
      <div class="sort-right">
        <sortdb></sortdb>
      </div>
    </div>
    <div class="brand-body" v-show="currentpage =='brand'">
      <branditem></branditem>
    </div>
  </div>
</template>

<script>
import sortbd from './sortbd'
import sortdb from './sortdb'
import sortdbtwo from './sortdbtwo'
import branditem from './branditem'

export default {
data() {
    return {
      currentpage:'sort',
      currentqh:'sort',
      indexList: ['#L','A'],
    }
  },
  components: {
    sortbd,
    sortdb,
    sortdbtwo,
    branditem
  },
  methods: {
    sortClick(i){
      this.currentpage = 'sort'
      this.currentqh = 'sort'
    },
    brandClick(i){
      this.currentpage = 'brand'
      this.currentqh = 'brand'
    }
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
    position fixed
    top 0
    left 0 
    right 0
    background-color #fafafa
    z-index 999
    height .44rem
    line-height .44rem
    text-align center
    
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
    padding-top .44rem
    padding-bottom .49rem
  .sort-left
    width 1rem
    height 100vh
  .sort-right
    flex 1
    overflow-y scroll
    height 100%
  .brand-body
    padding-top .44rem
    padding-bottom .49rem
</style>
