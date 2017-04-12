<template>
<div class="grid-item">
<md-card md-with-hover>
  <md-card-media>
    <md-image :md-src="imgsrc"></md-image>
  </md-card-media>

  <md-card-header>
    <div class="md-title">{{items.itemname}}</div>
    <div class="md-subhead">优惠券 {{items.coupondeno}} ，剩余{{items.coupontotal}}张</div>
  </md-card-header>

  <md-card-actions>
    <md-button>Action</md-button>
    <md-button>Action</md-button>
  </md-card-actions>

  <md-card-content>

  </md-card-content>
</md-card>
</div>
</template>
<script>
export default {
  props: {
    items: {
      type: Object,
      required: true
    }
  },
  computed: {
    imgsrc: function () {
      return this.items.itempic + '_320x320.jpg'
    }
  }
}
</script>
<style>
.grid-item {
  width: 320px;
  min-height: 560px;
  margin-left: 6px;
  margin-right: 6px;
}
</style>
