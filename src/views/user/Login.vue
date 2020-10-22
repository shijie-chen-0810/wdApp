<template>
  <div class="login">
    <div class="icon-triangle">
      <span class="iconfont" @click="handleclick">&#xe64e;</span>
    </div>
    <div class="login-content">
      <p>手机验证码登录</p>
      <span>登录即表明同意 <i>用户协议</i> 和 <i>隐私政策</i> </span>
      <div class="login-phone">
        <input type="text" v-model="cellphonebumber" placeholder="请输入手机号">
      </div>
      <em>未注册的手机号验证通过后将自动注册</em>
      <button class="login-get" :disabled="disabled" type="button">获取短信验证码</button>
      <!-- #ea4141  -->
      <b>密码登录</b>
      {{cellphonebumber}}
    </div>

  </div>
</template>

<script>
export default {
  data(){
    return {
      cellphonebumber:'',
      disabled:false,

    }
  },
  methods:{
    handleclick(){
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
.login 
  position relative
  .icon-triangle
    position absolute
    width .2rem
    height .2rem
    left .15rem
    top .05rem
    span 
      font-size .2rem
  .login-content
    display flex
    flex-direction column
    padding .62rem .29rem 0
    >p 
      font-size .18rem
      margin 0 0 .025rem
      color #000000
    >span
      font-size .12rem
      color #8a8b90
      margin 0 0 .24rem
      i  
        color #04488d
    .login-phone
      height .4rem
      padding-left .15rem
      background #f8f8f8
      border-radius  .2rem 
      input 
        border none 
        height 100%
        width 100%
        background #f8f8f8
        border-radius 0 .2rem .2rem 0
    >em 
      font-size .12rem
      color #aaabaf
      margin .075rem 0 0
    >.login-get
      border none
      height .4rem
      text-align center
      line-height .4rem
      font-size .14rem
      color #ffffff
      background #d7d7d9
      border-radius .2rem
      margin .14rem 0 0
    >b 
      color #04488d
      font-size .12rem
      margin-top .12rem
      font-weight normal
</style>