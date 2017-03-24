<template>
  <div class="secondcomponent">
    <h1>I am another page</h1>
    <a>written by {{ author }}</a>
    <p>thanks for vue 2.0</p>
  </div>
</template>


<script>
export default {
  data () {
    return {
      author: `papersnakes`,
      articles: []
    }
  }
}
</script>
