<template>
  <md-toolbar class="main-header">
    <md-button class="md-icon-button" @click="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>

    <h2 class="md-title" style="flex: 1">{{title}}</h2>

    <md-button class="md-icon-button">
      <md-icon>favorite</md-icon>
    </md-button>
  </md-toolbar>
</template>
<script>
export default {
  data () {
    return {
      title: `最热优惠券`
    }
  },
  methods: {
    toggleLeftSidenav () {
      console.log(this.$root)
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>
