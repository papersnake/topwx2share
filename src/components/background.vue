<template>
<div id="particles-js"></div>
</template>
<script>
import particlesJS from 'particlesJS'
export default {
  created () {
    this.$nextTick(function () {
      let config = require('../assets/particles.json')
      console.log(config)
      particlesJS('particles-js', config)
    })
  }
}
</script>
<style>
#particles-js{
  position: fixed;
  background-color: rgba(0, 43, 90, 0.55);
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
