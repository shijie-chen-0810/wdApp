<template>
    <div class="search">
        <div class="search_top">
            <div class="top_left">
                <div class="top_left_btn" @click="outClick"></div>
            </div>
            <div class="top_search">
                <div class="search_logo"></div>
                <div class="search_input">
                    <input placeholder="搜索商品或品牌" type="search" autocomplete="off"  class="se-input" @input="search_input()" v-model="se_input">
                </div>
                <div class="search_btn" @click="clear()"></div>
            </div>
            <button type="submit" class="sub_btn" @click="sub_btn()">搜索</button>
        </div>
        <div class="search_bottom"> 
            <div class="hot_bottom" ref="hot_xs">
                <div class="hot_title">热门搜索</div>
                <div class="hot_item">
                    <div
                        class="item" 
                        v-for="(item,index) in name "
                        :key="index"
                    >
                        <span class="xs-word" style="color: rgb(25, 25, 25); background-color: rgb(255, 255, 255); border-color: rgb(216, 216, 216);">
                            <img v-if="icon == '' " src="https://oss2.wandougongzhu.cn/403bd990ae57449208cf63c85db31810.png">
                            {{item.name}}
                        </span>
                    </div>
                    
                </div>
            </div>
            <div class="search_list" ref="hot_sx">
                <div class="list_item" v-for="(item,index) in good_list" :key="index">
                    <a :href="`/detail/${item.goods_id}`" class="goods_a">
                        {{item.goods_name}}
                    </a>
                </div>
            </div>
        </div>
    </div> 
    
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            name:'',
            icon:'',
            se_input:'',
            hot_xs:'',
            hot_sx:'',
            good_list:[]

        }
    },
    created () {
        this.getitem()
    },
    methods: {
        outClick(){
            this.$router.push('/home')
        },
        async getitem(){
            const res = await axios.get("/home/gethotkey")
            // console.log(res)
            this.name = res.data
            // console.log(this.name) 
        },
        clear(){
            this.se_input = ''
            this.$refs.hot_xs.style.display = "block"
            this.$refs.hot_sx.style.display = "none"
        }, 
        sub_btn(){
            this.$router.push('/home')
        },
            
        async search_input(){
            
            if(this.se_input === ""){
                this.$refs.hot_xs.style.display = "block"
                this.$refs.hot_sx.style.display = "none"
                return
            }
            let timeout = ''
            if(!timeout){
                timeout = setTimeout(async()=>{
                    timeout = null
                    const res = await axios.get('/home/search?key=' + this.se_input )
                },1000)
            }
            if(res.data.length == 0){
                return 
            }else{
                this.$refs.hot_xs.style.display = "none"
                this.$refs.hot_sx.style.display = "block"
            }
            
            if(this.se_input === ""){
                this.$refs.hot_xs.style.display = "block"
                this.$refs.hot_sx.style.display = "none"
            }
            this.good_list = res.data.slice(0,9)
            this.goods_id = res.data
            // console.log(this.good_list)
        }
    },
}
</script>

<style lang="stylus" scoped>
    @import  '~assets/stylus/border.styl'
    @import  '~assets/stylus/ellipsis.styl'
    .search_top
        display flex
        -webkit-box-align center
        align-items center
        height .56rem
        z-index 1
        position fixed
        width 100%
        left 0
        top 0
        background-color #fff
        border_1px(0 0 1px 0,solid,#ccc)
    .top_left
        padding-right 0.1rem
        padding-left 0.1rem
        height 100%
        display flex
        -webkit-box-align center
        align-items center
    .top_left_btn
        background url('~assets/images/search/out.png')
        height .31rem
        width .31rem
    .top_search
        -webkit-box-flex 1
        flex 1
        height .35rem
        border-radius .17rem
        background-color #efefef
        display -webkit-box
        display flex
        -webkit-box-pack justify
        justify-content space-between
    .search_logo
        height .35rem;
        width .42rem;
        background url(https://s2.wandougongzhu.cn/h5/resource/img/icon/ic_search_a6f6c5.png) 50% no-repeat
        background-size .19rem .21rem;
    .search_input
        -webkit-box-flex 1;
        flex 1;
    .se-input
        box-sizing border-box
        height .35rem
        width 100%
        padding .1rem 0 
        border none
        outline none
        font-size .15rem
        line-height .25rem
        background-color initial
    .search_btn
        position relative
        width .33rem
        height .35rem
        background url('~assets/images/search/btn.png') no-repeat
        text-align center
        margin-top .07rem
    .sub_btn
        border none
        background-color initial
        height .55rem
        outline none
        width .45rem
    .search_bottom
        padding-top .05rem
    .hot_bottom
       
        margin .15rem .15rem 0
    .hot_title
        color #3e3e3e
        font-size .14rem
        line-height .28rem
        display -webkit-box
        display flex
        font-weight 700
        -webkit-box-pack justify
        justify-content space-between
    
    .hot_item
        .xs-word
            display inline-block
            float left
            border-radius 1px
            padding .05rem .1rem
            margin-right .1rem
            margin-bottom .1rem
            color #191919
            border-radius .15rem
            border .01rem solid #d8d8d8
        img 
            width .11rem
            height .11rem
            margin-right .025rem
            position relative
            top -.015rem
    .search_list
        display none
    .list_item
        border-bottom 1px solid hsla(0,0%,86.3%,.5)
        box-sizing border-box
        height .49rem
        line-height .49rem
        font-size .12rem
        padding-left .15rem
        white-space nowrap
        ellipsis_num(1)
        a
            color #212121
</style>
