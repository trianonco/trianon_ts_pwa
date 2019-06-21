<template>
  <div class="view sitemap">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">
      <h1>MAPA DE SITIO</h1>

      <div class="block white">
        <img src="./../../shared/assets/images/terms/sitemap.png">
      </div>
    </div>

    <FooterComponent/>
    <!-- Footers -->
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";

import HeaderComponent from "../../shared/components/header/header.component.vue";
import FooterComponent from "../../shared/components/footer/footer.component.vue";

import ApiDataBase from "./../../shared/database/index";
import InfiniteLoading from "vue-infinite-loading";

@Component({
  components: { HeaderComponent, FooterComponent, VLazyImage, InfiniteLoading }
})
export default class TermsAndPoliciesSafe extends Vue {}

//
</script>

<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.view.sitemap .view-wrapper {
  strong {
    font-weight: 900;
  }
  h1 {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 2.5em;
    background-color: black;
    color: white;
    text-align: center;
    font-family: "TrajanPro";

    font-size: 12px;
    letter-spacing: 3px;

    border-bottom: 5px solid #e6cd82;
  }

  div.block {
    font-family: "Open Sans";
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    background-size: 10px 100%;
    background-image: url("./../../shared/assets/images/terms/gold-bg.png");
    p {
      line-height: 1.5em;
      font-size: 11px;
      letter-spacing: 0px;
      text-align: center;
      width: 100%;
      margin: 0 auto;
      margin-bottom: 5px;
    }

    h2 {
      font-family: "TrajanPro";
      font-size: 11px;
      letter-spacing: 3px;
      text-align: center;
      padding-bottom: 1em;
    }

    &.white {
      background-image: none;
      background-color: #fff;
      color: black;
      h2 {
        font-family: "TrajanPro";
        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        padding-bottom: 1em;
      }
      img {
        width: 100%;
        margin: 0 auto;
      }
    }

    &.silver {
      background-image: none;
      background-color: #dadada;
      color: black;
      h2 {
        font-family: "TrajanPro";

        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        padding-bottom: 0em;
      }
    }

    &.black {
      background-image: none;
      background-color: black;
      color: white;
      h2 {
        font-family: "TrajanPro";
        font-size: 11px;
        letter-spacing: 3px;
        text-align: center;
        padding-top: 1em;
        padding-bottom: 1em;
        font-weight: 100;
      }
      img {
        width: 100%;
      }
      p {
        font-size: 12px;
        width: 100%;
        margin: 0 auto;
        letter-spacing: 0px;
        line-height: 1.5em;
      }
    }
  }
}
</style>