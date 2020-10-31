<template>
  <div>
    <van-cell title="用户服务协议" is-link />
    <van-cell title="隐私政策" is-link />
    <van-cell title="法律声明" is-link />
    <van-cell title="消费者风险告知书" is-link />
    <van-cell title="知识产权规则" is-link />
    <van-cell title="评价管理规则 " is-link />
    <van-cell title="价格说明" is-link />
    <van-cell title="证照信息" is-link />
  </div>
</template>

<script>
import Vue from 'vue';
import { Cell, CellGroup } from 'vant';

Vue.use(Cell);
Vue.use(CellGroup);
export default {

}
</script>

<style lang="stylus" scoped>

</style>