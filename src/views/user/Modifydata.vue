<template>
  <div class="box-con">
    <div>
      <van-nav-bar
        title="完善个人资料"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="text-con">
      <van-cell-group class="avator-con">
        <van-uploader class="avator" v-model="uploader" :max-count="1"/>
        <van-cell value="上传头像" size="small" class="avator-title" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="nickname" label="昵称" placeholder="请输入昵称" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="qq" label="QQ" placeholder="请输入QQ" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="email" label="邮箱" placeholder="请输入email" />
      </van-cell-group>
      <van-cell-group class="submit">
        <van-button type="info" round class="submitbtn" @click='submit'>提交</van-button>
      </van-cell-group>
      <img data-v-d2342bc8="" src="http:10.9.64.245:5000/avator/avator1604199845829.png" alt="">
    </div>
    <van-overlay :show="show" @click="show = false">
    </van-overlay>
  </div>
</template>

<script>
import { setprofile } from 'network/profileRequest/profileRequest'
import { getprofile } from 'network/profileRequest/profileRequest'

import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Uploader } from 'vant';
import { Button } from 'vant';
import { Overlay } from 'vant';

import { mapState } from 'vuex'



Vue.use(Overlay);
Vue.use(Button);
Vue.use(Uploader);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(NavBar);
export default {
  name:'modifydata',
  data() {
    return {
      nickname: '',
      qq:'',
      email:'',
      uploader:[],
      show:false
    };
  },
  computed:{
    ...mapState(['cellphonenumber'])
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    async submit(){
      if(this.nickname===''||this.qq===''||this.email==='',this.uploader.length===0){
        this.$toast.fail('表单输入不完整')
      }else{
        const formdata = new FormData();
        formdata.append('user_id',this.cellphonenumber)
        formdata.append('nickname',this.nickname)
        formdata.append('qq',this.qq)
        formdata.append('email',this.email)
        formdata.append('avator',this.uploader[0].file)
        const result = await setprofile(this.cellphonenumber,formdata)
        if(result.data.status === 200){
          this.show = true
          this.$toast.success('修改成功')
          const profile = await getprofile(this.cellphonenumber)
          this.$store.commit('changeavatorroot',{avator:profile.data.avator})
          setTimeout(()=>{
            this.$toast.clear()
            this.$router.replace('/profile')
          },1000)
        }
      }
    }
  },
  watch:{
    uploader(value){
      console.log(value)
    }
  }
}
</script>

<style lang="stylus" scoped>
.box-con
  background #eee
  .text-con
    margin-top .1rem
.avator-con
  display flex
  justify-content center
  align-items center
  flex-direction column
  .avator
    width 1rem
    height 1rem
    display flex
    justify-content center
    align-items center
.avator-title
    padding 0
    color #ccc
.submit
  text-align center
  padding 0.1rem
  .submitbtn
    padding 0.2rem 0.3rem
    height 0.3rem
    font-size 0.16rem
    line-height 0.3rem
</style>
