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
                <div class="sort-first">{{item.type === 'rank'?'M':index}}階</div>
                <div class="sort-center">{{item.cat_name}}</div>
                <div class="sort-last">{{item.sub_name}}</div>
            </div>
        </div>
    </div>
    
</template> 

<script>
import BScroll from '@better-scroll/core'
import Category from 'assets/static/Category.js'
// import bus from 'assets/static/eventbus.js'
export default {
    data() {
        return {
            Category,
            currentIndex:0
        }
    },

    methods: {
        sortclick(index){
            this.currentIndex = index
            // bus.$emit('sortbus',this.currentIndex)
        }
    },
    mounted () {
        let bs = new BScroll(this.$refs.sort, {
            probeType: 3,
            click:true
        })
    }
}
</script>

<style lang="stylus" scoped>
    div.left-box
        display flex
        width 1rem
        height 100vh
        flex-direction column
        .item-box
            padding-bottom 0.93rem
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
                font-size .2rem
                line-height .33rem
                opacity .8
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
