<template>
  <div class="login">
    <div class="icon-triangle">
      <span class="iconfont" @click="goback">&#xe64e;</span>
    </div>
    <div class="login-content">
      <span>{{phonenum}},你好</span>
      <div class="login-phone" v-show="isshow">
        <input 
          type="password" 
          placeholder="请输入原密码"
          v-model="oripwd"
        >
      </div>
      <div class="login-phone" v-show="isshow">
        <input 
          type="password" 
          placeholder="请输入原密码"
          v-model.lazy="curpwd"
        >
      </div>
      <div class="login-phone">
        <input 
          type="password" 
          placeholder="请输入密码"
          v-model.lazy="curpwd"
        >
      </div>
      <div class="login-phone">
        <input 
          type="password" 
          placeholder="请确认密码"
          v-model.lazy="curpwdaga"
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

import { setpwd } from 'network/profileRequest/profileRequest'
export default {
  name:'setpwd',
  data(){
    return {
      phonenum:'',
      isshow:false,
      oripwd:'',
      curpwd:'',
      curpwdaga:''
    }
  },
  methods:{
    ...mapMutations([
      'changeislogin'
    ]),
    goback(){
      this.$router.go(-1)
    },
    confirm(){
      if (this.curpwd != this.curpwdaga) {
        Dialog.alert({
          message: '密码不一样',
          theme: 'round-button',
        }).then(() => {
          this.curpwdaga = ''
        });
        return;
      };
      Dialog.confirm({
        message: '你确定吗',
      })
      .then(async () => {
        let res = await setpwd(this.phonenum, this.curpwdaga)
        console.log(res)
        if(res.status===200){
          Dialog.alert({
            message: '密码修改成功',
          }).then(() => {
            this.$router.push('/profile')
          });
        }else{
          Dialog.alert({
            message: '密码修改失败',
          }).then(() => {
          });
        }
      })
    }
  },
  mounted(){
    this.phonenum = this.$store.state.cellphonenumber
  },
  watch:{
    curpwd(){
      let reg = /^[0-9a-zA-Z]\w{5,11}$/
      if (!reg.test(this.curpwd)) {
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
