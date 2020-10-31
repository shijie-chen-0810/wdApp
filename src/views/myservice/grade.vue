<template>
    <div class="page">
        <header>
            <div class="header-img"></div>
            <div class="header-record">
                <span>￥</span>
                0
                <p>进12个月共消费</p>
            </div>
            <div class="header-info">
                <div class="grade-progress">
                    <div class="grade-progress-layer">
                        <div class="grade-progress-flex">
                            <div class="progress-line-box">	
                            </div>
                            <!-- <span class="level v0">
                                <i class="v0-icon"></i>
                            </span> -->
                            <span class="level v1">
                                <i class="v-icon v1-icon"></i>
                            </span>
                            <span class="level v2">
                                <i class="v-icon v2-icon"></i>
                            </span>
                            <span class="level v3">
                                <i class="v-icon v3-icon"></i>
                            </span>
                            <span class="level v4">
                                <i class="v-icon v4-icon"></i>
                            </span>
                            <span class="level v5">
                                <i class="v-icon v5-icon"></i>
                            </span>
                            <span class="level v6">
                                <i class="v-icon v6-icon"></i>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="grade-title">
                    <a href="https://m.wandougongzhu.cn/User/graderule">
                        <img class="help-icon" src="https://s3.wandougongzhu.cn/s/5c/wenhao_079ada.png" alt="帮助">消费&gt;0元就可升到纸扇段哦
                    </a>
                </div>
                <div class="grade-bottom">
                    <img class="grade-bottom-img" src="https://s.wandougongzhu.cn/s/3d/bgcover_8f31fe.png">
                </div>
            </div>
        </header>
        <section class="my-tq">
            <div class="my-tq-title">
                <div class="my-tq-left">
                    我的特权
                    <span>0项</span>
                </div>
                <div class="my-tq-right">
                    <a href="https://m.wandougongzhu.cn/User/graderule">更多特权</a>
                </div>
            </div>
            <div class="prerogative-wrapper clearfix border-1px-bottom">
				<div class=" item-prerogative" data-type="9" data-url="">
                    <img src="https://s3.wandougongzhu.cn/s/fa/2.0g_2e49ab.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">段位奖章</div>
                    <div class="prerogative-desc"></div>
	            </div>
                <div class=" item-prerogative" data-type="11" data-url="">
                    <img src="https://s1.wandougongzhu.cn/s/f0/2.0g_f325bd.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">生日特权</div>
                    <div class="prerogative-desc">积分双倍</div>
                    </div>
                <div class=" item-prerogative" data-type="12" data-url="">
                    <img src="https://s5.wandougongzhu.cn/s/61/2.0g_46a28b.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">升级礼包</div>
                    <div class="prerogative-desc"></div>
                </div>
                <div class=" item-prerogative" data-type="5" data-url="">
                    <img src="https://s2.wandougongzhu.cn/s/dc/2.0g_ad12a4.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">段位券</div>
                    <div class="prerogative-desc">3张</div>
                </div>
                <div class=" item-prerogative" data-type="4" data-url="">
                    <img src="https://s4.wandougongzhu.cn/s/6a/2.0g_ffed00.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">积分抵现</div>
                    <div class="prerogative-desc">10%</div>
                </div>
                <div class=" item-prerogative" data-type="3" data-url="">
                    <img src="https://s3.wandougongzhu.cn/s/b7/2.0g_6368b5.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">积分加速</div>
                    <div class="prerogative-desc">+5%</div>
                </div>
                <div class=" item-prerogative" data-type="14" data-url="">
                    <img src="https://s.wandougongzhu.cn/s/fd/2.0g_2f18c4.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">专属客服</div>
                    <div class="prerogative-desc"></div>
                </div>
                <div class=" item-prerogative" data-type="15" data-url="">
                    <img src="https://s.wandougongzhu.cn/s/c7/2.0g_975bed.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">生日礼盒</div>
                    <div class="prerogative-desc">神秘礼物</div>
                </div>
                <div class=" item-prerogative" data-type="6" data-url="">
                    <img src="https://s5.wandougongzhu.cn/s/0b/2.0g_cf789e.png">
                    <div class="prerogative-type" style="color:#cdcdcd;">折上折</div>
                    <div class="prerogative-desc">9.5折</div>
                </div>
		    </div>
        </section>
    </div>
    
