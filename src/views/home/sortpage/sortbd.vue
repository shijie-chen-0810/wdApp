<template>
    <div class="left-box" ref="sort">
        <div class="item-box">
            <div 
                v-for="(item,index) in Category"
                :key="index"
                class="sort-cat"
                :class="{active:index === currentIndex}"
                @click="sortclick(index)"
            >
                <div class="sort-first">{{item.type === 'rank'?'M':index}}<span class="smalltitle">階</span></div>
                <div class="sort-center">{{item.cat_name}}</div>
                <div class="sort-last">{{item.sub_name}}</div>
            </div>
        </div>
    </div>
    
</template> 

<script>
import BetterScroll from '@better-scroll/core'
import MouseWheel from '@better-scroll/mouse-wheel'
BetterScroll.use(MouseWheel)
import Category from 'assets/static/Category.js'
import bus from 'assets/static/bus.js'
export default {
    data() {
        return {
            Category,
            currentIndex:0,
            bus
        }
    },

    methods: {
        sortclick(index){
            this.currentIndex = index
            bus.$emit('clicktbus',this.currentIndex)
        }
    },
    mounted () {
        let bs = new BetterScroll(this.$refs.sort, {
            probeType: 3,
            click:true,
            mouseWheel:true
        })
    }
}
</script>

<style lang="stylus" scoped>
    div.left-box
        display flex
        width 1rem
        height 100%
        flex-direction column
        .sort-cat
            display flex
            justify-content center
            flex-direction column
            background-color #fafafa
            overflow hidden
            position relative
            height 0.95rem
            padding 0 0 0 .125rem
            .sort-first
                color rgba(234,65,65,.5)
                font-size .30rem
                line-height .30rem
                opacity .8
                .smalltitle
                    font-size .14rem
            .sort-center
                font-size .15rem
            .sort-last
                color #9e9e9e
                font-size .08rem
            &.active
                color: #ee1414;
                font-weight: 700;
                background-color: #fff;
                border-left: .03rem solid #ee1414;
</style>
