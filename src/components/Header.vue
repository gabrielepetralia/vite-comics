<script>
import { headerMenu } from "../data/menus";

export default {
  name: "Header",

  data() {
    return {
      logo : "dc-logo.png",
      headerMenu,
      activeLink : null,
    }
  },

  methods : {
    getImage(img) {
      return new URL(`../assets/img/${img}`, import.meta.url).href
    }
  }
}
</script>

<template>
  <header>
    <div class="container">

      <div class="logo">
        <img :src="getImage(logo)" alt="Logo DC">
      </div>
  
      <nav>
        <ul>
          <li v-for="(link, index) in headerMenu" :key="index"> 
            <a @click="activeLink = index" class="fs-sm fw-medium" :class="{'active' : index === activeLink}" :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </nav>

    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use "../scss/partials/variables" as *;
  @use "../scss/partials/mixin" as *;

  header {
    .container {
      @include centerFlex("vertical");
      justify-content: space-between;
      
      height: 120px;
      
      .logo {
        height : 100%;
        padding : 20px 0;
      }
  
      nav {
        height: 100%;

        ul {
          display: flex;
          height : 100%;
          
          li {
            padding: 0 18px;
  
            a {
              @include centerFlex("vertical");
              height : 100%;
              text-transform: uppercase;
              color: rgb(86, 86, 86);
              padding : 20px 0px;
              border-bottom: 5px solid transparent;

              &:hover,
              &.active {
                color : $primary-color;
                border-bottom: 5px solid $primary-color;
              }
            }
          }
        }
      }
    }
  }
</style>