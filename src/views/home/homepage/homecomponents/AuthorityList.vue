<template>
  <div class="authority-con">
    <ul class="authority-list">
      <li class="authority-item" v-for="(item,index) in data" :key='index' >
        <p>
          <span>销量榜</span>
          <span>{{item.sortType}}</span>
          <span>已下单{{item.num}}件</span>
        </p>
        <p>
          <img :src="item.imgURL" alt="">
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Array
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/border.styl'
.authority-con
  padding 0 0.12rem 0.1rem
  border_1px(0 0 1px 0,solid,#ddd)
  .authority-list
    display flex
    width 3.51rem
    justify-content space-between
    flex-wrap wrap
    .authority-item
      width 1.7rem
      display flex
      margin-bottom 0.09rem
      background-color #fafafa
      p:nth-child(1)
        flex 1
        display flex
        padding 0.12rem 0 0.1rem 0.09rem
        flex-direction column
        font-size 0.12rem
        span:nth-child(1)
          color #cfa075
        span:nth-child(2)
          font-weight 700
          margin 0.05rem 0 0.04rem 0
        span:nth-child(3)
          color #6e6e9b
      p:nth-child(2)
        img
          width 0.79rem
          height 0.79rem
    
</style>
