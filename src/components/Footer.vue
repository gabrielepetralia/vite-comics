<script>

import { footerMenu , socialsMenu } from "../data/menus";
export default {
  name : "Footer",

  data() {
    return {
      logoBg : "dc-logo-bg.png",
      footerMenu,
      socialsMenu,
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
  <div class="top">
    <div class="container">
      <div v-for="(menu,index) in footerMenu" :key="index" class="col">
        <h4 class="fs-lg">{{ menu[0] }}</h4>
        <ul>
          <li v-for="(link,index) in menu.slice(1)" :key="index">
            <a class="fs-sm fw-light" :href="link.href">{{ link.text }}</a>
          </li>
        </ul>
      </div>

      <div class="logo-bg">
        <img :src="getImage(logoBg)" alt="Logo DC">
      </div>
    </div>
  </div>
  <div class="bottom">
    <div class="container">
      <button class="sign-up fs-md fw-semibold">Sign-Up Now!</button>
      <div class="socials">
        <h3 class="fs-xl">Follow Us</h3>
        <ul>
          <li v-for="(social, index) in socialsMenu" :key="index">
            <a :href="social.href"><img class="social-logo" :src="getImage(social.image)" :alt="social.name"></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use "../scss/partials/mixin" as *;
  @use "../scss/partials/variables" as *;

  .top {
    background-image: url("../assets/img/footer-bg.jpg");
    background-size: cover;

    .container {
      overflow: hidden;
      min-height: 200px;
      position: relative;
      padding-top: 35px;
      display: flex;

      .col {
        margin-right: 40px;
        margin-bottom: 20px;

        h4 {
          color: white;
          text-transform: uppercase;
          margin-bottom: 10px;
        }
  
        ul {
  
          li {
            a {
              text-transform: capitalize;
              color: rgb(191, 191, 191);
              
  
              &:hover {
                text-decoration: underline;
              }
            }
          }
        }
      }

      .logo-bg {
        position: absolute;
        top: -105px;
        right : 0;
      }
      
    }
  }

  .bottom {
    padding: 30px 0;
    background-color: #303030;

    .container {
      @include centerFlex("vertical");
      justify-content: space-between;

      .sign-up {
        text-transform: uppercase;
        border: 2px solid $primary-color;
        color: white;
        background-color: transparent;
        padding: 15px 20px;

        &:hover {
          cursor: pointer;
          transform: scale(1.1);
        }
      }

      .socials {
        display: flex;
        align-content: baseline;
        h3 {
          color: $primary-color;
          text-transform: uppercase;
          margin-right: 10px;
        }

        ul {
          display: flex;

          li {
            margin-left: 20px;

            a:hover img {
              transform: scale(1.1);
            }
          }
        }
      }
    }
  }
</style>