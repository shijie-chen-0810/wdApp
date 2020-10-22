<template>
  <div class="login">
    <div class="icon-triangle">
      <span class="iconfont" @click="handlegologin">&#xe64e;</span>
    </div>
    <div class="login-content">
      <p>请输入验证码</p>
      <span>验证码已发送至{{phonenumber}}</span>
      <div class="login-phone">
        <input 
          type="text" 
          placeholder="请输入验证码"
          v-model="verifynum"
        >
      </div>
      <em>未注册的手机号验证通过后将自动注册</em>
      <button 
        class="login-get" 
        type="button" 
        @click="loginsuccess"
      >登录</button>
      <!-- #ea4141  -->
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      phonenumber:"15388599827",
      verifynum:''
    }
  },
  methods:{
    handlegologin(){
      this.$emit("mychange")
    },
    //判断验证码是否正确
    loginsuccess(){
      if(this.verifynum.length === 4){
        this.$router.push({ path: '/wd/profile', query: { num: this.phonenumber }});
      }else{
        alert('请输入完整的验证码');
      }
      
    }
  },
  //控制验证码输入
  watch:{
    verifynum(){
      if(this.verifynum >= 4){
        this.verifynum = this.verifynum.slice(0, 4);
      }
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
      border-radius .2rem
      margin .14rem 0 0
      background #ea4141
</style>