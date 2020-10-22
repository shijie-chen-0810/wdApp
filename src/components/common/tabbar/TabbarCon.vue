<template>
  <div id="tab-bar-con">
    <slot></slot>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped lang='stylus'>
@import '~assets/stylus/border.styl'
#tab-bar-con
  border_1px(1px 0 0 0,,#ccc)
  height .49rem
  display flex
</style>
