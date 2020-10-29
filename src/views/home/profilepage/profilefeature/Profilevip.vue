<template>
  <div class="profile-vip">
    <div class="profile-member">
      <img src="~assets/images/profile/vipcat.png" alt="">
      <span>VIP会员</span>
    </div>
    <div class="profile-slide">
      <verscroll></verscroll>
    </div>
    <div class="immd">立即查看</div>
  </div>
</template>

<script>
import verscroll from './verscroll/verscroll'
export default {
  components:{
    verscroll
  }
}
</script>

<style lang="stylus" scoped>
.profile-vip
  height .4rem
  margin .15rem 0 0
  background url("~assets/images/profile/vipbg.png") no-repeat 0 0/3.45rem .4rem
  display flex 
  align-items center
  .profile-member
    width .72rem
    display flex 
    align-items center
    margin-left .11rem
    img 
      width .15rem
      height .15rem
    span 
      color #fed8be
      font-size .14rem
      font-weight bold
  .profile-slide
    flex 1
  .immd 
    width .61rem
    height .18rem
    line-height .18rem
    text-align center
    margin-right .11rem
    border-radius .1rem
    font-size .11rem
    color #463207
    background linear-gradient(90deg,#ffe8d3,#ffd6b4);
</style>