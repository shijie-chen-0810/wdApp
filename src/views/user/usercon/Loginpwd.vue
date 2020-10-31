<template>
  <div class="login">
    <div class="icon-triangle">
      <span class="iconfont" @click="goback">&#xe64e;</span>
    </div>
    <div class="login-content">
      <span>尊敬的用户,请登录</span>
      <div class="login-phone">
        <input 
          type="text" 
          placeholder="请输入用户名"
          v-model="username"
        >
      </div>
      <div class="login-phone">
        <input 
          type="password" 
          placeholder="请输入密码"
          v-model.lazy="pwd"
        >
      </div>
      <button 
        class="login-get" 
        type="button" 
        @click="confirm"
      >确定</button>
      <!-- #ea4141  -->
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Dialog } from 'vant';
import { mapState } from 'vuex'
import { mapMutations } from 'vuex'
import { getlogin } from 'network/profileRequest/profileRequest'

export default {
  data(){
    return {
      username:'',
      pwd:''
    }
  },
  methods:{
    ...mapMutations([
      'changeislogin',
      'changephonenumroot'
    ]),
    goback(){
      this.$router.go(-1)
    },
    async confirm(){
      let res =await getlogin(this.username, this.pwd)
      console.log(res)
      if(res.data.code === 200){ 
        //修改vuex中登录状态位true
        localStorage.setItem('x-access-token',res['headers']['x-access-token'])
        this.changeislogin({
          type:'changeislogin',
          islogin: true
        })
        this.changephonenumroot({
          type:'changephonenumroot',
          cellphonenumber: this.username,
        })
        Dialog.alert({
          message: '登录成功',
          theme: 'round-button',
        }).then(() => {
          this.$router.push('/profile')
        });
      }else{
        Dialog.alert({
          message: '登录失败',
          theme: 'round-button',
        }).then(() => {
          
        });
      }

      
    }
  },
  watch:{
    username(){
      if(this.username.length >= 11){
        this.username = this.username.slice(0,11)
      }
    },
    pwd(){
      let reg = /^[0-9a-zA-Z]\w{5,11}$/
      if (!reg.test(this.pwd)) {
        Dialog.alert({
          message: '只能由数字字母下划线组成, 6 ~ 12 位',
          theme: 'round-button',
        }).then(() => {
          // on close
        });
        return;
      };
    },
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
      margin-bottom .1rem
      input 
        border none 
        height 100%
        width 100%
        background #f8f8f8
        border-radius 0 .2rem .2rem 0
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
