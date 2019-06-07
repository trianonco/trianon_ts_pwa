<template>
  <div class="view admin">
    <div class="wrapper">
      <!-- Headers -->
      <HeaderComponent/>

      <!-- ADMIN Components -->
      <h1>ADMIN</h1>

      <br>
      <br>

      <div class="admin-map" v-if="canUserAdminMaps">
        <h1>PANEL DE DISTRIBUIDORES</h1>
        <DragAndDropExcelComponent @onLoad="onLoad_MAP"></DragAndDropExcelComponent>
        <br>
        <hr>
        <br>
        <div class="button-container" v-if="UX.isUploadMapsButton">
          <div class="button-upload" @click="upload_MAPS">SUBIR</div>
        </div>
        <br>
        <hr>
      </div>

      <br>
      <br>

      <div class="admin-shop" v-if="canUserAdminShops && false">
        <h1>PANEL DE PRODUCTOS</h1>
        <div class="db-stats" v-if="UX.isUploadMapsButton">
          <h1>Archivo :: {{ }}</h1>
          <h1>Productos :: {{ }}</h1>
        </div>

        <DragAndDropExcelComponent @onLoad="onLoad_DB"></DragAndDropExcelComponent>

        <br>
        <hr>
        <br>
        <div class="button-container" v-if="UX.isUploadButton">
          <div class="button-upload" @click="upload_DB">SUBIR</div>
        </div>
      </div>

      <br>
      <br>
      <!-- Footers -->
      <FooterComponent/>
    </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";

import { Component, Vue } from "vue-property-decorator";

import HeaderComponent from "./../../shared/components/header/header.component.vue";
import FooterComponent from "./../../shared/components/footer/footer.component.vue";
import DragAndDropExcelComponent from "./components/drag-and-drop-excel.componet.vue";

import IShopProduct from "./../../shared/models/IShopProduct.model";
import { toIShopProduct } from "./../../shared/models/toIShopProduct.model";
import TrianonDB from "./../../shared/database/db";

@Component({
  components: {
    VLazyImage,
    HeaderComponent,
    FooterComponent,
    DragAndDropExcelComponent
  }
})
export default class AdminViewComponent extends Vue {
  private db = new TrianonDB();

  // Bases de Datos
  private products: IShopProduct[] = [];
  private maps: any[] = [];

  private UX: any = {
    isUploadButton: false as boolean,
    isUploadMapsButton: false as boolean
  };

  private canUserAdminUsers: boolean = false;
  private canUserAdminShops: boolean = false;
  private canUserAdminMaps: boolean = false;
  private canUserAdminLogistics: boolean = false;

  private beforeMount() {
    const user = JSON.parse("" + localStorage.getItem("user"));
    if (user.email === "jl.mayorga236@gmail.com") {
      this.canUserAdminUsers = true;
      this.canUserAdminShops = true;
      this.canUserAdminMaps = true;
      this.canUserAdminLogistics = true;
    }
  }

  private onLoad_DB($shop_db: any) {
    this.products = [];
    $shop_db.map(async ($shop_product: any) => {
      const product: IShopProduct = await toIShopProduct($shop_product);
      this.products.push(product);
    });

    this.UX.isUploadButton = true;
  }

  private onLoad_MAP($maps_db: any) {
    this.maps = [];
    $maps_db.map(async ($map: any) => {
      const map = {
        email:
          $map["Correo electronico"] ||
          $map["Correo electrónico"] ||
          $map["email"] ||
          $map["Email"] ||
          "NA",
        city: $map["Ciudad"] || $map["CIUDAD"] || $map["ciudad"] || "NA",
        country: $map["Pais"] || $map["PAIS"] || $map["pais"] || "NA",
        phone: $map["Telefono"] || $map["TELEFONO"] || $map["telefono"] || "NA",
        address:
          $map["Direccion"] || $map["DIRECCION"] || $map["direccion"] || "NA"
      };
      this.maps.push(map);
    });
    this.UX.isUploadMapsButton = true;
  }

  private async upload_MAPS() {
    this.db
      .getAuthorizedDistributors()
      .then(places => {
        console.warn(places[0]);
        console.warn(places[0].updateAt);
        console.warn(places[0].updateAt.toDate());

        this.maps.map($map => {
          const $map_id = `${$map.email}-${$map.address}`;
          const $place = places.filter(
            (place: any) => place && place["id"] === $map_id
          )[0];
          $map["id"] = $map_id;

          // is a Old Place and we are updating
          if ($place) {
            const isSameCity = $place.city === $map.city;
            const isSameAddress = $place.address === $map.address;
            const isSamePhone = $place.phone === $map.phone;
            const isSameEmail = $place.phone === $map.email;
            if (!(isSameCity && isSameAddress && isSamePhone && isSameEmail)) {
              $map["createdAt"] = $place["createdAt"];
              $map["updateAt"] = new Date();
            }

            // is a new Place
          } else {
            $map["createdAt"] = new Date();
            $map["updateAt"] = new Date();
          }
        });

        this.db.setAuthorizedDistributors(this.maps).then(response => {
          console.log(response);
        });
      })
      .catch(error => {});

    /*
    this.db
      .setAuthorizedDistributors(this.maps)
      .then(response => {})
      .catch(error => {});

      */
  }

  private async upload_DB() {
    this.db
      .setShopProducts(this.products)
      .then(response => {})
      .catch(error => {});
  }
}
</script>

<style lang="less">
div.view.admin {
  h1 {
    text-align: center;
    padding: 1em;
    font-family: "TrajanPro";
  }
  .button-container {
    display: block;
    width: 100%;

    .button-upload {
      display: block;
      width: fit-content;
      margin: 0 auto;
      -moz-box-shadow: inset 0px 1px 0px 0px #ffffff;
      -webkit-box-shadow: inset 0px 1px 0px 0px #ffffff;
      box-shadow: inset 0px 1px 0px 0px #ffffff;
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0.05, #ffffff),
        color-stop(1, #f6f6f6)
      );
      background: -moz-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
      background: -webkit-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
      background: -o-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
      background: -ms-linear-gradient(top, #ffffff 5%, #f6f6f6 100%);
      background: linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f6f6f6',GradientType=0);
      background-color: #ffffff;
      -moz-border-radius: 6px;
      -webkit-border-radius: 6px;
      border-radius: 6px;
      border: 1px solid #dcdcdc;
      cursor: pointer;
      color: #666666;
      font-family: Arial;
      font-size: 15px;
      font-weight: bold;
      padding: 15px 24px;
      text-decoration: none;
      text-shadow: 0px 1px 0px #ffffff;
    }
    .button-upload:hover {
      background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        color-stop(0.05, #f6f6f6),
        color-stop(1, #ffffff)
      );
      background: -moz-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -webkit-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -o-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: -ms-linear-gradient(top, #f6f6f6 5%, #ffffff 100%);
      background: linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);
      filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f6f6f6', endColorstr='#ffffff',GradientType=0);
      background-color: #f6f6f6;
    }
    .button-upload:active {
      position: relative;
      top: 1px;
    }
  }
}
</style>