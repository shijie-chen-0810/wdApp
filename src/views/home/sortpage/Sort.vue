<template>
  <div>
    <nav>
      <ul>
        <li class="active">分类</li>
        <li>品牌馆</li>
        <span class="iconfont">&#xe65c;</span>
      </ul>
    </nav>
    <div>
      <van-sidebar v-model="activeKey">
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
        <van-sidebar-item title="标签名称" />
      </van-sidebar>
    </div>
    
  </div>
  
</template>

<script>
import Vue from 'vue';
import { Sidebar, SidebarItem } from 'vant';
Vue.use(Sidebar);
Vue.use(SidebarItem);
export default {
data() {
    return {
      activeKey: 0,
    };
  },
}
</script>

<style lang="stylus" scoped>
@import '~@a/stylus/border.styl'
  div
    height 100%
    display flex
    flex-direction column
  nav
    height .44rem
    line-height .44rem
    text-align center
    border_1px(0 0 1px 0)
    ul
      display flex
      li
        flex 1
        color #ccc
        &.active
          color #333
      span 
        width .44rem
</style>