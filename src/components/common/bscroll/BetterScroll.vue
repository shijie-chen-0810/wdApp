<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  props:{
    probeType:{
      type:Number,
      default:0
    },
    isLoadingMore:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      bscroll:null
    }
  },
  mounted(){
    this.bscroll = new BScroll(this.$refs.wrapper,{
      probeType:this.probeType,
      click:true,
      pullUpLoad:this.isLoadingMore,
      bounce:{
        top:false
      },
      disableMouse: false,
      disableTouch: false,
      mouseWheel:true
    });
    this.pullingLoad()
  },
  methods:{
    pullingLoad(){
      this.bscroll.on('pullingUp',()=>{
        console.log('loadingh')
        this.$toast.loading({
          message:'加载中',
          forbidClick: true,
        })
        this.$emit('getmoregoods')
      })
    },
    scrollTo(x,y,time = 500){
      this.bscroll.scrollTo(x,y,time)
    }
  }
}
</script>

<style>
.wrapper{
  height: calc(100vh - 0.93rem);
  overflow: hidden;
  position: absolute;
  flex: 1;
}
</style>
