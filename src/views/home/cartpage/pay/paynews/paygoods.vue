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
      if(house_id == 200){
        let goodsone = this.$store.state.cart.goodsList.filter(item=>item.checked == true)
        let goods = this.$store.state.cart.payzhengzhou
        // if(goodsone.length != 0){
          goods.forEach(item=>{
            goodsone.push(item)
          })
        // }
        return goodsone
      }else{
        const goodsone = this.$store.state.cart.goodsjapan.filter(item=>item.checked == true)
        let goods = this.$store.state.cart.payjapan
        // if(goodsone.length != 0){
          goods.forEach(item=>{
            goodsone.push(item)
          })
        // }
        return goodsone
      }
    }
  }
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