// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import store from './vuex/store'
import App from './App'
import Home from './pages/Home'
import HotItem from './pages/HotItem'
import BotLogin from './pages/BotLogin'
import PageContent from './components/PageContent'

// 开启debug模式
Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)

// Vue.material.registerTheme('default')
Vue.component('page-content', PageContent)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [{
    path: '/',
    name: 'index',
    component: Home
  }, {
    path: '/hot',
    name: 'hot',
    component: HotItem
  }, {
    path: '/login',
    name: 'botlogin',
    component: BotLogin
  }]
})

let WX = Vue.component('app', App)
/* eslint-disable no-new */
new WX({
  el: '#app',
  router: router,
  store
})
/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router: router,
  store,
  render: h => h(App)
})
*/
