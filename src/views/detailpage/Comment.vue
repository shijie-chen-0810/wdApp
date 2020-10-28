<template>
    <div class="comment">
        <div>
            <p>商品评价（2193）</p>
            <p>{{ detailData.praise_desc }}</p>
        </div>
        <div>
            <ul>
                <li>滋润度高 30</li>
                <li>滋润度高 30</li>
                <li>滋润度滋润度高高 30</li>
                <li>滋润滋润度高滋润 30</li>
                <li>滋润度高30</li>
            </ul>
        </div>
        <div>
            <img :src="userImg" alt="">
            <p>{{ userName }}</p>
            <div><img src="../../assets/img/cxj_detail/vip_ccef4e.png" alt=""></div>
            <div><img src="../../assets/img/cxj_detail/__805ead.png" alt=""></div>
        </div>
        <div>
            <p>{{ commentText }}</p>
        </div>
        <ul>
            <li v-if="commentImg"><img :src="commentImg" alt=""></li>
        </ul>
        <div>
            <!-- <div>查看全部评价</div> -->
            <router-link :to="{name: 'comments', params: {id: detailData.goods_id}}" tag="div">查看全部评价</router-link>
        </div>
    </div>
</template>

<script>
import {getDetail} from 'network/detailRequest/detailRequest'

export default {
    data() {
        return {
            detailData: Object,
            commontList: [],
            userImg:'',
            userName:'',
            commentText:'',
            commentImg:''
        }
    },
    async mounted() {
        this.detailData = await getDetail(this.$route.params.id)
        try {
            this.commontList = JSON.parse(this.detailData.commontList)
            this.userImg = this.commontList[0].userImg
            this.userName = this.commontList[0].userName
            this.commentText = this.commontList[0].commentText
            this.commentImg = this.commontList[0].commentImg
        } catch (e) {
            console.log('评论数据不是json格式，无法解析~~~~~~~~')
        }
        
    }
    
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'
.comment
    margin 0rem 0.12rem 0.18rem 0.12rem
    padding-top 0.06rem
    border_1px(1px 0 0 0 , solid, #ccc)
    >div:nth-child(1)
        display flex
        justify-content space-between
        margin 0 0 0.18rem 0
        color #191919
        >p:nth-child(1)
            font-size 0.14rem
            font-weight bold
            line-height 0.21rem
        >p:nth-child(2)
            font-size 0.12rem
            line-height 0.21rem    
    >div:nth-child(2)
        margin 0 0 0.06rem 0
        >ul
            display flex
            flex-wrap wrap
            >li
                height 0.24rem
                margin 0 0.09rem 0.12rem 0
                padding 0 0.09rem
                border-radius 0.12rem
                background #FEF6A4
                font-size 0.12rem
                color #191919
                line-height 0.24rem
    >div:nth-child(3)
        display flex 
        margin 0 0 0.06rem 0
        height 0.26rem
        >p
            font-size 0.12rem
            color #6e6e6e
            line-height 0.26rem
        >img:nth-child(1)
            width 0.26rem
            height 0.26rem
            border-radius 50%
        >div:nth-of-type(1)
            display flex
            align-items center
            justify-content center
            margin-left 0.03rem
            >img
                width 0.34rem
                height 0.14rem
        >div:nth-of-type(2)
            display flex
            align-items center
            justify-content center
            margin 0 0 0 0.03rem
            >img
                width 0.18rem
                height 0.18rem
    >div:nth-child(4)
        margin 0 0 0.15rem
        >p
            font-size 0.12rem
            color #191919
            line-height 0.18rem
    >ul:nth-child(5)
        display flex
        flex-wrap wrap
        margin 0 0 0.18rem 0
        >li
            width 0.8rem
            height 0.8rem
            margin-right 0.1rem
            >img 
                width 100%
                height 100%
    >div:nth-child(6)
        display flex
        >div
            height 0.24rem
            padding 0 0.12rem
            margin 0 auto
            border-radius 0.12rem
            background #f0f0f0
            font-size 0.12rem
            line-height 0.24rem
            color #191919
</style>