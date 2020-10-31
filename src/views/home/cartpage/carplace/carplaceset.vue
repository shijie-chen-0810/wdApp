<template>
  <div>
    <van-address-edit
      :area-list="areaList"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
    />
    
  </div>
</template>

<script>
import Vue from 'vue';
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);


import areaList from '../pay/address/citymsg'
export default {
  data() {
    return {
      areaList,
      searchResult: [],
      
    };
  },
  methods: {
    onSave(content) {
      let a = {
        checked:false,
        name:content.name,
        nowplace:content.province+ ' ' + content.city + ' '+ content.county,
        phone:content.tel,
        xiangplace:content.addressDetail,
        id:'11',
        shouname:content.name
      }
      let name = this.$store.state.cellphonenumber
      let place = JSON.parse(localStorage.getItem(name))
      place.push(a)
      this.$toast('保存成功')
      localStorage.setItem(name,JSON.stringify(place))
      setTimeout(()=>{
        this.$router.go(-1)
      },2000)
    }
  },
}
</script>

<style lang="stylus" scoped>

</style>