<template>
  <div class="box-con">
    <div>
      <van-tabs v-model="activeName" line-width="60px">
        <van-tab title="订单问题" name="a" >
          <van-collapse v-model="activeNames">
            <van-collapse-item title="支付问题" name="1">
              <van-cell value="如何取消或修改订单？" />
              <van-cell value="是否可以取消订单？" />
              <van-cell value="豌豆公主购物有发票吗？" />
              <van-cell value="豌豆公主支持那些支付方式？" />
            </van-collapse-item>
            <van-collapse-item title="物流问题" name="2">
              <van-cell value="什么情况全额补贴运费？" />
              <van-cell value="豌豆都使用什么快递发货？" />
              <van-cell value="已付款订单什么时间发货？" />
              <van-cell value="日本仓发出和香港仓的货品有区别吗？" />
              <van-cell value="物流显示“收件人不在指定地点”怎么办？" />
              <van-cell value="物流信息查不到" />
              <van-cell value="如何更改配送地址和配送电话" />
            </van-collapse-item>
            <van-collapse-item title="售后问题" name="3">
              <van-cell value="售后规则" />
              <van-cell value="商品完好标准" />
              <van-cell value="退货流程" />
              <van-cell value="邮费退还说明" />
              <van-cell value="税费退还说明" />
              <van-cell value="退货订单优惠退还说明" />
              <van-cell value="退款到账时间说明" />
              <van-cell value="取消订单优惠返还说明" />
            </van-collapse-item>
            <van-collapse-item title="关税问题" name="4">
              <van-cell value="为何要填写真实姓名和身份证号?" />
              <van-cell value="国家相关政策规定购买跨境电商平台商品的规定？" />
              <van-cell value="什么是“免税“标签？" />
              <van-cell value="EMS和非EMS的通关模式分别是什么？" />
              <van-cell value="商品税费是什么？豌豆公主所售商品收取税费吗？" />
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab title="购物问题" name="b">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="商品问题" name="1">
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
            </van-collapse-item>
            <van-collapse-item title="优惠卷及密令问题" name="2">
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
            </van-collapse-item>
            <van-collapse-item title="活动问题" name="3">
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
              <van-cell value="关于保质期？" />
            </van-collapse-item>
          </van-collapse>
        </van-tab>
        <van-tab title="使用问题" name="c">
          <van-collapse v-model="activeNames">
            <van-collapse-item title="邀请注册问题" name="1">
              <van-cell value="如何绑定邀请人？" />
            </van-collapse-item>
            <van-collapse-item title="账户问题" name="2">
              <van-cell value="如何绑定邀请人？" />
              <van-cell value="如何绑定邀请人？" />
            </van-collapse-item>
          </van-collapse>
        </van-tab>
      </van-tabs>
    </div>
    <div>
      <van-tabbar v-model="active">
        <van-tabbar-item icon="home-o">联系客服</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { Tab, Tabs } from 'vant';
import { Collapse, CollapseItem } from 'vant';
import { Cell, CellGroup } from 'vant';
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Cell);
Vue.use(CellGroup);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Tab);
Vue.use(Tabs);
export default {
  data() {
    return {
      active: 0,
      activeName: 'a',
      activeNames: ['1'],
    };
  },
}
</script>

<style lang="stylus" scoped>
.box-con
  background #f5f5f5
  height 100%
</style>