</template>

<script>
export default {
    
}
</script>

<style lang="stylus" scoped>
    header
        position relative 
        height 2.5rem
        width 100%
        text-align center
        overflow hidden
    .header-img
        position absolute
        width 120%
        height 120%
        top 0
        left 0
        transform translate(-10%,-10%)
        background-repeat no-repeat
        background-size cover
        background-position 50%
        filter blur(10px)
        z-index 1
        background-image url('~assets/images/grade/header-img.png')
        &::before
            content " "
            position absolute
            top 0
            left 0
            width 100%
            height 100%
            background-color rgba(0,0,0,.38)
    .header-record
        position absolute
        height .38rem
        padding .02rem .1rem .03rem .15rem
        color #fff
        font-size .12rem
        z-index 2
        right 0
        top .45rem
        background rgba(234,65,65,.6)
        overflow hidden
        text-align right
        line-height .18rem
        border-radius .18rem
        border-top-right-radius 0
        border-bottom-right-radius 0
        box-sizing border-box
        min-width 1rem
        box-shadow 0 0.05rem 0.1rem 0 rgba(0,0,0,.12)
    .header-info   
        position relative
        padding-top 1.5rem
        z-index 2
    .grade-progress 
        position relative
    .grade-progress-layer
        position relative
    .grade-progress-flex
        display -webkit-box
        display flex
        justify-content space-around
        span 
            position relative
            -webkit-box-flex 1
            flex 1
            overflow hidden
            align-items center
    .progress-line-box 
        position absolute
        height .02rem
        width 100%
        background hsla(0,0%,100%,.3)
        left 0
        top 50%
        -webkit-transform translateY(-50%)
        transform translateY(-50%)
    .v-icon
        position relative
        display inline-block
        width .25rem
        height .25rem
        background-size contain
        background-position 50%
        background-repeat no-repeat
        left 0
    .v0
        width 1px
        -webkit-box-flex 0
        flex none
    .v0-icon
        display inline-block
        width 1px
    .v1-icon
        background-image url('~assets/images/grade/v1.png')
    .v2-icon
        background-image url('~assets/images/grade/v2.png')
    .v3-icon
        background-image url('~assets/images/grade/v3.png')
    .v4-icon
        background-image url('~assets/images/grade/v4.png')
    .v5-icon
        background-image url('~assets/images/grade/v5.png')
    .v6-icon
        background-image url('~assets/images/grade/v6.png')
    .grade-title
        margin-top .1rem
        a
            color #fff
            font-size .11rem
    .help-icon
        position relative
        width .15rem
        height .15rem
        overflow hidden
        vertical-align middle
        margin-right .06rem
    .grade-bottom
        position absolute
        width 100%
        line-height 0
        overflow hidden
        
        left 0
        img 
            position relative
            width 100%
            z-index 2
    .my-tq
        width 100%
    .my-tq-title
        width 100%
        osition relative
        height .5rem
        line-height .5rem
        padding 0 .15rem
        color #000
        border-bottom 1px solid #d8d8d8
        box-sizing border-box
        display -webkit-box
        display flex
        font-size .15rem
        // &::before
        //     position absolute
        //     width .05rem
        //     height .15rem
        //     content ""
        //     left 0
        //     top 44%
        //     background #ee1414
        //     -webkit-transform translateY(-50%)
        //     transform translateY(-50%)
    .my-tq-left
        span 
            border-left 1px solid #d8d8d8
            font-size .11rem
            color #9e9e9e
            margin-left .1rem
            padding-left .1rem
    .my-tq-right
        float right
        position relative
        font-size .13rem
        padding-right .1rem
        padding-left 1.7rem
        a
            color #9e9e9e
    .prerogative-wrapper
        overflow hidden
        border-bottom .1rem solid #eee
    .item-prerogative, .item-prerogative-gray 
        position relative
        display -webkit-box
        display flex
        -webkit-box-orient vertical
        -webkit-box-direction normal
        flex-direction column
        -webkit-box-pack start
        justify-content flex-start
        float left
        width 25%
        height .95rem
        box-sizing border-box
        color #cdcdcd
    .item-prerogative img
        display block
        max-width .35rem
        max-height .35rem
        margin .1rem auto .05rem
    .prerogative-type
        text-align center
    .prerogative-desc
        text-align center
        
</style>
