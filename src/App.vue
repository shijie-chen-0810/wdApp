<template>
  <div>
    <keep-alive :exclude="notkeep">
      <router-view :key="$route.fullPath"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
import { Image as VanImage } from 'vant';
import { Lazyload } from 'vant';

Vue.use(Toast);
Vue.use(VanImage);
Vue.use(Lazyload);
export default {
  data(){
    return{
      notkeep:['detail','profile','homesortpage','setpwd','loginpwd','modifydata']
    }
  }
}
</script>

<style lang="stylus" scoped>
div
  height 100%
</style>
