<template>
  <div>
    <dl v-for="(item,index) in goods" :key="index">
      <dt>
        <img :src="item.img_middle" alt="">
      </dt>
      <dd>
        <p>{{item.slogan}}{{item.goods_name}}</p>
        <p>
          <span>￥{{item.final_price}}</span>
          <i>x {{item.num}}</i>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  computed:{
    goods(){
      const {house_id} = this.$route.query
      this.$store.commit({
        type:'cart/paygoods',
        house:house_id
      })
      if(house_id == 200){
        return this.$store.state.cart.payzhengzhou
      }else{
        return this.$store.state.cart.payjapan
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/ellipsis.styl'
dl
  width 3.6rem
  height 1.06rem
  display flex
  justify-content space-between
  align-items center
  padding-right .1rem
  dt
    width .85rem
    height .85rem
    img 
      display block
      width 100%
      height 100%
  dd
    width 2.55rem
    p
      width 100%
      ellipsis_num(2)
      font-size: .13rem;
      color: #191919;
      line-height .20rem
    p:last-child
      display flex
      justify-content space-between
      align-items center
      margin-top .05rem
</style>