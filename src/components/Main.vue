<script>
import Cta from "./Cta.vue"

export default {
  name : "Main",

  components : {
    Cta,
  }
  
}
</script>

<template>
  <main>
    <div class="container">
      <h1> [ Content goes here ] </h1>
    </div>
  </main>
  <Cta/>
</template>

<style lang="scss">
  main {
    padding : 50px 0;
    color : white;
    background-color: #1c1c1c;
  }
</style>