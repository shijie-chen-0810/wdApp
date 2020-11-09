<template>
  <div class="profile">
    <div class="user">

      <div class="user-top">
        <div @click='setProfile'>
          <img :src="avatorsrc" alt="">
        </div>
        <p v-if="islogin" @click="enterlogin">点击登录 / 注册</p>
        <p v-else>{{querynum}}</p>
        <i v-if="!islogin" @click="setpwd">设置密码</i>
      </div>
      
      <ul class="user-content">
        <router-link tag="li" v-for="data in datalist" :key="data.id" :to="data.active">
          <p>{{islogin? '-':data.number}}</p>
          <span>{{data.modulename}}</span>
        </router-link>
      </ul>
    </div>
    <Profilevip></Profilevip>
    <profileorder></profileorder>
    <profileserve></profileserve>
    <profiledownload @logoutnow="logout"></profiledownload>
  </div>
</template>

<script>
import Profilevip from "./profilefeature/Profilevip"
import Profileorder from "./profilefeature/Profileorder"
import Profileserve from "./profilefeature/Profileserve"
import Profiledownload from "./profilefeature/Profiledownload"
import { mapState } from 'vuex'
export default {
  name:'profile',
  data(){
    return {
      islogin:true,
      querynum:'',
      datalist:[
        {
          id:'001',
          number:0,
          modulename:'低现积分',
          active:'/integral'
        },
        {
          id:'002',
          number:0,
          modulename:'优惠卷',
          active:''
        },
        {
          id:'003',
          number:0,
          modulename:'公主说',
          active:''
        }
      ]
    }
  },
  activated(){
    if(this.$store.state.islogin){
      this.querynum = this.$store.state.cellphonenumber;
      this.islogin = false;
    }else{
      this.querynum = '';
      this.islogin = true;
    }
  },
  mounted(){
    if(this.$store.state.islogin){
      this.querynum = this.$store.state.cellphonenumber;
      this.islogin = false;
    }else{
      this.querynum = '';
      this.islogin = true;
    }
  },
  computed:{
    ...mapState(['avator']),
    avatorsrc(){
      return  this.avator===''?'http://106.13.129.90:5000/avator/wandouavator.png':this.avator
    }
  },
  components:{
    Profilevip,
    Profileorder,
    Profileserve,
    Profiledownload
  },
  methods:{
    logout(){
      this.querynum = ''
      this.islogin = true;
    },
    enterlogin(){
      if(this.islogin === true){
        this.$router.push('/login')
      }
    },
    setpwd(){
      this.$router.push('/setpwd')
    },
    setProfile(){
      if(this.$store.state.islogin){
        this.$router.push('/modifydata')
      }else{
        this.$toast.fail('您还未登录')
      }
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
    background url('~assets/images/profile/my_backgroundtop.png') no-repeat
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
        border-radius 50%
        overflow hidden
        margin-left .15rem
        width .5rem
        height .5rem
        img 
          width 100%
          height 100%
      >p
        font-size .18rem
        margin-left .2rem
        flex 1
      >i 
        font-size .12rem
        color #fff
        opacity 0.5
        width .6rem
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
