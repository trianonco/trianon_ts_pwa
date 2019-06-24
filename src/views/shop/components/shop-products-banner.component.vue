<template>
  <div class="products-banner">
    <img
      class="first"
      src="../../../shared/assets/images/gender-categories/male-bg.png"
      v-if="gender==='HOMBRE'"
    >
    <img
      class="first"
      src="../../../shared/assets/images/gender-categories/female-bg.png"
      v-if="gender==='DAMA'"
    >
    <h1>{{ description }}</h1>
    <img
      class="last"
      src="../../../shared/assets/images/gender-categories/male-bg.png"
      v-if="gender==='HOMBRE'"
    >
    <img
      class="last"
      src="../../../shared/assets/images/gender-categories/female-bg.png"
      v-if="gender==='DAMA'"
    >
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class ShopProductsBannerComponent extends Vue {
  @Prop()
  gender!: string;
  @Prop()
  description!: string;
}
</script>

<style lang="less" scoped>
@import (reference) "./../../../shared/styles/index.less";

div.products-banner {
  background-color: black;
  color: white;

  display: block;
  width: 100%;

  padding-top: 1em;
  padding-bottom: 1em;

  h1 {
    #Font-TrajanPro();
  }

  #Flex-Row-Extremes();

  img {
    width: 1.5em;
    box-sizing: content-box;

    &.last {
      -moz-transform: scaleX(1);
      -o-transform: scaleX(1);
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
      filter: FlipH;
      -ms-filter: "FlipH";
    }

    &.first {
      -moz-transform: scaleX(-1);
      -o-transform: scaleX(-1);
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
      filter: FlipH;
      -ms-filter: "FlipH";
    }
  }
}

@media (min-width: 600px) {
  div.products-banner {
    background-color: white;
    color: black;
  }
}
</style>