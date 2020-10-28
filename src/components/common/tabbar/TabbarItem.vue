<template>
  <div class='tab-bar-item' @click='clickHandler'>
    <div class="img-con" v-if="!isActive"><slot name="img"></slot></div>
    <div class="img-con-active" v-else><slot name="imgactive"></slot></div>
  </div>
</template>

<script>
export default {
  props:{
    path:{
      type:String,
    }
  },
  computed:{
    isActive(){
      return this.$route.path.includes(this.path)
    }
  },
  methods:{
    clickHandler(){
      if(this.isActive)return
      this.$router.push(this.path)
    }
  }
}
</script>

<style scoped lang='stylus'>
.tab-bar-item
  height .49rem
  flex 1
  div
    height 100%
</style>
