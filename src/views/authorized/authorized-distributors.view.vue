<template>
  <div class="view authorized-distributors">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">
      <h1 class="title">DISTRIBUIDORES AUTORIZADOS</h1>

      <h2
        class="description"
      >TENDRÁS A TU ALCANCE DIVERSAS REFERENCIAS DE PRODUCTOS TRIANON, TEN EN CUENTA QUE CADA UNO DE LOS DISTRIBUIDORES ESTA SUJETO A INVENTARIO</h2>

      <div class="search">
        <img src="./../../shared/assets/images/search/lupa-icon.png">
        <input type="text" placeholder="DEPARTAMENTO O CIUDAD">
      </div>

      <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="3"
        map-type-id="terrain"
        style="width: 500%; height: 300px"
      ></GmapMap>

      <GmapMap
        :center="position"
        :zoom="3"
        map-type-id="terrain"
        style="width: 500%; height: 300px"
      ></GmapMap>
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

import TrianonDB from "./../../shared/database/db";

@Component({
  components: { HeaderComponent, FooterComponent, VLazyImage }
})
export default class ProductView extends Vue {
  private markers = [];
  private position = { lat: 10, lng: 10 };

  private mounted() {
    (this as any).$getLocation().then((coordinates: any) => {
      const lat = coordinates.lat;
      const lng = coordinates.lng;
      const coord = {
        lat: lat,
        lng: lng
      };
      this.position = coord;
      console.log(coord);
    });
  }
}
</script>

<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.authorized-distributors {
  display: block;
  width: 100%;

  h1.title {
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: black;
    color: white;
    font-family: "TrajanPro";
    font-weight: normal;
    font-style: normal;
    text-align: center;
    padding: 1em;
  }

  h2.description {
    letter-spacing: 1px;
    line-height: 1.5em;
    font-size: 0.8em;
    display: block;
    width: 100%;
    box-sizing: border-box;
    background-color: white;
    color: black;
    font-family: "Open Sans";
    font-weight: normal;
    font-style: normal;
    text-align: center;
    padding: 1em;
  }

  div.search {
    display: block;
    background-color: gray;
    #Flex-Row-Center-toLeft();
    img {
      width: 1em;
      padding: 1em;
      padding-left: 2em;
    }
    input {
      display: block;
      width: 15em;
      background: none;
      color: white;
      outline: none;
      border: none;
      padding: 0.5em;
      border-bottom: 1px solid white;
      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1; /* Firefox */
      }
    }
  }
}
</style>