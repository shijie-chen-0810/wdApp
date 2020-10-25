<template>
  <div>
    <Openapp></Openapp>
    <div>
      <Orderempty v-if="istrue"></Orderempty>
      <Orderlist v-else></Orderlist>
    </div>
  </div>
</template>

<script>
import Openapp from './ordercomingpart/Openapp'
import Orderempty from './ordercomingpart/Orderempty'
import Orderlist from './ordercomingpart/Orderlist'
import axios from 'axios'
export default {
  data(){
    return {
      istrue: true
    }
  },
  components:{
    Openapp,
    Orderempty,
    Orderlist
  }
}
</script>

<style lang="stylus" scoped>
</style>