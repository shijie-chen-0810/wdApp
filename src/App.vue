<template>
  <div id="main">
    <router-view></router-view>
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

<style>

</style>
