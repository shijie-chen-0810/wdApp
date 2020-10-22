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
      disableTouch: false
    });
    this.pullingLoad()
    this.scrolling()
  },
  methods:{
    pullingLoad(){
      this.bscroll.on('pullingUp',()=>{
        this.$emit('getmoregoods')
        setTimeout(()=>{
          this.bscroll.finishPullUp()           
        },2000)
      })
    },
    scrolling(){
      this.bscroll.on('scroll',(position)=>{
        this.$emit('contentscroll',position)
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
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
