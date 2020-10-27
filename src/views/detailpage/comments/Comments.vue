<template>
    <div class="comment">
        <div class="aaa">
            <div @click="goback">
                <div><svg t="1603773548220" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3070" width="0.2rem" height="0.2rem"><path d="M274.510074 461.204104c130.168642-125.846196 260.332167-251.684206 390.490575-377.400442 53.595662-51.864228 133.49848 32.354895 79.653131 84.346013-115.838262 112.008027-231.6755 223.893256-347.450317 335.904353C513.596358 619.888196 629.989251 735.852324 746.444567 851.690586c52.978609 52.733015-26.921139 136.953162-79.712483 84.282568C535.946388 805.873074 405.233348 675.710572 274.510074 545.546024 252.90194 523.93789 252.342192 482.563574 274.510074 461.204104L274.510074 461.204104zM274.510074 461.204104" p-id="3071" fill="#191919"></path></svg></div>
                商品评价
            </div>
            <div>
                <p>2193条评论</p>
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
            <div v-for="(comment,i) in commontList" :key="i" class="comments">
                <div>
                    <img :src="comment.userImg" alt="">
                    <p>{{ comment.userName }}</p>
                    <div><img src="../../../assets/img/cxj_detail/vip_ccef4e.png" alt=""></div>
                    <div><img src="../../../assets/img/cxj_detail/__805ead.png" alt=""></div>
                </div>
                <div>
                    <p>{{ comment.commentText }}</p>
                </div>
                <ul>
                    <li v-if="comment.commentImg"><img :src="comment.commentImg" alt=""></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import {getDetail} from 'network/detailRequest/detailRequest'
import BScroll from '@better-scroll/core'

export default {
    data() {
        return {
            detailData: Object,
            commontList: []
        }
    },
    async mounted() {
        this.detailData = await getDetail(this.$route.params.id)
        try {
            this.commontList = JSON.parse(this.detailData.commontList)
            console.log(this.commontList)
        } catch (e) {
            console.log('数据不是json格式')
        }
        this.$nextTick(()=>{
            let bs = new BScroll('.comment', {
                scrollY: true,
                click: true,
                mouseWheel: true,
                bounce: {
                    top: false
                }
            })
        })
        
    },
    methods: {
        goback(){
            console.log('~~~~~~~~~~')
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/stylus/border.styl'
.comment
    height 100vh
    .aaa
        margin 0rem 0.12rem 0.18rem 0.12rem
        padding-top 0.06rem
        border_1px(1px 0 0 0 , solid, #ccc)
        >div:nth-child(1)
            height 0.3rem
            line-height 0.3rem
            text-align center
            font-size 0.2rem
            font-weight bold
            position relative
            >div 
                height 0.3rem
                position absolute
                left 0
                display flex
                justify-content center
                align-items center
        >div:nth-child(2)
            display flex
            justify-content space-between
            color #191919
            >p:nth-child(1)
                font-size 0.14rem
                line-height 0.21rem
            >p:nth-child(2)
                font-size 0.12rem
                line-height 0.21rem    
        >div:nth-child(3)
            margin 0.1rem 0 0 0
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
        >.comments
            border_1px(0 0 1px 0 , solid, #999)
            padding 0.12rem 0
            >div:nth-child(1)
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
            >div:nth-child(2)
                margin 0 0 0.15rem
                >p
                    font-size 0.12rem
                    color #191919
                    line-height 0.18rem
            >ul:nth-child(3)
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
</style>