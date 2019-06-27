<template>
  <div class="view authorized-shops">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">
      <h1 class="title">
        <span>TIENDAS TRIANON</span>
        <img class="mobile" src="./../../shared/assets/images/banners/shops.png">
        <img class="desktop" src="./../../shared/assets/images/banners/shops-desktops.png">
        <p>EN NUESTRAS TIENDAS, PODRÁS ENCONTRAR COMPLETA DISPONIBILIDAD DE TODOS NUETROS PRODUCTOS ASI COMO TAMBIÉN CONOCER LAS MÁS RECIENTES COLECCIONES</p>
      </h1>

      <div class="list-and-map">
        <div class="list">
          <div v-for="(shop,index) of shopsFilteredBySearchKey" v-bind:key="index">
            <div class="authorized-shop-card" @click="setCurrentShop(shop)">
              <div class="authorized-shop-card-phone">
                <span>{{ shop.city }}</span>
                <span v-if="shop.place">- {{ shop.place}}</span>
                <span v-if="shop.local">{{ shop.local}}</span>
              </div>
              <div class="authorized-shop-card-address">
                <span v-if="shop.address">{{ shop.address}} /</span>
                <span v-if="shop.phone">TELÉFONO} {{ shop.phone}}</span>
              </div>
              <div class="authorized-shop-card-address">
                <span v-if="shop.schedule">HORARIO DE ATENCIÓN : {{ shop.schedule}}</span>
                <span v-if="shop.daytime">{{ shop.daytime}}</span>
              </div>
            </div>
          </div>
        </div>
        <GmapMap
          map-type-id="terrain"
          style="width: 500px; height: 300px"
          :center="position"
          :zoom="16"
          :options="{
          zoomControl: true,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl: false,
          fullscreenControl: true,
          disableDefaultUi: false
        }"
        >
          <GmapMarker
            v-if="currentShop && currentShop.coord"
            :position="currentShop.coord"
            :clickable="true"
            :draggable="false"
            @click="center=currentShop.coord"
          />
        </GmapMap>
      </div>

      <BannerAddressComponent></BannerAddressComponent>

      <div class="goUpButton" v-if="!isFirstPage" @click="goScrollTop()">
        <i class="fas fa-arrow-up"></i>
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

import BannerAddressComponent from "./../home/components/home-banners/banner-address.component.vue";
@Component({
  components: {
    HeaderComponent,
    FooterComponent,
    VLazyImage,
    InfiniteLoading,
    BannerAddressComponent
  }
})
export default class AuthorizedShops extends Vue {
  private apiDB = new ApiDataBase();
  private db: any = {};

  private shop: any[] = [];
  private shopDB: any[] = [];

  private markers: any = [];
  private position: any = { lat: 10, lng: 10 };

  private productsPageSize: number = 6;
  private isFirstPage: boolean = true;
  private page: number = 1;

  private currentCity: string = "";
  private currentSearchKey: string = "";
  private currentShop: any = {};

  private beforeMount() {
    this.apiDB.setDatabaseByName("SETTINGS-DB");
    this.db = this.apiDB.getDatabase();
  }

  private get shopsFilteredBySearchKey() {
    return this.shop.filter(shop =>
      shop.city.toUpperCase().includes(this.currentSearchKey.toUpperCase())
    );
  }

  private setCurrentShop(shop: any) {
    if (shop && shop.coord) {
      this.currentShop = shop;
      this.position = this.currentShop.coord;
      this.currentCity = this.currentShop.city;
    }
  }

  private isNew(distributor: any) {
    const nowTime = new Date().getTime();
    const createdTime = new Date(distributor.createdAt).getTime();
    const diffTime = (nowTime - createdTime) / (1000 * 60 * 60 * 24);
    return diffTime < 7;
  }

  private mounted() {
    (this as any).$ga.page("/authorized/shops");

    this.db.getAuthorizedShops().then((response: any) => {
      this.shop = response.sort((a: any, b: any) => {
        return a.city.localeCompare(b.city);
      });
    });

    (this as any)
      .$getLocation()
      .then((coordinates: any) => {
        const lat = coordinates.lat;
        const lng = coordinates.lng;
        const coord = {
          lat: lat,
          lng: lng
        };
        this.position = coord;
        this.markers.push({ position: this.position });
        console.log(coord);
      })
      .catch((e: any) => {
        const lat = 4.610292;
        const lng = -74.100711;
        this.position = {
          lat: lat,
          lng: lng
        };
        this.markers.push({ position: this.position });
      });
  }

  private onSubmit() {
    this.currentCity = JSON.parse(
      JSON.stringify(this.currentSearchKey + "") + ""
    );
  }

