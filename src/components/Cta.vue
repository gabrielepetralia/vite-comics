<script>
import { ctaMenu } from "../data/menus";

export default {
  name : "Cta",

  data() {
    return {
      ctaMenu,
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
  <div class="cta">
    <nav class="container">
      <ul>
        <li v-for="(link, index) in ctaMenu" :key="index">
          <div class="icon">
            <img :src="getImage(link.icon)">
          </div>
          <a @click="activeLink = index" class="fs-md fw-regular" :class="{ 'active': index === activeLink }"
            :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss" scoped>
  @use "../scss/partials/variables" as *;
  @use "../scss/partials/mixin" as *;

  .cta {
    background-color: $primary-color;
    padding : 55px 0;
    
    ul {
      display: flex;
      justify-content: space-around;

      li {
        @include centerFlex("vertical");
        
        .icon {
          @include centerFlex("both");
          height: 55px;
        }

        &:last-child {
          .icon {
            width : 60px;
          }
        }

        a {
          text-transform: uppercase;
          color: white;
          padding-left : 18px;

          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
</style>