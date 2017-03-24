import wxBot from './wxBot/wxBot'
//const wxBot = require('./lib/wxBot')
const bot = new wxBot()
bot.on('qrcode', (url) => {
  console.log(url)
})
bot.run()
// console.log(bot.test())
