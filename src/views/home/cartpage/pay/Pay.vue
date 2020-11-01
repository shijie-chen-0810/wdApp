<template>
  <div class="pay">
    <header>
      <payheader></payheader>
    </header>
    <main>
      <paycenter ref="info"></paycenter>
    </main>
    <footer>
      <payfooter :price="price"></payfooter>
    </footer>
  </div>
</template>

<script>
import $store from 'store/cart/cart.js'
import payheader from './paynews/payheader'
import paycenter from './paynews/paycenter'
import payfooter from './paynews/payfooter'

export default {
  data(){
    return {
      price:0
    }
  },
  components:{
    payheader,
    paycenter,
    payfooter
  },
  activated(){
    this.price = (this.$route.query.price - 0).toFixed(2)
  },
  computed:{
    info(){
      return this.$refs.info.info
    }
  },
}
</script>

<style lang="stylus" scoped>
.pay
  padding .44rem 0 1rem 0
  header 
    position fixed
    top 0
    z-index 1000
  footer 
    position fixed
    bottom 0
    background #fff
    z-index 1002
</style>