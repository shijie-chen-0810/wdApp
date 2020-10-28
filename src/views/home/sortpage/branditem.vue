<template>
    <div class="brand-box">
        <div 
            class="item-box"
            v-for="(item,index) in BrandSort"
            :key="index"
        >
            <div class="hot-title-box" >
                <div class="hot-title">
                    {{index | capitalize}}階&nbsp;&nbsp;·&nbsp;&nbsp;{{item.info.name}}
                </div>
            </div>
            <div class="hot-row">
                <a href="" class="hot-item" v-for="(v,i) in item.list" :key="i">
                    <div class="hot-img">
                        <img data-src="https://oss4.wandougongzhu.cn/7947f3e3b17ab46f9d36ac7990dc7ec4.jpg?x-oss-process=image/resize,w_300,h_300/format,webp" :src="v.icon" data-lzled="true" class="lz-img-loaded">
                    </div>
                    <div class="hot-item-title">{{v.name}}</div>
                </a>
            </div>

                    
        </div>
        
        <van-index-bar :index-list="indexList">
            <div class="group">
                <div class="groupitem" v-for="(item,index) in BrandSortlist" :key="index">
                    <van-index-anchor :index="item.info.name" :id="item.info.name" class="group-title" >{{item.info.name}}</van-index-anchor>
                    
                    <a href="" class="brand" v-for="(item,index) in item.list" :key="index">
                    <!-- <a href="" class="brand" v-for="(item,index) in BrandSortlist" :key="index"> -->
                        <div class="brand-icon">
                            <img data-src="https://oss2.wandougongzhu.cn/db6c4e4a714902cb9ab84e93ff726e01.jpg?x-oss-process=image/resize,w_300,h_300/format,webp" :src="item.icon" data-lzled="true" class="lz-img-loaded">
                        </div>
                        <div class="brand-name">{{item.name}}</div>
                    </a>
                </div>
                
                
                <!-- <van-index-anchor index="A" id="A" class="group-title">A</van-index-anchor>
                    <a href="" class="brand">
                        <div class="brand-icon">
                            <img data-src="https://oss2.wandougongzhu.cn/db6c4e4a714902cb9ab84e93ff726e01.jpg?x-oss-process=image/resize,w_300,h_300/format,webp" src="https://oss2.wandougongzhu.cn/db6c4e4a714902cb9ab84e93ff726e01.jpg?x-oss-process=image/resize,w_300,h_300/format,webp" data-lzled="true" class="lz-img-loaded">
                        </div>
                        <div class="brand-name">上间果子店 </div>
                    </a>
                    <a href="" class="brand">
                        <div class="brand-icon">
                            <img data-src="https://oss4.wandougongzhu.cn/d1860e6be8412913851ae79544a0fe22.jpg?x-oss-process=image/resize,w_300,h_300/format,webp" src="https://oss4.wandougongzhu.cn/d1860e6be8412913851ae79544a0fe22.jpg?x-oss-process=image/resize,w_300,h_300/format,webp" data-lzled="true" class="lz-img-loaded">
                        </div>
                        <div class="brand-name">ACCHE </div>
                    </a> -->
            </div>
        </van-index-bar>
    </div>
</template>

<script>
import Vue from 'vue';
import { IndexBar, IndexAnchor } from 'vant';
import BrandSort from 'assets/static/BrandSort.js'
Vue.use(IndexBar);
Vue.use(IndexAnchor);
export default {
    data() {
        return {
            indexList: ['#L','A','B','C','D','E','F','G','H','I','J','K','L','N','M','O','P','Q','R','S','T','U','V','W','X','Y','Z','ｇ','#'],
            BrandSort:BrandSort.hot_list,
            BrandSortlist:BrandSort.list,
            
        }
    },
    filters: {
        capitalize: function (value) {
            if (!value) return '一'
            if (value == '1') return '二'
            if (value == '2') return '三'
            if (value == '3') return '四'
            if (value == '4') return '五'
            if (value == '5') return '六'
    }
}
}
</script>

<style lang="stylus" scoped>
    .hot-title-box
        margin .2rem 0 .1rem .15rem
    .hot-title
        height .28rem
        line-height .28rem
        text-align left
        font-size .2rem
        color #191919
    .hot-row
        margin 0 .25rem .1rem .22rem;
        display -webkit-box;
        display flex;
        flex-wrap wrap
        -webkit-box-pack justify;
        justify-content space-between;
        font-size .11rem
    .hot-item
        width .75rem
        display block
    .hot-img
        width .75rem
        height .75rem
        display -webkit-box
        display flex
        -webkit-box-pack center
        justify-content center
        -webkit-box-align center
        align-items center
        border 1px solid #e6e6e6
        border-radius .1rem
        overflow hidden
        img
            max-width .75rem
            max-height .75rem
    .hot-item-title
        text-align center
        color #191919
        font-size .12rem
        margin-top .12rem
        line-height .24rem
        height .24rem
        white-space normal
        overflow hidden
        text-overflow ellipsis
    .group
        margin 0 .25rem 0 .15rem
    .group-title
        font-size .2rem!important
        font-weight 700!important
        color #191919!important
        height .2rem
        line-height .2rem
        
    .brand
        display flex
        -webkit-box-align center
        align-items center
        margin-bottom .1rem
    .brand-icon
        width .4rem
        height .4rem
        border 1px solid hsla(0,0%,86.7%,.5)
        -webkit-box-pack center
        justify-content center
        overflow hidden
        border-radius .05rem
        img
            max-width .4rem
            max-height .4rem
    .brand-name
        margin-left .15rem
        font-size .13rem
        -webkit-box-flex 1
        flex 1
        color #000
</style>