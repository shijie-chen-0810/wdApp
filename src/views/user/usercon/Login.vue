<template>
  <div class="login">
    <div class="icon-triangle">
      <span class="iconfont" @click="handleclick">&#xe64e;</span>
    </div>
    <div class="login-content">
      <p>手机验证码登录</p>
      <span>登录即表明同意 <i>用户协议</i> 和 <i>隐私政策</i> </span>
      <div class="login-phone">
        <input 
          type="text" 
          v-model="cellphonebumber" 
          placeholder="请输入手机号"
        >
      </div>
      <em>未注册的手机号验证通过后将自动注册</em>
      <button 
        class="login-get" 
        type="button" 
        @click="getverify" 
        :style="getstyle"
      >获取短信验证码</button>
      <!-- #ea4141  -->
      <router-link to="/loginpwd" tag="b">密码登录</router-link>
    </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
import axios from 'axios';
import { mapMutations } from 'vuex';
export default {
  data(){
    return {
      cellphonebumber:'',
      verifycode:'',
      getstyle:{
        background:'#d7d7d9'
      }
    }
  },
  methods:{
    //路由返回上一级
    handleclick(){
      this.$router.go(-1)
    },
    ...mapMutations([
      'changephonenum',
      'changephonenumroot'
    ]),
    //点击获取验证码,将手机号与验证码存入vuex,登录状态为false
    async getverify(){
      if(this.cellphonebumber.length === 11){
        let reg = /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (!reg.test(this.cellphonebumber)) {
          Dialog.alert({
            message: '请输入正确的手机号',
            theme: 'round-button',
          }).then(() => {
            // on close
          });
          return;
        };
        //随机生成6位验证码
        let randomcode = ''
        for(let i = 1; i <= 6; i++){
          let num = Math.floor(Math.random()*10);
          randomcode += num;
        };
        //判断是否是测试号码
        if(this.cellphonebumber==='15388599827'||this.cellphonebumber==='17835753422'){
          //获取短信验证码
          let asid = '8a216da8754a45d501755573c2c204b5'
          let token = '19a0b29b00a648b1ae76bdb962c6339d'
          let timenow = new Date().getTime()
          //sig为 asid + token + timenow  md5加密
          //Authorization 为 asid:timenow  base64加密
          let sig = this.$md5(`${asid}${token}${timenow}`).toUpperCase()
          let authorization = this.Base64.encode(`${asid}:${timenow}`)

          let res = await axios({
            method: 'post',
            url: `/api/2013-12-26/Accounts/${asid}/SMS/TemplateSMS?sig=${sig}`,
            headers:{
              'Accept':'application/json',
              'Content-Type':'application/json;charset=utf-8',
              'Authorization':`${authorization}`
            },
            data: {
              "to":`${this.cellphonebumber}`,
              "appId":"8a216da8754a45d501755573c3c304bc",
              "reqId":`abc${randomcode}`,
              "subAppend":"8888",
              "templateId":"1",
              "datas":[`${randomcode}`,"5"]
            }  
          })
          console.log(res.data)
        }
        this.verifycode = randomcode
        //改变vuex中登录phonenum,verify
        this.changephonenumroot({
          type:'changephonenumroot',
          cellphonenumber: this.cellphonebumber,
        })
        this.changephonenum({
          type:'profile/changephonenum',
          verifycode: this.verifycode
        })
        // console.log(this.$store.state.cellphonenumber)
        this.$emit("myclick")
      }
    }
  },
  watch:{
    //cellphonenumber正常时，不能继续输入，可以获取verift
    cellphonebumber(){
      if(this.cellphonebumber.length >= 11){
        this.cellphonebumber = this.cellphonebumber.slice(0,11)
        this.getstyle.background = '#ea4141'
      }else{
        this.getstyle.background = '#d7d7d9'
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
    >b 
      color #04488d
      font-size .12rem
      margin-top .12rem
      font-weight normal
</style>
