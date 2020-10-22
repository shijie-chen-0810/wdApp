<template>
  <div class="tab-bar">
    <tabbar-con>
      <tabbar-item path='/home'>
        <div slot="img" class="main-nav-icon" style="background-image:url(https://oss3.wandougongzhu.cn/4958e28874fde00ff68e396ba690c4be.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
        <div slot="imgactive" class="main-nav-icon" style="background-image:url(https://oss1.wandougongzhu.cn/1c36a434c613fb667e283e0f0ade7a37.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
      </tabbar-item>
      <tabbar-item path='/sort'>
        <div slot="img" class="main-nav-icon" style="background-image:url(https://oss3.wandougongzhu.cn/771c3c0f88c818705068e42958b09bb9.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
        <div slot="imgactive" class="main-nav-icon" style="background-image:url(https://oss5.wandougongzhu.cn/869f1bca96cc3d0aac5e55f92c0a79f3.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
      </tabbar-item>
      <tabbar-item path='/cart'>
        <div slot="img" class="main-nav-icon" style="background-image:url(https://oss2.wandougongzhu.cn/69006ed9be72797fd0643806b561ee65.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
        <div slot="imgactive" class="main-nav-icon" style="background-image:url(https://oss5.wandougongzhu.cn/8cab3cd96d2b3a112887c26aaa8c9af7.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
      </tabbar-item>
      <tabbar-item path='/profile'>
        <div slot="img" class="main-nav-icon" style="background-image:url(https://oss2.wandougongzhu.cn/1cc8918a53958f61f91ca837b5836608.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
        <div slot="imgactive" class="main-nav-icon" style="background-image:url(https://oss1.wandougongzhu.cn/a561daa80505a4674195bd4bef76747a.png?x-oss-process=image/resize,w_360,h_360/format,png)"></div>
      </tabbar-item>
    </tabbar-con>
  </div>
</template>

<script>
import TabbarCon from './TabbarCon'
import TabbarItem from './TabbarItem'
export default {
  components:{
    TabbarCon,
    TabbarItem
  }
}
</script>

<style scoped lang='stylus'>
.tab-bar
  background #fff
  position fixed
  z-index 999
  bottom 0
  left 0
  right 0
.main-nav-icon
  background-size .64rem
  background-position center -0.15rem 
  background-repeat no-repeat
</style>
