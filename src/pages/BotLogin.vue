<template>
  <page-content page-title="登录">
    <div class="main-content">
    {{ loginUrl }}
    </div>
  </page-content>
</template>
<script>
  import WxBot from '../services/wxBot/wxBot'
  export default {
    data () {
      return {
        loginUrl: ''
      }
    },
    created () {
      this.wxBotInit()
    },
    methods: {
      wxBotInit () {
        const bot = new WxBot()
        bot.on('qrcode', (url) => {
          console.log(url)
        })
        bot.run()
      }
    }
  }
</script>
