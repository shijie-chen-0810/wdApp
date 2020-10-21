<template>
  <div class="profile">
    <div class="login">
      <div class="login-top">
        <div>
          <img src="../../assets/images/profile/my_wandoulogotop.png" alt="">
        </div>
        <p>点击登录 / 注册</p>
      </div>
      <ul class="login-content">
        <li>
          <p>-</p>
          <span>低现积分</span>
        </li>
        <li>
          <p>-</p>
          <span>优惠卷</span>
        </li>
        <li>
          <p>-</p>
          <span>公主说</span>
        </li>
      </ul>
    </div>
    <profileorder></profileorder>
    <profileserve></profileserve>
  </div>
</template>

<script>
import profileorder from "./profilefeature/profileorder"
import profileserve from "./profilefeature/profileserve"
export default {
  components:{
    profileorder,
    profileserve
  }
}
</script>

<style lang="stylus" scoped>
.profile

  display flex
  flex-direction column
  justify-content flex-start
  margin .15rem
  .login
    height 1.8rem
    background url('../../assets/images/profile/my_backgroundtop.png') no-repeat
    background-size 100% 100%
    color #ffffff
    display flex
    flex-direction column
    justify-content space-between
    .login-top
      display flex
      align-items center
      padding-top .35rem
      >div
        margin-left .15rem
        width .5rem
        height .5rem
        img 
          width 100%
          height 100%
      >p
        font-size .18rem
        margin-left .2rem
    .login-content
      display flex
      margin-bottom .1rem
      >li
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center

</style>