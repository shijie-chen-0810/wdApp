<template>
  <div class="profile">
    <div class="user">

      <router-link class="user-top" tag="div" to="/login">
        <div>
          <img src="../../../assets/images/profile/my_wandoulogotop.png" alt="">
        </div>
        <p v-if="islogin">点击登录 / 注册</p>
        <p v-else>{{querynum}}</p>
      </router-link>
      
      <ul class="user-content">
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
    <profiledownload ></profiledownload>
  </div>
</template>

<script>
import Profileorder from "./profilefeature/Profileorder"
import Profileserve from "./profilefeature/Profileserve"
import Profiledownload from "./profilefeature/Profiledownload"

export default {
  data(){
    return {
      islogin:true,
      querynum:'',
    }
  },
  components:{
    Profileorder,
    Profileserve,
    Profiledownload
  },
  mounted(){
    if(this.$route.query.num){
      this.querynum = this.$route.query.num;
      this.islogin = false;
    }else{
      this.querynum = '';
      this.islogin = true;
    }
  }
}
</script>

<style lang="stylus" scoped>
.profile
  overflow scroll
  display flex
  flex-direction column
  justify-content flex-start
  margin .15rem
  .user
    height 1.8rem
    background url('../../../assets/images/profile/my_backgroundtop.png') no-repeat
    background-size 100% 100%
    color #ffffff
    display flex
    flex-direction column
    justify-content space-between
    .user-top
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
    .user-content
      display flex
      margin-bottom .1rem
      >li
        flex 1
        display flex
        flex-direction column
        justify-content center
        align-items center
        span 
          font-size .12rem

</style>