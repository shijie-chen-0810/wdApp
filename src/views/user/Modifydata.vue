<template>
  <div class="box-con">
    <div>
      <van-nav-bar
        title="完善个人资料"
        left-text="返回"
        right-text="保存"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="text-con">
      <van-cell-group>
        <van-field v-model="value" label="昵称" placeholder="请输入昵称" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="qq" label="QQ" placeholder="请输入QQ" />
      </van-cell-group>
      <van-cell-group>
        <van-field v-model="email" label="邮箱" placeholder="请输入email" />
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
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Field);
Vue.use(NavBar);
export default {
  data() {
    return {
      value: '',
      qq:'',
      email:''
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onClickRight() {
      Toast('保存');
    },
  },
}
</script>

<style lang="stylus" scoped>
.box-con
  background #eee
  .text-con
    margin-top .1rem
</style>