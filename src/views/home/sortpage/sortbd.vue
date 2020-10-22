<template>
    <div class="sort-box">
        <div class="sort-cat active">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
        <div class="sort-cat">
            <div class="sort-first">M階</div>
            <div class="sort-center">豌豆甄选</div>
            <div class="sort-last">你的最佳选择</div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        
    }       
}
</script>

<style lang="stylus" scoped>
    .sort-box
        display flex
        width 1rem
        height 100%
        flex-direction column
        .sort-cat
            display flex
            justify-content center
            flex-direction: column;
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
                font-size .12rem
            &.active
                background-color: #fff;
                border-left: .05rem solid #ee1414;
</style>
