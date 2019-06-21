<template>
  <div class="view authorized-distributors">
    <!-- Headers -->
    <HeaderComponent/>

    <div class="view-wrapper">
      <h1 class="title">
        <span>DISTRIBUIDORES AUTORIZADOS</span>
      </h1>

      <h2
        class="description"
      >TENDRÁS A TU ALCANCE DIVERSAS REFERENCIAS DE PRODUCTOS TRIANON, TEN EN CUENTA QUE CADA UNO DE LOS DISTRIBUIDORES ESTA SUJETO A INVENTARIO</h2>

      <div class="list-and-map">
        <div class="search">
          <div class="search-wrapper">
            <img alt="TrianonCo Image" src="./../../shared/assets/images/search/lupa-icon.png">
            <input
              type="text"
              placeholder="DEPARTAMENTO O CIUDAD"
              v-model="currentSearchKey"
              v-on:keyup.enter="onSubmit"
            >
          </div>
          <img
            class="banner"
            src="./../../shared/assets/images/deskt-distributors_Mesa de trabajo 1.png"
          >
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
            v-if="currentDistributor && currentDistributor.position"
            :position="currentDistributor.position"
            :clickable="true"
            :draggable="false"
            @click="center=currentDistributor.position"
          />
        </GmapMap>
      </div>

      <div class="goUpButton" v-if="!isFirstPage" @click="goScrollTop()">
        <i class="fas fa-arrow-up"></i>
      </div>

      <div class="authorized-distributor-city">{{ currentCity }}</div>

      <div v-for="(distributor,index) of distributorsFilteredBySearchKey" v-bind:key="index">
        <div class="authorized-distributor-card" @click="setCurrentDistributor(distributor)">
          <div
            class="authorized-distributor-card-isnew"
            v-if="isNew(distributor)"
          >NUEVO DISTRIBUIDOR AUTORIZADO</div>

          <div class="authorized-distributor-card-phone">
            <span>{{ distributor.city }} {{ distributor.phone}}</span>
          </div>
          <div class="authorized-distributor-card-address">
            <span>DIRECCIÓN: {{ distributor.address}}</span>
          </div>
          <div class="authorized-distributor-card-email">
            <span>{{ distributor.email}}</span>
          </div>
        </div>
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
export default class ProductView extends Vue {
  private apiDB = new ApiDataBase();
  private db: any = {};

  private distributors: any[] = [];
  private distributorsDB: any[] = [];

  private markers: any = [];
  private position: any = { lat: 10, lng: 10 };

  private productsPageSize: number = 6;
  private isFirstPage: boolean = true;
  private page: number = 1;

  private currentCity: string = "";
  private currentSearchKey: string = "";
  private currentDistributor: any = {};

  private beforeMount() {
    this.apiDB.setDatabaseByName("SETTINGS-DB");
    this.db = this.apiDB.getDatabase();
  }

  private get distributorsFilteredBySearchKey() {
    if (this.currentSearchKey === "") {
      return this.distributorsDB.filter((distDB: any) => {
        const latDiff2 = Math.pow(
          Math.abs(distDB.position.lat - this.position.lat),
          2
        );
        const lngDiff2 = Math.pow(
          Math.abs(distDB.position.lng - this.position.lng),
          2
        );
        const posDistance = Math.sqrt(latDiff2 + lngDiff2);
        return posDistance < 0.01;
      });
    } else {
      return this.distributorsDB.filter(distributor =>
        distributor.city
          .toUpperCase()
          .includes(this.currentSearchKey.toUpperCase())
      );
    }
  }

  private setCurrentDistributor(distributor: any) {
    if (distributor && distributor.position) {
      this.currentDistributor = distributor;
      this.position = this.currentDistributor.position;
      this.currentCity = this.currentDistributor.city;
      this.goScrollTop();
    }
  }

  private isNew(distributor: any) {
    const nowTime = new Date().getTime();
    const createdTime = new Date(distributor.createdAt).getTime();
    const diffTime = (nowTime - createdTime) / (1000 * 60 * 60 * 24);
    return diffTime < 0.035;
    //return Math.random() > 0.5;
  }

  private mounted() {
    this.db.getAuthorizedDistributors().then((response: any) => {
      this.distributorsDB = response.sort((a: any, b: any) => {
        return a.city.localeCompare(b.city);
      });

      (this as any).$getLocation().then((coordinates: any) => {
        const lat = coordinates.lat;
        const lng = coordinates.lng;
        this.position = {
          lat: lat,
          lng: lng
        };
        this.markers.push({ position: this.position });
      });
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

    .banner {
      display: none;
    }
    .search-wrapper {
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
  }

  div.authorized-distributor-card-isnew {
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

  div.authorized-distributor-card {
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

  div.authorized-distributor-city {
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
  div.authorized-distributors {
    h2.description {
      width: 550px;
      padding: 2em;
      padding-top: 0px;
    }
    h1.title {
      background-color: white;
      color: black;
    }
    .list-and-map {
      display: block;

      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-flex-direction: row-reverse;
      -ms-flex-direction: row-reverse;
      flex-direction: row-reverse;
      -webkit-flex-wrap: nowrap;
      -ms-flex-wrap: nowrap;
      flex-wrap: nowrap;
      -webkit-justify-content: center;
      -ms-flex-pack: center;
      justify-content: center;
      -webkit-align-content: center;
      -ms-flex-line-pack: center;
      align-content: center;
      -webkit-align-items: flex-start;
      -ms-flex-align: start;
      align-items: flex-start;

      .vue-map-container {
        width: 50%;
      }
      .search {
        width: 50%;
        .banner {
          padding: 0em;
          display: block;
          width: 100%;
          height: 252px;
          object-fit: cover;
        }
        .search-wrapper {
        }
      }
    }
  }
}
</style>