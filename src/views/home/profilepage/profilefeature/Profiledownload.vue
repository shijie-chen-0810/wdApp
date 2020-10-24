<template>
  <div class="mydownload">
    <p>享受更多贴心功能，请下载豌豆公主APP</p>
    <div class="profile-download">
      <span>立刻下载豌豆公主APP</span>
    </div>
    <i v-if="isfalse" @click="logout">退出登录</i>
    <div class="empty-bottom"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      isfalse:false
    }
  },
  methods:{
    logout(){
      this.$store.commit('logout',{
        islogin: false
      })
      this.isfalse = false;
      this.$emit('logoutnow')
      // this.$router.push('/profile');
    }
  },
  mounted(){
    if(this.$store.state.profile.islogin){
      // this.querynum = this.$route.query.num;
      this.isfalse = true;
    }
  }
}
</script>

<style lang="stylus" scoped>
.mydownload
  display flex
  flex-direction column
  justify-content center
  align-content center
  >p 
    font-size .12rem
    color #959595
    text-align center
    padding .15rem 0
  .profile-download
    height .4rem
    margin .05rem 0 .1rem 0
    span
      display block
      width 100%
      height 100%
      background #191919
      color #ffffff
      font-size .12rem
      text-align center
      line-height .4rem
  i 
    height .4rem
    margin .05rem 0 0 0
    display block
    width 100%
    color #6e6e6e
    font-size .15rem
    text-align center
    line-height .4rem
    border .01rem solid #d2d2d2
  .empty-bottom
    height .49rem
</style>