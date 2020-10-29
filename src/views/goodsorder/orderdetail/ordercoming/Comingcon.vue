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
  methods:{
    //数组中时间从现在到之前
    sorttime(b,a){
      return Date.parse(a.ctime) - Date.parse(b.ctime);
    }
  },
  async mounted(){
    let res = await axios({
      // url:`http://106.13.129.90:5000/cart/getcart?id=17835753466`
      url:"http://localhost:8080/orderlist.json"
    })
    console.log(res.data)
    //判断订单各模块是否存在数据
    switch(this.$route.path){
      case '/order/all':
        if(res.data.length!=0){
          res.data.sort(this.sorttime)
          this.istrue = false;
          
          let newArr = [];
          let childArr = [];
          res.data.forEach((item, index)=> {
            childArr.push(item)
            if(index+1 === res.data.length){
              newArr.push(childArr)
            }else{
              if(res.data[index].ctime != res.data[index + 1].ctime){
                newArr.push(childArr)
                childArr = []
              }
            }
            
          })
          this.datalist = newArr
          console.log(this.datalist)
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/pay':
        if(res.data.find(item => item.order_status==="待支付")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.order_status === '待支付')
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/send':
        if(res.data.find(item => item.order_status==="待发货")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.order_status === '待发货')
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/take':
        if(res.data.find(item => item.order_status==="待收货")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.order_status === '待收货')
        }else{
          this.istrue = true;
        }
        
        break;
      case '/order/commit':
        if(res.data.find(item => item.order_status==="待评价")){
          this.istrue = false;
          this.datalist = res.data.filter(item => item.order_status === '待评价')
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