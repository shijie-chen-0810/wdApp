<template>
  <div>
    <JapanOneThing></JapanOneThing>
    <sort></sort>
  </div>
</template>

<script>
import JapanOneThing from 'components/content/JapanOneThing'
import Sort from 'components/content/HomeSort'
export default {
  components:{
    JapanOneThing,
    Sort
  },
  methods:{
    refresh(){
      this.$emit('refresh')
    }
  }
}
</script>

<style lang='stylus' scoped>
h4
  padding 0.1rem 0.12rem
  font-size 0.2rem
.one-thing
  height 2.4rem
  display flex
  flex-direction column
  justify-content space-between
  p
    height 1.2rem
    img 
      width 100%
      height 100%
</style>
