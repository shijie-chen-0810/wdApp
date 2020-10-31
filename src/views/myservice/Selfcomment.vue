<template>
  <div>
    <van-tabs v-model="activeName" background="#fafafa" line-width=".8rem"	>
      <van-tab title="全部(0)" name="a">
        <div class="text">
          暂无更多内容
        </div>
      </van-tab>
      <van-tab title="公主点评(0)" name="b">
        <div class="text">
          暂无更多内容
        </div>
      </van-tab>
      <van-tab title="收到赞(0)" name="c">
        <div class="text">
          暂无更多内容
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      activeName: 'a',
    };
  },
}
</script>

<style lang="stylus" scoped>
.text 
  text-align center
  font-size .13rem
  color #9e9e9e
  margin-top .1rem
</style>