// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
// import store from './vuex/store'
import App from './SApp'
import Home from './pages/Home'
// import HotItem from './pages/HotItem'
// import BotLogin from './pages/BotLogin'
// import PageContent from './components/PageContent'

// 开启debug模式
Vue.config.debug = true
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(VueMaterial)
// Vue.material.registerTheme('default')
// Vue.component('page-content', PageContent)
const router = new VueRouter({
  mode: 'history',
  base: '/hots/',
  routes: [{
    path: '/',
    name: 'index',
    component: Home
  }]
})

const WX = Vue.component('app', App)
// const WX = Vue.component('app' SApp)
/* eslint-disable no-new */
new WX({
  el: '#app',
  router: router

})

