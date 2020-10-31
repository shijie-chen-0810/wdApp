<template>
  <div>
    <keep-alive exclude="detail,profile,homesortpage,setpwd">
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
}
</script>

<style lang="stylus" scoped>
div
  height 100%
</style>
