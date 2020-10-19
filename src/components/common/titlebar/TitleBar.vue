<template>
  <div id="title-bar">
    <div>
      <slot name="left"></slot>
    </div>
    <div>
      <slot name='center'></slot>
    </div>
    <div>
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    
  }
}
</script>

<style>

</style>
