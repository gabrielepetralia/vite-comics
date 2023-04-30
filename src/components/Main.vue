<script>
import Cta from "./Cta.vue"

export default {
  name : "Main",

  components : {
    Cta,
  },

  data() {
    return {
      jumbotronImage : "jumbotron.jpg",
    }
  },

  methods: {
    getImage(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href
    }
  }
  
}
</script>

<template>
  <main>
    <div class="jumbotron">
      <img :src="getImage(jumbotronImage)" alt="">
    </div>
    <div class="container">
      <h1 class="fs-xxl">Current Series</h1>
      <h2> [ Content goes here ] </h2>
    </div>
  </main>
  <Cta/>
</template>

<style lang="scss">
  @use "../scss/partials/variables" as *;

  main {
    background-color: #1c1c1c;

    .jumbotron {
      max-height: 400px;
      overflow:  hidden;
    }

    .container {
      position: relative;
      color : white;
      padding : 50px 0;

      h1 {
        position: absolute;
        top: -30px;
        left: 0;
        display: inline-block;
        text-transform: uppercase;
        color : white;
        background-color : $primary-color;
        padding: 10px 30px;
      }
    }
  }
</style>