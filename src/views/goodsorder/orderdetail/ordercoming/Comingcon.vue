<template>
  <div>
    <Openapp></Openapp>
    <div>
      <Orderempty v-if="istrue"></Orderempty>
      <Orderlist v-else></Orderlist>
    </div>
  </div>
</template>

<script>
import Openapp from './ordercomingpart/Openapp'
import Orderempty from './ordercomingpart/Orderempty'
import Orderlist from './ordercomingpart/Orderlist'
import axios from 'axios'
export default {
  data(){
    return {
      istrue: true,
      datalist:[]
    }
  },
  components:{
    Openapp,
    Orderempty,
    Orderlist
  },
  async mounted(){
    let res = await axios({
      url:"http://localhost:8080/orderlist.json"
    })
    switch(this.$route.path){
      case '/order/all':
        if(res.data.length!=0){
          this.istrue = false;
          this.datalist = res.data
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/pay':
        if(res.data.find(item => item.orderstatus==="待支付")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.orderstatus === '待支付')
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/send':
        if(res.data.find(item => item.orderstatus==="待发货")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.orderstatus === '待发货')
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/take':
        if(res.data.find(item => item.orderstatus==="待收货")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.orderstatus === '待收货')
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/commit':
        if(res.data.find(item => item.orderstatus==="待评价")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.orderstatus === '待评价')
        }else{
          this.istrue = true;
        }
        
        break;
      default:
        break
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>