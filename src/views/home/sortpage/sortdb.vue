<template>
    <div class="right-box-con" ref="rightboxcon">

    <div class="right-box">
        <div
            class="mbbox"
            v-for="(item,index) in Category[0].sub"
            :key="index" 
        >
            <div class="right-top">
            <a href="">
                <span class="right-first">{{item.cat_name}}</span>
                <div class="right-two">
                    <span>更多</span> 
                    <img src="https://s3.wandougongzhu.cn/s/6e/left_d13931.png">
                </div>
            </a> 
            </div>
            <div 
                class="right-body" 
                v-for="(v,k,i) in item.sub" 
                :key="i" 
                :style="`background-image:url(&quot;${v.bg_img}&quot;);background-size: cover; background-position: 50%;`"
            >
                <a href="" class="lj">
                    <div class="right-body-left">
                        <div class="right-body-left-box">
                            <div class="right-body-left-img"> 
                                <img src="https://s1.wandougongzhu.cn/s/a9/icon----3x_c9985b.png">
                            </div>
                            <div class="right-body-left-title">{{v.title}}</div>
                        </div>
                    </div>
                    <div class="right-body-right">
                        <div class="image-con">
                            <div class="right-body-right-one right-gg" :style="`background-image:url(&quot;${v.goods_img_list[0]}&quot;)`">
                                <img src="https://s2.wandougongzhu.cn/s/e6/paihangbang_12x_28a679.png">
                            </div>
                            <div class="right-body-right-two right-gg" :style="`background-image:url(&quot;${v.goods_img_list[1]}&quot;)`">
                            </div>
                            <div class="right-body-right-three right-gg" :style="`background-image:url(&quot;${v.goods_img_list[2]}&quot;)`">
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
import BetterScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
BetterScroll.use(MouseWheel)
import Category from 'assets/static/Category.js'
export default {
    data() {
        return {
            Category,
            Categoryzx:Category[0].sub,
            bs:null
        } 
    },
    mounted () {
        this.$nextTick(()=>{
            this.bs = new BetterScroll(this.$refs.rightboxcon, {
                probeType: 3,
                click:true,
                mouseWheel:true
            })
        })
        
    }
}
</script>

<style lang="stylus" scoped>
    .right-box-con
        height 100%
    .right-box
        display flex
        flex-direction column
    .right-top
        display flex
        flex-direction column
        height .4rem
        width 2.5rem
        line-height .4rem
        background-color #fafafa
        font-size .16rem
        margin-left .1rem 
        margin-top .15rem
        .right-first
            display block
            float left
            color #191919
            font-size .14rem
            margin-left .1rem 
        .right-two
            display block
            float right
            color #191919
            font-size .14rem
            margin-right .05rem
            img 
                width .12rem
                height .17rem
    .right-body
        margin .05rem .1rem
        height .7rem
        background-size cover
        background-position 50%
        border-radius .1rem
        position relative
        
        .lj
            display flex
            height 100%
            border-radius .1rem
            background-color rgba(0,0,0,.5)
        .right-body-left
            width 50%
            flex 1
            display flex
            align-items center
            height 100%
        .right-body-right
            width 50%
            flex 1
            display flex
            align-items center
            height 100%
        .right-body-left-box
            margin-left .1rem

        .right-body-left-img
            img
                width .5rem
                height .13rem
                
        .right-body-left-title
            color #fff
            font-size .14rem
            margin-top .02rem
            max-width 2.64rem
            font-weight 600
        .right-gg
            display inline-block
            vertical-align middle
            position relative
            border-radius 5%
            overflow hidden
            font-size 0
            background-size cover
            background-position 50%
            background-color #fff
        .right-body-right-one
            width .54rem
            height .54rem
            z-index 3
            img 
                width .17rem
                height .17rem
        .right-body-right-two
            width .48rem
            height .48rem
            z-index 2
            margin-left -15%
        .right-body-right-three
            width .42rem
            height .42rem
            margin-left -15%
            
</style>
