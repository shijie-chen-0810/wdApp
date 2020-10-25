<template>
  <div>
    {{$route.query.price}}
  </div>
</template>

<script>
export default {
  mounted(){
    console.log(this.$route.query.price)
  }
}
</script>

<style lang="stylus" scoped>

</style>