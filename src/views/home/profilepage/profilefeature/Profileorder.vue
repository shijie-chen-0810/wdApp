<template>
  <div class="profile-order">
    <h3 class="myorder">我的订单</h3>
    <ul>
      <li>
        <a href="">
          <i></i>
          <span>待付款</span>
        </a>
      </li>
      <li>
        <a href="">
          <i></i>
          <span>代发货</span>
        </a>
      </li>
      <li>
        <a href="">
          <i></i>
          <span>待收货</span>
        </a>
      </li>
      <li>
        <a href="">
          <i></i>
          <span>待评价</span>
        </a> 
      </li>
      <li>
        <a href="">
          <i></i>
          <span>全部订单</span>
        </a>
      </li>
    </ul>
    <div class="profile-invite">
      <img src="../../../../assets/images/profile/my_sandanyouli.png" alt="">
    </div>
  </div>
</template>

<script>
export default {

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
      a
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
      &:nth-of-type(1)
        i
          background url('../../../../assets/images/profile/myorder/myorder1.png') no-repeat .06rem .01rem/.24rem .24rem
      &:nth-of-type(2)
        i
          background url('../../../../assets/images/profile/myorder/myorder2.png') no-repeat .06rem .01rem/.24rem .24rem
      &:nth-of-type(3)
        i
          background url('../../../../assets/images/profile/myorder/myorder3.png') no-repeat .06rem .01rem/.24rem .24rem
      &:nth-of-type(4)
        i
          background url('../../../../assets/images/profile/myorder/myorder4.png') no-repeat .06rem .01rem/.24rem .24rem
      &:nth-of-type(5)
        i
          width .48rem
          background url('../../../../assets/images/profile/myorder/myorder5.png') no-repeat .12rem .01rem/.24rem .24rem
  >.profile-invite
    width 100% 
    height 1.44rem
    img 
      width 100%
      height 100%
  
</style>