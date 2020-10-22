<template>
  <div class="profile-serve">
    <h3 class="myserve">我的服务</h3>
    <ul>
      <li v-for="data in 6" :key="data">
        <a href="">
          <div></div>
          <span>收藏夹</span>
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
@import '../../../../assets/stylus/border.styl'

.profile-serve
  padding-bottom .2rem
  margin 0 .05rem .2rem
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
    flex-wrap wrap
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
          background url('../../../../assets/images/profile/myserve/myserve1.png') no-repeat 0 0/100% 100%
        >span 
          font-size .14rem
          margin-top .1rem
          color #000


  
</style>