<script>

export default {
  name : 'Card',

  props : {
    thumb : String,
    series : String
  },
}
</script>

<template>
  <div class="card">
    <div class="thumb">
      <img :src="thumb" :alt="series">
    </div>
    <h5 class="fs-md fw-light">{{ series }}</h5>
  </div>

</template>

<style lang="scss" scoped>

  .card {
    width: calc(100% / 6);
    padding: 0 10px;

    .thumb {
      width: 100%;
      aspect-ratio: 1 / 1;
      margin-bottom: 20px;
      overflow: hidden;
    }

    h5 {
      text-transform: uppercase;
      margin-bottom: 50px;
    }
  }
</style>