<template>
    <div class="right-boxtwo">

            <a href="" class="right-topa" v-if="Category.banner.length !== 0">
                <img :src="Category.banner.img">
            </a>
            <div 
                class="bigitem"
                v-for="(item,index) in Category.sub"
                :key="index"
            >
                <div class="right-cat-name">
                    {{item.cat_name}} 
                </div>
                <div class="right-cat-group">
                    <a href="" class="item" v-for="(v,i) in item.sub" :key="i">
                        <div class="img-box">
                            <img :src="v.cat_icon">
                        </div>
                        <div class="cat-name">{{v.cat_name}}</div>
                    </a>
                </div>
            </div>
            <div class="right-cat-nametwo">
                热门品牌
            </div>
            <div class="hot-itembox">
                <a href="" class="hot-item" v-for="(item,index) in Category.hot_brand_list" :key="index">
                    <div class="hot-img">
                        <img :src="item.icon">
                    </div>
                    <div class="hot-info">
                        <div class="hot-name">
                            {{item.brand_name}}
                        </div>
                        <div class="hot-meta">
                            <div class="hot-desc">{{item.desc}}</div>
                            <div class="hot-count">
                                <span class="hot-number">{{item.goods_count}}</span>款商品
                            </div>
                        </div>
                    </div>
                </a>
            </div>
    </div>
</template> 

<script>
import Category from 'assets/static/Category.js'
export default {
    props: ['index'],
    computed: {
       Category(){
           return Category[this.index]
       } 
    }
}
</script>

<style lang="stylus" scoped>
    @import  '~assets/stylus/ellipsis.styl'
    .right-boxtwo
        height 100%
        display flex
        flex-direction column
    .right-topa
        display block
        padding .15rem .1rem 0 .1rem
        padding-left .1rem
        img 
            width: 100%;
    .right-cat-name
        line-height .4rem
        background-color #fafafa
        color #191919
        font-size .13rem
        padding-left .1rem
        margin-left .1rem
        margin-right .1rem
        margin-top .15rem
    .right-cat-group
        flex-wrap wrap
        
        display flex
        -webkit-box-pack justify
        justify-content flex-start
        padding-top .1rem
    .item
        width .5rem
        display flex
        -webkit-box-align center
        align-items center
        flex-direction column
        margin-left .09rem
        margin-right .09rem
    .img-box
        height .5rem
        -webkit-box-pack center
        justify-content center
        img 
            max-height .5rem
            max-width .5rem
    .cat-name
        color #000
        font-size .12rem
    .right-cat-nametwo
        line-height .4rem
        background-color #fafafa
        color #191919
        font-size .13rem
        padding-left .1rem
        margin-left .1rem
        margin-right .1rem
        margin-top .15rem
    .hot-item
        display flex
        width 100%;
        margin .1rem 0
    .hot-img
        width .45rem
        height .45rem
        display -webkit-box
        display flex
        -webkit-box-align center
        align-items center
        -webkit-box-pack center
        justify-content center
        border-radius 1px
        margin-left .1rem
        img 
            max-height .45rem
            max-width .45rem
    .hot-info
        -webkit-box-flex 1
        flex 1
        width 1px
        margin-left .1rem
    .hot-name
        color #000
        font-size .12rem
    .hot-meta
        display flex
        -webkit-box-pack justify
        justify-content space-between
        margin-top .05rem
        color #9e9e9e
    .hot-desc
        color #9e9e9e
        font-size .12rem
        width 1.38rem
        ellipsis_num(1)
    .hot-count
        color #9e9e9e
        margin-right .1rem
    .hot-number
        color #EA4141
        font-size .12rem
</style>