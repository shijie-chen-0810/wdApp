<template>
  <div id="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from 'components/common/tabbar/Tabbar'
export default {
  components:{
    Tabbar
  }
}
</script>

<style lang='stylus' scoped>
</style>
