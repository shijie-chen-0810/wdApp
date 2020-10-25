<template>
    <div class="right-box">
        <div
            class="mbbox"
            v-for="(item,index) in Category"
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
            <div class="right-body" >
                <a href="" class="lj">
                    <div class="right-body-left">
                        <div class="right-body-left-box">
                            <div class="right-body-left-img">
                                <img src="https://s1.wandougongzhu.cn/s/a9/icon----3x_c9985b.png">
                            </div>
                            <div class="right-body-left-title">面膜豌豆甄选</div>
                        </div>
                    </div>
                    <div class="right-body-right">
                        <div class="image-con">
                            <div class="right-body-right-one right-gg" style="background-image: url(&quot;https://oss4.wandougongzhu.cn/5a6cda83371f6e5db6f3b3fbd85a5feb.png?x-oss-process=image/resize,w_360,h_4000/format,webp&quot;);">
                            </div>
                            <div class="right-body-right-two right-gg" style="background-image: url(&quot;https://oss2.wandougongzhu.cn/26db3085a28ec3d38b3d04e22560505c.png?x-oss-process=image/resize,w_360,h_4000/format,webp&quot;);">
                            </div>
                            <div class="right-body-right-three right-gg" style="background-image: url(&quot;https://oss2.wandougongzhu.cn/0a1ce15340324afd44574a004418c86f.png?x-oss-process=image/resize,w_360,h_4000/format,webp&quot;);">
                            </div>
                        </div>
                    </div>
                </a>
                
            </div>
            <!-- <div class="right-body">
                <a href="" class="lj">
                    <div class="right-body-left">
                        <div class="right-body-left-box">
                            <div class="right-body-left-img">
                                <img src="https://s1.wandougongzhu.cn/s/a9/icon----3x_c9985b.png">
                            </div>
                            <div class="right-body-left-title">面膜豌豆甄选</div>
                        </div>
                    </div>
                    <div class="right-body-right"></div>
                </a>
                
            </div>
            <div class="right-body">
                <a href="" class="lj">
                    <div class="right-body-left">
                        <div class="right-body-left-box">
                            <div class="right-body-left-img">
                                <img src="https://s1.wandougongzhu.cn/s/a9/icon----3x_c9985b.png">
                            </div>
                            <div class="right-body-left-title">面膜豌豆甄选</div>
                        </div>
                    </div>
                    <div class="right-body-right"></div>
                </a>
                
            </div> -->
        </div>
    </div>
    

</template>

<script>
import Category from 'assets/static/Category.js'
export default {
    data() {
        return {
            Category
        }
    },
    mounted () {
        // console.log(this.Category)
    }
}
</script>

<style lang="stylus" scoped>
    .right-box
        height 100%
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
        background-image url("https://oss2.wandougongzhu.cn/193741da29d99a5ae64f5b30fc628305.png")
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
            margin-top .05rem
            max-width 2.64rem
            font-weight 700
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
