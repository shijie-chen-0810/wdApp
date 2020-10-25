<template>
  <div class="order">
    <div class="order-all">
      <div v-if="true" class="empty">
        <div>去逛逛</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
.order 
  background #f0eff5
  .order-all
    height 100% 
    .empty
      padding-top 2.15rem
      background url('~@/assets/images/profile/myorder/ic_order_empty_.png') no-repeat center 1.05rem/1.1rem 1.1rem
      display flex
      justify-content center
      div
        background #ee1414
        width .6rem
        height .3rem
        text-align center
        line-height .3rem
        color #fff
</style>