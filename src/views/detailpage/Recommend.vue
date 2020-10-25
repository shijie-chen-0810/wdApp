<template>
    <div class="recommend">
        <div>大家都在逛</div>
        <ul>
            <li v-for="(goods,i) in goodsData" :key="i">
                <div><img :src="goods.img_middle" alt=""></div>
                    <div>
                        <p class="text_ellipsis">{{ goods.slogan }}</p>
                        <p class="text_tellipsis">{{ goods.goods_name }}</p>
                        <p>{{ goods.praise_desc }}</p>
                        <div>
                            <p><i>¥</i>{{ goods.finalPrice }}</p>
                            <img src="../../assets/img/cxj_detail/cart_65bbdc.png" alt="">
                        </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import { getGoods } from 'network/homeRequest/homeRequest'

export default {
    data() {
        return {
            goodsData: Array
        }
    },    
    async mounted() {
        const data = await getGoods(Math.floor(Math.random() * (300 - 10 + 1) + 10), 10)
        this.goodsData = data.data
        // console.log(this.goodsData)
    }
}
</script>

<style lang="stylus" scoped>
.recommend
    width 100%
    padding-top 0.1rem
    background #f5f5f5
    >div:nth-child(1)
        height 0.45rem
        line-height 0.22rem
        padding 0.12rem
        font-size 0.14rem
        font-weight bold
        color #191919
        background #fff
    >ul:nth-child(2)
        width 100%
        margin 0.12rem 0.12rem
        display flex
        flex-wrap wrap
        >li
            width 1.71rem
            height 2.9rem
            margin 0 0.1rem 0.1rem 0
            background #fff
            >div:nth-child(1)
                width 1.71rem
                height 1.71rem
                >img 
                    height 100%
                    width 100%
            >div:nth-child(2)
                padding 0.06rem
                >p:nth-child(1)
                    font-size 0.14rem
                    color #000
                    line-height 0.18rem
                    padding-bottom 0.05rem
                    font-weight bold
                >p:nth-child(2)
                    font-size 0.12rem
                    color #000
                    line-height 0.16rem
                >p:nth-child(3)
                    display inline-block
                    font-size 0.12rem
                    color #000
                    line-height 0.2rem
                    background #FEF6A4
                    margin 0.05rem 0
                    padding 0 0.05rem
                >div:nth-child(4)
                    display flex
                    height 0.15rem
                    justify-content space-between
                    >img 
                        width 0.15rem
                        height 0.15rem
                    >p
                        font-size 0.16rem
                        font-weight bold
                        color #000
                        line-height 0.16rem
                        >i
                            font-size 0.12rem

</style>