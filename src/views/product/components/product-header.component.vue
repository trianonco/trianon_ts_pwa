<template>
  <div class="product-header">
    <div class="product header mobile">
      <h1>
        <img
          alt="TrianonCo Image"
          src="../../../shared/assets/images/gender-categories/bullet-gold.png"
        >
        <span>100% Cuero. 100% Colombiano</span>
        <img
          alt="TrianonCo Image"
          src="../../../shared/assets/images/gender-categories/bullet-gold.png"
        >
      </h1>
    </div>
    <div class="product header desktop">
      <h1>
        <span>UNA TRADICIÓN DESDE 1935. 100% COLOMBIANA</span>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

@Component({
  components: {
    VLazyImage
  }
})
export default class ProductHeaderComponent extends Vue {
  private mounted() {}
}
</script>

<style lang="less">
@import (reference) "./../../../shared/styles/index.less";
div.product.header {
  h1 {
    display: block;
    width: fit-content;
    padding: 1em 0em;
    margin: 0 auto;
    padding-top: 0em;
    img {
      width: 1em;
      display: inline-block;
      padding: 0.5em;
      vertical-align: middle;
      box-sizing: content-box;
    }
    span {
      display: inline-block;
      vertical-align: middle;
      font-size: 3.5vw;
      letter-spacing: 0px;
      -webkit-transform: scaleY(0.9);
      transform: scaleY(0.9);
    }
  }

  &.mobile {
    display: none;
  }
  &.desktop {
    display: block;
  }
}

@media (min-width: 600px) {
  div.product.header {
    &.mobile {
      display: none;
    }
    &.desktop {
      display: block;
      background-color: white;
      color: black;

      h1,
      span {
        font-size: 14px;
        #Font-TrajanPro();
      }

      h1 {
        padding: 1em;
        margin: 0 auto;
      }
    }
  }
}
</style>