<template>
  <div>
    <div class="center">
      <carshop :goods="goods"></carshop>
      <carchange></carchange>
      <cargoods :goods="goods"></cargoods>
      <carpay :goods="goods"></carpay>
    </div>
    <div class="xian"></div>
  </div>
</template>

<script>
import carshop from './carshop'
import carchange from './carchange'
import cargoods from './cargoods'
import carpay from './carpay'
export default {
  props:['goods'],
  data(){
    return {
      checked:true
    }
  },
  components:{
    carshop,
    carchange,
    cargoods,
    carpay
  },
  methods:{
    // frag(frg){
    //   // console.log(frg)
    //   this.checked = frg
    //   this.$parent.frg(this.goods,frg)
    //   // console.log(this.checked)
    //   // this.goods.forEach(item=>{
    //   //   item.checked === frg
    //   //   console.log(item.checked)
    //   // })
    // }
  }
  // watch:{
  //   checked(value){
  //     console.log(value)
  //     console.log(this.goods)
  //     this.goods.forEach(item=>item.checked === value)
  //     console.log(this.goods)
  //   }
  // }
}
</script>

<style lang="stylus" scoped>
.center
  margin 0 0 .06rem 0
  padding 0 0 .05rem 0
.xian
  width 100%
  height .05rem
  background #f5f5f5
</style>