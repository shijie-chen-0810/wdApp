<template>
  <div>
    <dl v-for="n in 6" :key="n">
      <dt>
        <img src="~assets/images/see/pay4.png" alt="">
      </dt>
      <dd>
        <p>奥斯帝国v啊是加拿大阿斯很多那是考虑还是</p>
        <p>
          <span>￥99</span>
          <i>x 1</i>
        </p>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
@import '~assets/stylus/ellipsis.styl'
dl
  width 3.6rem
  height 1.06rem
  display flex
  justify-content space-between
  align-items center
  padding-right .1rem
  dt
    width .85rem
    height .85rem
    img 
      display block
      width 100%
      height 100%
  dd
    width 2.55rem
    p
      width 100%
      ellipsis_num(2)
      font-size: .13rem;
      color: #191919;
      line-height .20rem
    p:last-child
      display flex
      justify-content space-between
      align-items center
      margin-top .05rem
</style>