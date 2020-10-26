<template>
  <div class="profile-order">
    <h3 class="myorder">我的订单</h3>
    <ul>
      <li v-for="da in datalist" :key="da.id" @click="handleclick(da.id)">
        <p>
          <i :style="da.photourl"></i>
          <span>{{da.title}}</span>
        </p>
      </li>
    </ul>
    <div class="profile-invite">
      <img src="../../../../assets/images/profile/my_sandanyouli.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      datalist:[
        {
          id:'pay',
          photourl:"background: url('https://s.wandougongzhu.cn/s/c9/2x_8f86fd.png') no-repeat .06rem .01rem/.24rem .24rem",
          title:'待付款'
        },
        {
          id:'send',
          photourl:"background: url('https://s5.wandougongzhu.cn/s/df/2x_2d1746.png') no-repeat .06rem .01rem/.24rem .24rem",
          title:'代发货'
        },
        {
          id:'take',
          photourl:"background: url('https://s4.wandougongzhu.cn/s/2c/2x_d1b1ac.png') no-repeat .06rem .01rem/.24rem .24rem",
          title:'待收货'
        },
        {
          id:'commit',
          photourl:"background: url('https://s4.wandougongzhu.cn/s/97/2x_8e34f6.png') no-repeat .06rem .01rem/.24rem .24rem",
          title:'待评价'
        },
        {
          id:'all',
          photourl:"background: url('https://s3.wandougongzhu.cn/s/0b/2x_520803.png') no-repeat .12rem .01rem/.24rem .24rem",
          title:'全部订单'
        }
      ]
    }
  },
  methods:{
    handleclick(v){
      if(this.$store.state.islogin){
        this.$router.push('/order/' + v)
      }else{
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/stylus/border.styl'

.profile-order
  padding-bottom .2rem
  margin .2rem 0.05rem
  display flex
  flex-direction column
  border_1px(0 0 1px 0)
  >.myorder
    font-size .2rem
    font-weight normal
    margin-bottom .08rem
    color #191919
  >ul
    height .66rem
    display flex
    justify-content space-between
    align-items center
    >li 
      p
        width 100%
        height 100% 
        display flex
        flex-direction column
        >i 
          width .36rem
          height .25rem
        >span 
          font-size .12rem
          color #000
      &:nth-of-type(5)
        i
          width .48rem
  >.profile-invite
    width 100% 
    height 1.44rem
    img 
      width 100%
      height 100%
  
</style>