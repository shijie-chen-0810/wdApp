<template>
    <div class="goods_detail">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
            <van-swipe-item v-for="(val,i) in imgList" :key="i">
                <img :src="val" alt="">
            </van-swipe-item>
        </van-swipe>
        <div>
            <div>
                <p>尝鲜OMG</p>
                <div>
                    <span><i>¥</i>{{ detailData.finalPrice }}</span>
                    <div>会员</div>
                    <div>¥{{ detailData.origin_vip_final_price }}</div>
                </div>
            </div>
            <p>{{ detailData.slogan }}</p>
            <p class="text_ellipsis">{{ detailData.goods_name }}</p>
        </div>
        <div>
            <div>
                <div>豌豆会员&nbsp;预计节省<i>&nbsp;{{ detailData.finalPrice - detailData.origin_vip_final_price }}&nbsp;</i>元</div>
                <div>开卡></div>
            </div>
        </div>
        <div>
            <img src="https://oss5.wandougongzhu.cn/de5a3474bb8b98ecc7ae9239ae436d90.png" alt="">
        </div>
        <div>
            <div>已选</div>
            <div>
               <p>日本仓 预计周一发货</p> 
               <div>
                   <div>
                       <div><img src="https://oss4.wandougongzhu.cn/233e4b71ab71faf28526854b45b8554c.jpg?x-oss-process=image/resize,w_300,h_300/format,webp" alt=""></div>
                       <p class="text_ellipsis">正品货源</p>
                   </div>
                   <div>
                       <div><img src="https://oss2.wandougongzhu.cn/4125ea0d3a2028b7195168bd74f89906.png" alt=""></div>
                       <p class="text_ellipsis">自营日本仓发货</p>
                   </div>
                   <div>
                       <div><img src="https://oss2.wandougongzhu.cn/8d9372b6f8956b0a7a774a63eb83203b.png" alt=""></div>
                       <p class="text_ellipsis">海关清关</p>
                   </div>
                   <div>
                       <div><img src="https://oss2.wandougongzhu.cn/a6b36adc31c1e3884d56a17aca5092c3.png" alt=""></div>
                       <p class="text_ellipsis">国内配送</p>
                   </div>
               </div>
            </div>
        </div>
        <ul>
            <li v-for="(val,i) in tipList" :key="i">{{ val }}</li>
        </ul>
    </div>
</template>

<script>
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';

import {getDetail} from 'network/detailRequest/detailRequest'

Vue.use(Swipe);
Vue.use(SwipeItem);
export default {
    data() {
        return {
            detailData: Object,
            imgList: [],
            tipList: []
        }
    },
    async mounted() {
        this.detailData = await getDetail(this.$route.params.id)
        this.imgList = JSON.parse(this.detailData.imgList)
        this.tipList = JSON.parse(this.detailData.tipList)
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'
.goods_detail
    .my-swipe
        margin-bottom 0.03rem
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 3.47rem;
        height: 3.47rem;
        text-align: center;
    }
    .my-swipe .van-swipe-item > img{
        width: 100%;
        height: 100%;
    }
    >div:nth-child(2)
        height 1.49rem
        padding 0 0.12rem 0.12rem
        >div
            height 0.79rem
            margin-bottom 0.15rem
            padding 0.15rem 0.09rem
            background url('../../assets/img/cxj_detail/b-b-fs8_abb5d4.png') no-repeat center/3.51rem 0.79rem
            >p
                font-size 0.12rem
                color #fff
                margin-bottom 0.09rem
            >div
                height 0.24rem
                display flex
                span
                    display block
                    font-size 0.24rem
                    line-height 0.24rem
                    color #fff
                    margin-right 0.1rem
                    i
                      font-size 0.18rem
                      font-weight bold
                div
                    height 0.12rem 
                    font-size 0.12rem
                    line-height 0.12rem
                    padding 0 0.03rem
                    margin-top 0.08rem
                div:nth-of-type(1)
                    color #553320
                    background #f9ddc8
                div:nth-of-type(2)
                    color #fff
                    background #191919
        >p:nth-of-type(1)
            height 0.16rem
            font-size 0.16rem
            line-height 0.16rem
            color #191919
            font-weight bold
            margin-bottom 0.05rem
        >p:nth-of-type(2)
            height 0.12rem
            font-size 0.12rem
            line-height 0.12rem
            color #191919
    >div:nth-child(3)
        height 0.37rem
        margin 0 0.12rem 0.16rem
        >div
            height 0.37rem
            background-image linear-gradient(to right, #F8DDC9, #F2C6A6)
            border-radius 0.02rem
            padding 0 0.12rem
            display flex
            justify-content space-between
            >div:nth-child(1)
                font-size 0.12rem
                line-height 0.37rem
                color #553320
                >i 
                    color #ea4141
            >div:nth-child(2)
                font-size 0.12rem
                line-height 0.37rem
                color #A36948
    >div:nth-child(4)
        width 100%
        height 0.97rem
        img 
            width 100%
            height 100%
    >div:nth-child(5)
        margin 0.1rem 0.15rem 0 0.12rem
        height 1.2rem
        display flex
        border_1px(0 0 1px 0 , solid, #ccc)
        >div:nth-child(1)
            width 0.32rem
            font-size 0.14rem
            color #000
            font-weight bold
            margin-right 0.1rem
        >div:nth-child(2)
            width 100%
            height 100%
            display flex
            flex-direction column
            >p
                font-size 0.14rem
                color #CECECE
            >div
               display flex
               padding-top 0.225rem
               height 100%
               justify-content space-between
               >div
                    height 100%
                    padding 0 0.08rem
                    >div
                        width 0.375rem
                        height 0.375rem
                        margin 0 auto
                        >img 
                            width 100%
                            height 100%
                            border-radius 50%
                    >p
                        font-size 0.12rem
                        color #191919
                        text-align center
    ul
        display flex
        height 0.54rem
        line-height 0.54rem
        font-size 0.12rem
        color #191919
        padding-left 0.15rem
        li
            padding-right 0.2rem

            
                



                
                
                    


</style>