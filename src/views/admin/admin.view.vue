<template>
  <div class="view admin">
    <div class="wrapper">
      <!-- Headers -->
      <HeaderComponent/>

      <!-- ADMIN Components -->
      <h1>ADMIN</h1>

      <br>
      <br>

      <div class="db-stats" v-if="UX.isUploadButton">
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

      <br>
      <hr>
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
  private products: IShopProduct[] = [];
  private UX: any = {
    isUploadButton: false as boolean
  };
  private mounted() {}

  private onLoad_DB($shop_db: any) {
    this.products = [];
    $shop_db.map(async ($shop_product: any) => {
      const product: IShopProduct = await toIShopProduct($shop_product);
      this.products.push(product);
    });

    this.UX.isUploadButton = true;
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