<template>
  <page-content page-title="热门推荐">
    <div class="main-content">
      <md-input-container>
        <label>Single</label>
        <md-file ref="xlsfile" name="xlsfile" id="xlsfile" v-model="single"></md-file>
      </md-input-container>
       <p>{{ single }}</p>
    </div>
  </page-content>
</template>
<script>
  export default {
    data () {
      return {
        single: null
      }
    },
    created () {
      // this.$store.dispatch('getGyItemList')
    },
    methods: {
      handlefile (e) {
        // console.log(this.single)
      }
    },
    watch: {
      single: function (file) {
        // console.log(this.single)
        const files = this.$refs.xlsfile.$refs.fileInput.files[0]
        // console.log(this.$refs.xlsfile.$refs.fileInput.files[0])
        this.$store.dispatch('getGyItemList', files)
      }
    }
  }
</script>
