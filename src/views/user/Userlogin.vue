<template>
  <div>
      <login v-if="istrue" @myclick="handlegetvalidation"></login>
      <validation v-else @mychange="handlechange"></validation>
  </div>
</template>

<script>
import Login from './usercon/Login'
import Validation from './usercon/Validation'
export default {
  data(){
    return {
      istrue: true
    }
  },
  methods:{
    handlegetvalidation(){
      this.istrue = !this.istrue
    },
    handlechange(){
      this.istrue = !this.istrue
    }
  },
  components:{
    Login,
    Validation
  }
}
</script>

<style lang="stylus" scoped>

</style>