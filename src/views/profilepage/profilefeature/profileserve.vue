<template>
  <div class="profile-serve">
    <h3 class="myserve">我的服务</h3>
    <ul>
      <li>
        <a href="">
          <div></div>
          <span></span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '../../../assets/stylus/border.styl'

.profile-serve
  padding-bottom .2rem
  margin 0 0.05rem
  display flex
  flex-direction column
  border_1px(0 0 1px 0)
  >.myserve
    color #191919
    font-weight normal
    font-size .2rem
    margin-bottom .08rem
  ul 
    display flex
    li 
      width 25%
      height 1rem
      a 
        width 100%
        height 100%
        display flex
        flex-direction column
        justify-content center
        align-items center
        >div
          width .32rem
          height .32rem
          background url('../../../assets/images/profile/myserve/myserve1.png') no-repeat 0 0/100% 100%


  
</style>