<script>
import { headerMenu } from "../data/menus";

export default {
  data() {
    return {
      logo : "../assets/img/dc-logo.png",
      headerMenu,
      activeLink : null,
    }
  }
}
</script>

<template>
  <header>
    <div class="container">

      <div class="logo">
        <img src="../assets/img/dc-logo.png" alt="Logo DC">
      </div>
  
      <nav>
        <ul>
          <li v-for="(link, index) in headerMenu" :key="index"> 
            <a @click="activeLink = index" class="fs-md fw-medium" :class="{'active' : index === activeLink}" :href="link.href">{{ link.text }}</a>
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