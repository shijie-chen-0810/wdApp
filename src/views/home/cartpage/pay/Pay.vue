<template>
  <div class="pay" @click='click'>
    <header>
      <payheader></payheader>
    </header>
    <main>
      <paycenter></paycenter>
    </main>
    <footer>
      <payfooter :price="price"></payfooter>
    </footer>
    <!-- {{$route.query.price}} -->
    {{goods}}
  </div>
</template>

<script>
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
  methods:{
    click(){
      // this.$refs.show.show = false
    }
  },
  computed:{
    async goods(){
      const a = await this.$store.dispatch('cart/goods')
      // console.log(a.data)
      // console.log(this.$store.getters)
      // this.$store.getters.zhengzhou(200)
      // console.log(this.$store.getters['cart/zhengzhou'](200))
      return a.data
    }
  },
  mounted(){
    console.log(this.$route.query)
    this.price = (this.$route.query.price - 0).toFixed(2)
  }
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
</style>