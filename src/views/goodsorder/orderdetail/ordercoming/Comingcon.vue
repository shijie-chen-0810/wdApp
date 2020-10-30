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
    //数组中时间从现在到之前（排序）
    sorttime(b,a){
      return Date.parse(a.ctime) - Date.parse(b.ctime);
    },
    //时间格式化(格式， new Date())
    dateFormat(fmt, date) {
      let ret;
      const opt = {
          "Y+": date.getFullYear().toString(),        // 年
          "m+": (date.getMonth() + 1).toString(),     // 月
          "d+": date.getDate().toString(),            // 日
          "H+": date.getHours().toString(),           // 时
          "M+": date.getMinutes().toString(),         // 分
          "S+": date.getSeconds().toString()          // 秒
          // 有其他格式化字符需求可以继续添加，必须转化成字符串
      };
      for (let k in opt) {
          ret = new RegExp("(" + k + ")").exec(fmt);
          if (ret) {
              fmt = fmt.replace(ret[1], (ret[1].length == 1) ? (opt[k]) : (opt[k].padStart(ret[1].length, "0")))
          };
      };
      return fmt;
    },
    //数组排序
    timearr(dataorder){
      if(dataorder.length!=0){
        dataorder.sort(this.sorttime)
        let fArr = []
        let childArr = [];  //中间数组，无用
        dataorder.forEach((item, index)=> {
          childArr.push(item)
          if(index+1 === dataorder.length){
            fArr.push(childArr)
          }else{
            if(dataorder[index].ctime != dataorder[index + 1].ctime){
              fArr.push(childArr)
              childArr = []
            }
          }
        })
        return fArr
      }
    }
  },
  async mounted(){
    let res = await axios({
      url:`http://106.13.129.90:5000/cart/getcart?id=${this.$store.state.cellphonenumber}`
      // url:"http://localhost:8080/orderlist.json"
    })
    
    let dataorder = [];     //只存在于order中的数据
    if(res.data.length!=0){
      res.data.forEach(item => {
        if(item.ctime != 0){
          dataorder.push(item)
        }
      })
    }
    console.log(dataorder)
    let timeimd = new Date().getTime()  //获取当前时间戳，判断未完成
    //判断待支付是否过期
    if(dataorder.length!=0){
      dataorder = dataorder.map(item => {
        if(item.order_status === '待支付'){
          if(((item.ctime - 0) + (30*60*1000)) < timeimd ){
            item.order_status = '未完成'
          }
        }
        //时间格式化
        item.ctime = this.dateFormat("YYYY-mm-dd HH:MM:SS", new Date(item.ctime - 0))
        return item
      })
    }
    
    let newArr = [];  //排好序的数据
    let comarr = [];  //已完成
    let otherarr = [];  //其余
    if(dataorder.length!=0){
      dataorder.forEach(item => {
        if(item.order_status === '已完成'){
          comarr.push(item)
        }else{
          otherarr.push(item)
        }
      })
    }
    if(comarr.length!=0&&otherarr.length==0){
      comarr = this.timearr(comarr)
      newArr = comarr
    }else if(comarr.length==0&&otherarr.length!=0){
      otherarr = this.timearr(otherarr)
      newArr = otherarr
    }else if(comarr.length!=0&&otherarr.length!=0){
      comarr = this.timearr(comarr)
      otherarr = this.timearr(otherarr)
      newArr = otherarr.concat(comarr)
    }
    this.datalist = newArr
    console.log(this.datalist)
    //判断订单各模块是否存在数据
    switch(this.$route.path){
      case '/order/all':
        if(newArr.length!=0){
          this.istrue = false;
        }else{
          this.istrue = true;
        }
        break;
      case '/order/pay':
        if(newArr.find(item => item[0].order_status==="待支付")){
          this.istrue = false;
          this.datalist = newArr.filter(item => item[0].order_status === '待支付')
        }else{
          this.istrue = true;
        }
        break;
      case '/order/send':
        if(newArr.find(item => item.order_status==="待发货")){
          this.istrue = false;
          this.datalist = newArr.filter(item => item.order_status === '待发货')
        }else{
          this.istrue = true;
        }
        break;
      case '/order/take':
        if(newArr.find(item => item.order_status==="待收货")){
          this.istrue = false;
          this.datalist = newArr.filter(item => item.order_status === '待收货')
        }else{
          this.istrue = true;
        }
        break;
      case '/order/commit':
        if(newArr.find(item => item.order_status==="待评价")){
          this.istrue = false;
          this.datalist = newArr.filter(item => item.order_status === '待评价')
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