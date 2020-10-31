<template>
  <div class="box-con">
    <div>
      <van-nav-bar
        title="完善个人资料"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="text-con">
      <van-cell-group class="avator-con">
        <van-uploader class="avator" v-model="uploader" :after-read="afterRead" :max-count="1"/>
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
      
    </div>
    
  </div>
</template>

<script>
import Vue from 'vue';
import { NavBar } from 'vant';
import { Toast } from 'vant';
import { Field } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Uploader } from 'vant';
import { Button } from 'vant';

Vue.use(Button);

Vue.use(Uploader);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(NavBar);
export default {
  data() {
    return {
      nickname: '',
      qq:'',
      email:'',
      uploader:[]
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('保存');
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
      console.log(file);
    },
    submit(){
      if(this.nickname===''||this.qq===''||this.email==='',this.uploader.length===0){
        this.$toast.fail('表单输入不完整')
      }else{
        const formdata = new FormData();
        formdata.append('nickname',this.nickname)
        formdata.append('qq',this.qq)
        formdata.append('email',this.email)
        formdata.append('avator',this.uploader[0].file)
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
