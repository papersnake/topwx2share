import path from 'path'
import touch from 'touch'
import http from 'http'
import https from 'https'
import tough from 'tough-cookie'
import axios from 'axios'
import EventEmitter from 'events'
import FileCookieStore from 'tough-cookie-filestore'
import axiosCookieSupport from 'node-axios-cookiejar'
import Debug from 'debug'

import { getUrls, CODES, SP_ACCOUNTS, PUSH_HOST_LIST } from './conf'

let URLS = getUrls({})

const debug = Debug('wxbot')
const makeDeviceId = () => 'e' + Math.random().toFixed(15).toString().substring(2, 17)

// const cookiePath = path.join(process.cwd(), '.cookie.json')
// touch.sync(cookiePath)
// const jar = new tough.CookieJar(new FileCookieStore(cookiePath))
const jar = null
const req = axios.create({
  timeout: 35e3,
  header: {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_2) ' +
      'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2652.0 Safari/537.36',
    'Referer': 'https://wx2.qq.com/'
  },
  jar,
  withCredentials: true,
  xsrfCookieName: null,
  xsrfHeaderName: null,
  httpAgent: new http.Agent({ keepAlive: true }),
  httpsAgage: new https.Agent({ keepAlive: true })
})

axiosCookieSupport(req)

class wxBot extends EventEmitter {
  constructor (options = {}) {
    super()

    Object.assign(this, CODES)

    debug('wxBot init')
  }

  async run () {
    // console.log('run..');
    this.init()
  }

  async init () {
    debug('begin login....')

    this.initConfig()

    try {
      this.uuid = await this.fetchUUID()
      // console.log(this.uuid)
      debug(`uuid=${this.uuid}`)
    } catch (e) {
      debug('fetch uuid error', e)
      this.init()
    }

    if (!this.uuid) {
      debug('get uuid error ,reget...')
      this.init()
      return
    }
    debug(`get uuid ->${this.uuid}`)
    const qrcodeUrl = URLS.QRCODE_PATH + this.uuid
    this.emit('qrcode', qrcodeUrl)
  }

  initConfig () {
    this.baseHost = ''
    this.pushHost = ''
    this.uuid = ''
    this.redirectUri = ''
    this.skey = ''
    this.sid = ''
    this.uin = ''
    this.passTicket = ''
    this.baseRequest = null
    this.my = null
    this.syncKey = null
    this.formatSyncKey = ''
    this.deviceid = makeDeviceId()
  }

  async fetchUUID () {
    debug('start get uuid')
    let result
    try {
      result = await req.get(URLS.API_jsLogin, {
        params: {
          appid: 'wx782c26e4c19acffb',
          fun: 'new',
          lang: 'zh_CN',
          _: +new Date()
        }
      })
    } catch (e) {
      debug('get uuid error reget....')
      return await this.fetchUUID()
    }

    const { data } = result

    if (!/uuid = "(.+)";$/.test(data)) {
      throw new Error('get uuid failed')
    }

    const uuid = data.match(/uuid = "(.+)";$/)[1]
    return uuid
  }

  async test () {
    try {
      this.uuid = await this.fetchUUID()
      // console.log(this.uuid)
    } catch (e) {
      debug('fetch uuid error', e)
    }

    debug(`get uuid ->${this.uuid}`)
  }
}

// export default wxBot
module.exports = wxBot
