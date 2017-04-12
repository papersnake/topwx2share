/* eslint-disable*/
<template>
<div id="demo">

</div>
</template>
<script>
/* eslint-disable */
export default {
  created () {
    let ht = $('#demo').leoweather({format: '<i class="icon-{图标}">{气温}℃</i><p>{城市}<span>|</span>{天气}<span>|</span>{风向}{风级}级</p>'})
    console.log(ht)
  }
}
</script>
<style>
  .demo { width:100px; min-width:100px; max-width:100px; }
  .demo td    { width:680px; min-width:680px; max-width:680px; }
  #demo { width:780px; margin:150px auto; background:#72af3c; color:#FFF; padding:50px 0 100px 0; overflow:hidden; border-radius:5000px; }
  #demo i { background: no-repeat top left; display:inline-block; height:128px; line-height:128px; margin:0 auto 20px auto; font-size:70px; padding-left:150px; font-style:normal; text-align:center; font-weight:bold; }
  #demo i.icon-xiaoyu { background-image:url(~/static/icon/xiaoyu.png); }
  #demo i.icon-zhongyu { background-image:url(~/static/icon/zhongyu.png); }
  #demo i.icon-dayu { background-image:url(~/static/icon/dayu.png); }
  #demo i.icon-qing { background-image:url(~/static/icon/qing.png); }
  #demo i.icon-duoyun { background-image:url(~/static/icon/duoyun.png); }
  #demo i.icon-yin { background-image:url(~/static/icon/yin.png); }
  #demo p { background:rgba(0,0,0,.3); margin:0 200px; padding:20px; border-radius:1000px; font-size:16px; }
  #demo p span { margin:0 15px; }
</style>
