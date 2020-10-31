<template>
  <div>
    <div class="huangou">
      <div class="change" :class="{color:goodsone.length != 0}">
        <div class="left">
          <p class="p1">加购价</p>
          <p class="p2">实付满￥{{price}}可优惠换购</p>
        </div>
        <div class="right" @click="click">{{huangou}}<span class="iconfont">&#xe60c;</span></div>
      </div>
      <div class="goods" v-if="goodsone.length != 0">
          <dl>
            <dt>
              <img :src="goodsone[0].img_middle" alt="">
            </dt>
            <dd>
              <p>{{goodsone[0].goods_name}}</p>
              <p>￥{{goodsone[0].final_price}}<span>￥{{goodsone[0].market_price}}</span></p>
            </dd>
          </dl>
      </div>
    </div>
    <div class="all" v-if="a">
    </div>
    <div class="yidong" :class="{active:a}">
      <carxuangou @goods="quxiao" :goods="goods"></carxuangou>
    </div>


    <div class="zige" v-show="zige">您还没有满足条件</div>
  </div>
</template>

<script>
import carxuangou from 'views/home/cartpage/carcenter/carchange/carxuangou'
export default {
  props:['goods'],
  data(){
    return {
      a:false,
      goodsone:[],
      zige:false,
      huangou:'去换购'
    }
  },
  components:{
    carxuangou
  },
  methods: {
    click(){
      const house = this.goods[0].house_id
      if(house == 200){
        const a = this.$store.getters['cart/price'](house)
        if(a[1] < 59){
          this.zige = true
          setTimeout(()=>{
            this.zige = false 
          },1000)
        }else{
          this.a = true
        }
      }else{
        const a = this.$store.getters['cart/price'](house)
        if(a[1] < 89){
          this.zige = true
          setTimeout(()=>{
            this.zige = false 
          },1000)
        }else{
          this.a = true
        }
      }
      // this.a = true
    },
    quxiao(){
      this.a = false
      if(this.goods[0].house_id == 200){
        this.goodsone = this.$store.state.cart.goodsList.filter(item=>item.checked == true)
      }else{
        this.goodsone = this.$store.state.cart.goodsjapan.filter(item=>item.checked == true)
      }
      if(this.goodsone.length !=0){
        this.huangou = "重新选择"
      }else{
        this.huangou = "去换购"
      }
    }
  },
  computed:{
    price(){
      if(this.goods[0].house_id == 200){
        return 59
      }else{
        return 89
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/ellipsis.styl'
@import '~assets/stylus/border.styl'
.huangou
  border 1px solid #f5c2bf
  border-radius .1rem
  margin-bottom .1rem
  background #fdf8f8
  margin-left .15rem
  width 3.45rem
  .change
    height .35rem
    display flex
    justify-content space-between
    align-items center
    .left
      margin-left .08rem
      display flex
      .p1
        color #fff
        padding .05rem .03rem
        background #d84f49
        border-radius .05rem
        font-size .12rem
        line-height .12rem
      .p2
        color #d84f49
        font-size .14rem
        line-height .24rem
        margin-left .08rem
    .right
      color #d84f49
      font-size .14rem
      line-height .12rem

  .goods
    padding .12rem .1rem
    height .66rem
    dl
      width 100%
      height 100%
      display flex
      dt
        width .42rem
        height .42rem
        border-radius 50%
        overflow hidden
        margin-right .1rem
        img 
          width 100%
          height 100%
          display block
      dd
        width 2.6rem
        height .42rem
        p:first-child
          font-size .14rem
          line-height .18rem
          ellipsis_num(1)
          color #191919
        p:last-child
          font-size .18rem
          line-height .18rem
          color #000
          margin-top .06rem
          span 
            font-size .12rem
            line-height .12rem
            color #9e9e9e
            text-decoration line-through
            margin-left .1rem
.all
  width 100vw
  height 100vh
  background #000
  opacity .5
  position fixed   
  top 0
  left 0
  bottom 0
  right 0
  z-index 999         
.yidong
  position fixed
  width 100vw
  height 4rem
  background #fff
  bottom -4rem
  border 1px solid #ccc
  border-radius .3rem .3rem 0 0
  z-index 100000
  transition all .3s 0s linear 
  overflow hidden
.active
  bottom 0


.color
  border_1px(0 0 1px 0,solid ,#ea4141)

.zige
  width 1.5rem
  height .5rem
  top 0
  left 0
  bottom 0
  right 0
  margin auto
  background #000
  font-size .14rem
  line-height .48rem
  text-align center
  border-radius .2rem
  position fixed
  z-index 1000000
  opacity .7
  color #fff
</style>