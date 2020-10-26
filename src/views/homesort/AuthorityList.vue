<template>
  <div class="list-con">
    <ul class="list">
      <li class="list-left">
        <authority-list-item :info='leftInfo'></authority-list-item>
      </li>
      <li class="list-center">
        <van-swipe style="height: 100%;"
          vertical :show-indicators='false'
          :autoplay="2500"
          duration="1500"
          :touchable='false'
          >
          <van-swipe-item class="center-item" v-for="(item,index) in centerInfo" :key='index'>
            <authority-list-item :info='item'></authority-list-item>
          </van-swipe-item>
        </van-swipe>
      </li>
      <li class="list-right">
        <authority-list-item :info='rightInfo'></authority-list-item>
      </li>
    </ul>
  </div>
</template>

<script>
import AuthorityListItem from './AuthorityListItem'
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
  data(){
    return{
      leftInfo:{
        img:'https://oss4.wandougongzhu.cn/53929c8a52e965a9b6e9dd88bd8180b2.png?x-oss-process=image/resize,w_355/format,webp',
        desc:'眼霜眼膜'
      },
      centerInfo:[
        {
          img:'https://oss2.wandougongzhu.cn/e239686f418d64288e090cda30667a21.png?x-oss-process=image/resize,w_355/format,webp',
          desc:'遮瑕'
        },
        {
        img:'https://oss4.wandougongzhu.cn/45531701face0cdbef36439ad712b3ca.png?x-oss-process=image/resize,w_355/format,webp',
        desc:'化妆棉'
      },
      ],
      rightInfo:{
        img:'https://oss3.wandougongzhu.cn/2c266951d46ccb2ca447e0186a619f15.png?x-oss-process=image/resize,w_355/format,webp',
        desc:'护肤套装'
      }
    }
  },
  components:{
    AuthorityListItem
  }
}
</script>

<style lang="stylus" scoped>
.list-con
  height 1.47rem
  padding 0 0.15rem
  .list
    display flex
    height 100%
    justify-content space-between
    li
      height 100%
      width 1.07rem
      .center-item
        height 100%
      
</style>