  private handleScroll($event: any) {
    const scrollPosition =
      document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition < 50) {
      this.isFirstPage = true;
    } else {
      this.isFirstPage = false;
    }
  }

  private created() {
    window.addEventListener("scroll", this.handleScroll);
    // currentCity
  }

  private destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  private goScrollTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }
}

//
</script>

<style lang="less">
@import (reference) "./../../shared/styles/index.less";
div.authorized-shops {
  display: block;
  width: 100%;

  .mobile {
    display: block !important;
  }
  .desktop {
    display: none !important;
  }

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
    padding: 2em;
    font-size: 10px;
    span {
      display: inline-block;
      -webkit-transform: scale(1, 0.85); /* Safari and Chrome */
      -moz-transform: scale(1, 0.85); /* Firefox */
      -ms-transform: scale(1, 0.85); /* IE 9 */
      -o-transform: scale(1, 0.85); /* Opera */
      transform: scale(1, 0.85); /* W3C */
      letter-spacing: 1px;
    }

    p {
      font-family: "Open Sans";
      font-weight: normal;
      font-style: normal;
      font-size: 10px;
      letter-spacing: 1px;
      line-height: 1.5em;
      width: 275px;
      margin: 0 auto;
    }

    img {
      display: block;
      width: 100%;
      box-sizing: border-box;
      padding: 1em;
    }
  }

  div.list {
    display: block;
  }

  div.vue-map-container {
    display: block;
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

    font-size: 10px;
    width: 292px;
    margin: 0 auto;
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
      width: 20em;
      background: none;
      color: white;
      outline: none;
      border: none;
      padding: 0.5em;
      border-bottom: 1px solid white;

      font-family: "TrajanPro";
      font-weight: normal;
      font-style: normal;
      font-size: 10px;
      letter-spacing: 1px;

      &::placeholder {
        /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1; /* Firefox */
      }
    }
  }

  div.authorized-shop-card-isnew {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em 0.25em;
    background-color: #d8b151;
    color: white;

    font-family: "Open Sans";
    font-weight: normal;
    font-style: normal;

    font-size: 10px;
    letter-spacing: 2px;
  }

  div.authorized-shop-card {
    cursor: pointer;

    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 0em;

    text-align: center;

    border-bottom: 1px solid #d5d5d5;
    font-family: "TrajanPro";
    font-weight: normal;
    font-style: normal;

    color: black;

    &:hover {
      opacity: 0.9;
      background-color: #fafafa;
    }

    span {
      display: inline-block;
      -webkit-transform: scale(1, 0.8); /* Safari and Chrome */
      -moz-transform: scale(1, 0.8); /* Firefox */
      -ms-transform: scale(1, 0.8); /* IE 9 */
      -o-transform: scale(1, 0.8); /* Opera */
      transform: scale(1, 0.8); /* W3C */
      letter-spacing: 2px;
    }

    &-phone {
      padding: 0.15em;
      padding-top: 1em;
      font-size: 11px;
      font-weight: 900;
    }
    &-address {
      padding: 0.15em;
      font-size: 11px;
      font-weight: 900;
    }
    &-email {
      padding: 0.15em;
      font-size: 11px;
      color: #888;
      font-family: "Open Sans";
      font-weight: normal;
      font-style: normal;
      letter-spacing: 0px;
      text-transform: lowercase;
      padding-bottom: 1em;
      span {
        letter-spacing: 1px;
      }
    }
  }

  div.authorized-shop-city {
    display: block;
    width: 100%;
    box-sizing: border-box;
    padding: 1em;
    background-color: black;
    color: white;
    text-align: center;
    text-transform: uppercase;
  }

  div.goUpButton {
    display: block;
    #Flex-Row-Center-Center();
    width: 3em;
    height: 3em;
    z-index: 1000;
    border-radius: 100%;
    background-color: rgba(155, 155, 155, 0.15);
    color: rgba(100, 100, 100, 0.95);
    position: fixed;
    bottom: 1em;
    right: 1em;
  }
}

@media (min-width: 600px) {
  div.authorized-shops {
    .mobile {
      display: none !important;
    }
    .desktop {
      display: block !important;
    }

    div.view-wrapper {
    }

    h1.title {
      display: block;
      width: 100%;
      box-sizing: border-box;
      background-color: white;
      color: black;
      font-size: 1.15em;
      p {
        width: 600px;
        line-height: 2em;
        letter-spacing: 2px;
      }
    }

    div.list-and-map {
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
    div.list {
      display: inline-block;
      vertical-align: top;
      width: 48%;
      max-width: 500px;
    }

    div.vue-map-container {
      display: inline-block;
      width: 40%;
    }
  }
}
</style>