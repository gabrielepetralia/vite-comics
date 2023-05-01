<script>
import Cta from "./Cta.vue"
import Card from "./partials/Card.vue"
import dcBooks from "../data/dc-comics.json"

export default {
  name : "Main",

  components : {
    Cta,
    Card,
  },

  data() {
    return {
      jumbotronImage : "jumbotron.jpg",
      dcBooks,
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

      <div class="cards-container">
        <Card
          v-for="(book, index) in dcBooks"
          :key = "index"
          :thumb = "book.thumb"
          :series = "book.series"
        />  
      </div>

      <div class="load">
        <button class="fs-xs fw-semibold">Load More</button>
      </div>
      
    </div>
  </main>
  <Cta/>
</template>

<style lang="scss">
  @use "../scss/partials/variables" as *;
  @use "../scss/partials/mixin" as *;

  main {
    background-color: #1c1c1c;

    .jumbotron {
      max-height: 400px;
      overflow:  hidden;
    }

    .container {
      position: relative;
      color : white;
      padding : 60px 0 20px;

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

      .cards-container {
        display: flex;
        flex-wrap: wrap;
      }

      .load {
        @include centerFlex("horizontal");

        button {
          text-transform: uppercase;
          color: white;
          background-color: $primary-color;
          border: none;
          padding: 12px 55px;

          &:hover {
            cursor: pointer;
            transform: scale(1.1);
          }
        }
      }
    }
  }
</style>