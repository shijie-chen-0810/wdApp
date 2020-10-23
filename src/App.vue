<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import Vue from 'vue';
import { Toast } from 'vant';
Vue.use(Toast);
export default {
}
</script>

<style>

</style>
