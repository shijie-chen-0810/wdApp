<template>
  <div>
    <div class="header"></div>
    <cartime></cartime>
  </div>
</template>

<script>
import cartime from './carhead/cartime'
export default {
  components:{
    cartime
  }
}
</script>

<style lang="stylus" scoped>
.header
  width 100%
  height 0.44rem
  box-sizing border-box
  border-top 1px solid #e9e9e9 
  border-bottom 1px solid #e9e9e9 
  margin-bottom 0.15rem
</style>
