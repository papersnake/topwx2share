<template>
<div class="container">
    <md-sidenav class="main-sidebar md-left md-fixed" ref="main-sidebar">
      <md-toolbar class="vue-material-logo" md-theme="white">
        <router-link exact to="/">
          <img src="./assets/logo.png" alt="Vue">
          <span>淘宝优惠券</span>
        </router-link>
      </md-toolbar>

      <div class="main-sidebar-links">
        <md-list class="md-dense">
          <md-list-item>
            <router-link exact to="/">首页</router-link>
          </md-list-item>

          <md-list-item>
            <router-link exact to="/hot">热门推荐</router-link>
          </md-list-item>

          <md-list-item>
            <span>类别分类</span>

            <md-list-expand>
            <md-list>
              <md-list-item class="md-inset" v-for="category in categoryList">
                {{category.itemcats}}
              </md-list-item>
            </md-list>
          </md-list-expand>
          </md-list-item>
        </md-list>
      </div>
     </md-sidenav>
     <transition name="md-router" apear>
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
     </transition>

    <div id="nprogress">
      <div class="spinner" role="spinner" v-show="loading">
        <div class="spinner-icon"></div>
      </div>
    </div>
</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'app',
  created () {
    this.$store.dispatch('fetchCategoryList')
  },
  data () {
    return {
      toolbar: true,
      theme: 'default',
      pageTitle: 'this'
    }
  },
  computed: {
    logo () {
      return './assets/logo.png'
    },
    ...mapGetters({
      loading: 'getloadState',
      categoryList: 'getCategoryList'
    })

  },
  methods: {
    toggleSidenav () {
      this.$refs['main-sidebar'].toggle()
    },
    closeSidenav () {
      this.$refs['main-sidebar'].close()
    }
  }
}
</script>
<style lang="scss">
@import 'assets/styles/variables.scss';
$sizebar-size: 280px;
[v-cloak] {
  display: none;
}
html,
body{
  height: 100%;
  overflow: hidden;
  font-family: "Microsoft Yahei";
}

body{
  display: flex;
}

.container {
  min-height: 100%;
  display: flex;
  flex-flow: column nowrap;
  flex: 1;
  transition: $swift-ease-out;

  @media (min-width: 1281px) {
    padding-left: $sizebar-size;
  }
}
.main-sidebar.md-sidenav {
  .md-sidenav-content {
    width: $sizebar-size;
    display: flex;
    flex-flow: column;
    overflow: hidden;

    @media (min-width: 1281px) {
      top: 0;
      pointer-events: auto;
      transform: translate3d(0, 0, 0);
      box-shadow: $material-shadow-2dp;
    }
  }

  .md-backdrop {
    @media (min-width: 1281px) {
      opacity: 0;
      pointer-events: none;
    }
  }
  .md-toolbar {
    min-height: 172px;
    border-bottom: 1px solid rgba(#000, .12);
  }

  .vue-material-logo {
    font-size: 24px;

    a {
      width: 100%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      color: inherit;
      text-decoration: none;

      &:hover {
        color: inherit;
        text-decoration: none;
      }
    }

    img {
      width: 160px;
      margin-bottom: 16px;
    }
  }

  .main-sidebar-links {
    overflow: auto;
    flex: 1;

    .md-inset .md-list-item-container {
      padding-left: 36px;
    }

    .md-list-item-container {
      font-size: 14px;
      font-weight: 500;
    }
  }

  .release-version {
    padding: 8px 8px 8px 16px;
    border-top: 1px solid rgba(#000, .12);
    display: none;

    @media (max-width: 480px) {
      display: block;
    }

    > div {
      justify-content: center;
    }

    .md-select:after {
      color: rgba(#000, .87);
    }
  }
}

.main-content {
  padding: 16px;
  flex: 1;
  overflow: auto;
  background-color: #fff;
  transform: translate3D(0, 0, 0);
  transition: $swift-ease-out;
  transition-delay: .2s;
}

.md-router-enter,
.md-router-leave {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;

  @media (min-width: 1281px) {
    left: $sizebar-size;
  }

  .main-content {
    opacity: 0;
    overflow: hidden;
  }
}

.md-router-leave {
  z-index: 1;
  transition: $swift-ease-in;
  transition-duration: .25s;
}

.md-router-enter {
  z-index: 2;
  transition: $swift-ease-out;

  .main-content {
    transform: translate3D(0, 10%, 0);
  }
}

@-webkit-keyframes nprogress-spinner {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes nprogress-spinner {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

#nprogress {
  pointer-events: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: auto;
  .bar {
    background: #29d;
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
  }
  .peg {
    display: block;
    position: absolute;
    right: 0px;
    width: 100px;
    height: 100%;
    box-shadow: 0 0 10px #29d, 0 0 5px #29d;
    opacity: 1.0;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }
  .spinner {
    display: block;
    position: absolute;
    z-index: 1031;
    top: 50%;
    right: 50%;
  }
  .spinner-icon {
    width: 36px;
    height: 36px;
    box-sizing: border-box;
    border: solid 2px transparent;
    border-top-color: #29d;
    border-left-color: #29d;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }
}
</style>
