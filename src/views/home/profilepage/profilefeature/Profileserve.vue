<template>
  <div class="profile-serve">
    <h3 class="myserve">我的服务</h3>
    <ul>
      <router-link tag="li" :to="data.active" v-for="data in datalist" :key="data.id">
        <div :style="data.photourl"></div>
        <span>{{data.title}}</span>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      datalist:[
        { 
          id:112,
          photourl:"background:url('https://s5.wandougongzhu.cn/s/e8/2x_1ca83d.png') no-repeat 0 0/100% 100%",
          title:'收藏夹',
          active:""
        },
        {
          id:113,
          photourl:"background:url('https://s.wandougongzhu.cn/s/18/2x_de7163.png') no-repeat 0 0/100% 100%",
          title:'国内模式',
          active:""
        },
        {
          id:114,
          photourl:"background:url('https://s2.wandougongzhu.cn/s/ac/2x_0edd73.png') no-repeat 0 0/100% 100%",
          title:'我的特权',
          active:"/grade"
        },
        {
          id:115,
          photourl:"background:url('https://s3.wandougongzhu.cn/s/b7/2x_758d9d.png') no-repeat 0 0/100% 100%",
          title:'我的点评',
          active:""
        },
        {
          id:116,
          photourl:"background:url('https://s5.wandougongzhu.cn/s/e8/2x_1ca83d.png') no-repeat 0 0/100% 100%",
          title:'联系客服',
          active:""
        },
        {
          id:117,
          photourl:"background:url('https://s1.wandougongzhu.cn/s/a3/_9d2bd8.png') no-repeat 0 0/100% 100%",
          title:'关于我们',
          active:""
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../../../../assets/stylus/border.styl'

.profile-serve
  padding-bottom .2rem
  margin 0 .05rem .2rem
  display flex
  flex-direction column
  border_1px(0 0 1px 0)
  >.myserve
    color #191919
    font-weight normal
    font-size .2rem
    margin-bottom .08rem
  ul 
    display flex
    flex-wrap wrap
    li 
      width 25%
      height 1rem
      display flex
      flex-direction column
      justify-content center
      align-items center
      >div
        width .32rem
        height .32rem
      >span 
        font-size .14rem
        margin-top .1rem
        color #000


  
</style>