<template>
  <div>
    <h4>日本一物</h4>
    <div class="one-thing">
      <p>
        <img src="https://oss4.wandougongzhu.cn/7a9f14083a40100d36dcdf2613249d3a.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'>
      </p>
      <p>
        <img src="https://oss5.wandougongzhu.cn/e16770acf98f9ead0f775a041d53f370.png?x-oss-process=image/resize,w_1242/format,webp" alt="" @load='refresh'>
      </p>
    </div>
  </div>
</template>

<script>
export default {
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
