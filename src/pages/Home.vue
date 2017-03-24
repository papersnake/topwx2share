<template>
  <page-content page-title="首页">
    <div class="main-content">
      <div class="itemlist-warp" v-masonry="masonry" ref="grid">
        <ItemCard v-for="(item, index) in itemList" :items="item"></ItemCard>
      </div>
    </div>
  </page-content>
</template>
<script>
  import Vue from 'vue'
  import { mapGetters } from 'vuex'
  import Masonry from 'masonry-layout'
  import ItemCard from '../components/ItemCard'
  export default {
    data () {
      return {
        masonry: false
      }
    },
    created () {
      this.getItemList()
    },
    computed: {
      ...mapGetters({
        itemList: 'getItemList'
      })
    },
    methods: {
      getItemList () {
        let postparam = {
          page: 0,
          cats: null,
          searchkey: null,
          order: null,
          sortby: null
        }
        this.$store.dispatch('fetchItemList', postparam)
        // this.masonry = true
      }
    },
    mounted () {
      /**
      console.log('ready')
      let masonry = new Masonry('.itemlist-warp', {
        itemSelector: '.grid-item',
        cloumnWidth: 320,
        gutter: 16,
        fitWidth: true
      })
      this.$nextTick(() => {
        console.log(masonry)
        masonry.layout()
      })
      this.$nextTick(function () {
        // console.log(this.$refs)
        console.log('nextTick')
        const ms = this.$refs.grid.masonry
        console.log(ms)
        ms.reloadItems()
        ms.layout()
        // this.$refs.grid.masonry.layout()
      })**/
    },
    components: {
      ItemCard
    },
    watch: {
      itemList: function (val, oldVal) {
        // console.log(val)
        // console.log(oldVal)

        this.$nextTick(() => {
          const ms = this.$refs.grid.masonry
          ms.reloadItems()
          ms.layout()
        })
      }
    }
  }

  Vue.directive('masonry', function (el, value) {
    // console.log(el)
    // console.log(value)
    let options = {
      itemSelector: '.grid-item',
      cloumnWidth: 320,
      gutter: 16,
      fitWidth: true
    }

    // options = Object.assign({}, options, value)
    if (!el.masonry) {
      el.masonry = new Masonry(el, options)
    }
    el.masonry.reloadItems()
    el.masonry.layout()
  })
</script>
<style>
.itemlist-warp {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
}
</style>
