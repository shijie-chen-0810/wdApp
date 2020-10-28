<template>
  <div class="login">
    <div class="icon-triangle">
      <span class="iconfont" @click="handlegologin">&#xe64e;</span>
    </div>
    <div class="login-content">
      <p>请输入验证码</p>
      <span>验证码已发送至{{phonenum}}</span>
      <div class="login-phone">
        <input 
          type="text" 
          placeholder="请输入验证码"
          v-model="verifynum"
        >
        <span>{{count}}s</span>
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
import { Dialog } from 'vant';
import axios from 'axios'
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
export default {
  data(){
    return {
      verifynum:'',
      show: true,
	    count: '',
      timer: null,
      phonenum:'',
      randomcode:''
    }
  },
  methods:{
    ...mapMutations([
      'changeislogin'
    ]),
    handlegologin(){
      this.$emit("mychange")
    },
    //点击验证判断验证码是否正确
    async loginsuccess(){
      if(this.verifynum.length === 6 && this.verifynum === this.$store.state.profile.verifycode){
        //根据状态码判断后端是否正确处理phonenum,
        let res = await axios({
          method: 'post',
          url:'http://10.9.64.245:5000/profile/users/login',
          data:{
            "cellphonenumber":`${this.$store.state.profile.cellphonenumber}`
          }
        })
        console.log(res)
        if(true){ 
          //修改vuex中登录状态位true
          this.changeislogin({
            type:'changeislogin',
            islogin: true
          })
        }
        this.$emit("mychange")
        this.$router.replace('/profile')
      }else{
        Dialog.alert({
          message: '请输入正确的验证码',
          theme: 'round-button',
        }).then(() => {
          // on close
        });
      }
    }
    
  },
  mounted(){
    this.phonenum = this.$store.state.cellphonenumber
    this.randomcode = this.$store.state.profile.verifycode
    console.log(this.randomcode)
    //60s倒计时
    const TIME_COUNT = 300;
    if (!this.timer) {
      this.count = TIME_COUNT;
      this.show = false;
      this.timer = setInterval(() => {
        if (this.count > 0 && this.count <= TIME_COUNT) {
          this.count -= 1;
        } else {
          this.show = true;
          clearInterval(this.timer);
          this.timer = null;
        }
      }, 1000);
    }
  },
  
  watch:{
    //控制验证码输入
    verifynum(){
      if(this.verifynum >= 6){
        this.verifynum = this.verifynum.slice(0, 6);
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
      position relative
      input 
        border none 
        height 100%
        width 100%
        background #f8f8f8
        border-radius 0 .2rem .2rem 0
      span 
        position absolute
        top .1rem
        right .2rem
        color #8a8b90
        font-size .12rem
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
