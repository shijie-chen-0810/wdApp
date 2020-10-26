<template>
    <div class="goods_detail">
        <div>
            <div>
                <div><img :src="companyInfo.logo" alt="" @load="refresh"></div>
                <div>
                    <p>{{ companyInfo.name }}</p>
                    <p>在售商品&nbsp;{{ detailData.residue_count }}&nbsp;件，总售&nbsp;702&nbsp;件</p>
                </div>
            </div>
        </div>
        <div>相关推荐</div>
        <div>
            <ul>
                <li v-for="(goods,i) in goodsData" :key="i" @click="changeDetail(goods.goods_id)">
                    <div><img :src="goods.img_middle" alt="" @load="refresh"></div>
                    <div>
                        <p class="text_tellipsis">{{ goods.goods_name }}</p>
                        <p>{{ goods.praise_desc }}</p>
                        <p><i>¥</i>{{ goods.finalPrice }}</p>
                        <div>
                            <img src="../../assets/img/cxj_detail/cart_65bbdc.png" alt="" @load="refresh">
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        <div><img src="../../assets/img/cxj_detail/102x_460c12.png" alt="" @load="refresh"></div>
        <div>产品特点</div>
        <ul>
            <li v-for="(val,i) in detailImgList" :key="i"><img :src="val" alt="" @load="refresh"></li>
        </ul>
    </div>
</template>

<script>
import {getDetail} from 'network/detailRequest/detailRequest'
import { getGoods } from 'network/homeRequest/homeRequest'
export default {
    data() {
        return {
            detailData: Object,
            companyInfo: Object,
            detailImgList: [],
            goodsData:[]
        }
    },    
    async mounted() {
        this.detailData = await getDetail(this.$route.params.id)
        const data = await getGoods(Math.floor(Math.random() * (300 - 10 + 1) + 10), 10)
        this.goodsData = data.data
        this.companyInfo = JSON.parse(this.detailData.companyInfo)
        this.detailImgList = JSON.parse(this.detailData.detailImgList)
        // console.log(this.goodsData)
    },
    methods:{
        refresh(){
            this.$emit('refresh')
        },
        changeDetail(id){
            this.$router.push('/detail/'+id)
            this.$router.go(0)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'
.goods_detail
    >div:nth-child(1)
        height 1.02rem
        margin 0 0.12rem
        padding 0.18rem 0
        border_1px(1px 0 1px 0 , solid, #ccc)
        >div
            display flex
            height 100%
            width 100%
            border_1px(1px, solid, #ccc)
            padding 0.1rem 0
            >div:nth-child(1)
                width 0.44rem
                height 0.44rem
                margin 0 0.12rem
                >img 
                    height 100%
                    width 100%
            >div:nth-child(2)
                height 0.44rem
                >p:nth-child(1)
                    height 0.28rem
                    font-size 0.18rem
                    font-weight bold 
                    color #191919
                    line-height 0.26rem
                >p:nth-child(2)
                    height 0.16rem
                    font-size 0.12rem
                    color #191919
                    line-height 0.16rem

    >div:nth-child(2)
        height 0.56rem
        padding 0.18rem 0
        margin 0 0.12rem
        font-size 0.14rem
        color #000
        line-height 0.2rem
    >div:nth-child(3)
        width 3.63rem
        overflow-x auto
        >ul
            height 2.2rem
            margin-left 0.12rem
            padding-bottom 0.12rem
            display flex
            >li
                width 1.13rem
                height 100%
                margin-right 0.06rem
                border_1px(1px, solid, #ccc)
                >div:nth-child(1)
                    width 1.13rem
                    height 1.13rem
                    >img 
                        height 100%
                        width 100%
                >div:nth-child(2)
                    padding 0.06rem
                    >p:nth-child(1)
                        font-size 0.12rem
                        color #000
                        line-height 0.16rem
                    >p:nth-child(2)
                        display inline-block
                        font-size 0.12rem
                        color #000
                        line-height 0.16rem
                        background #fef6a4
                        margin-bottom 0.05rem
                    >p:nth-child(3)
                        font-size 0.14rem
                        font-weight bold
                        color #000
                        line-height 0.16rem
                        >i
                            font-size 0.12rem
                    >div:nth-child(4)
                        display flex
                        height 0.15rem
                        flex-direction row-reverse
                        >img 
                            width 0.15rem
                            height 0.15rem
    >div:nth-child(4)
        width 100%
        height 2.02rem
        padding 0.24rem 0.12rem
        border_1px(1px 0, solid, #ccc)
        >img
            height 100%
            width 100%
    >div:nth-child(5)
        height 0.22rem
        line-height 0.22rem
        margin 0.1rem 0
        font-size 0.14rem
        font-weight bold
        color #191919
        text-align center
    >ul:nth-child(6)
        >li
            width 100%
            height 3rem
            >img 
                height 100%
                width 100%
</style>
