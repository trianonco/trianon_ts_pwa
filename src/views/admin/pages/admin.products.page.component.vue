<template>
  <div class="admin page products">
    <form>
      <DragAndDropExcelProductsComponent
        :message="'PRODUCTOS'"
        @onStart="onDragAndDropStartProducts"
        @onLoad="onDragAndDropLoadProducts"
      ></DragAndDropExcelProductsComponent>

      <div class="buttons">
        <div class="button clear" @click="clear()">BORRAR</div>
        <div class="button save" @click="save()">GUARDAR</div>
      </div>
    </form>
    <div class="loader" v-if="isLoading">
      <img src="./../../../shared/assets/images/ajax-loader.gif" width="25px">
    </div>
  </div>
</template>

<script lang="ts">
import VLazyImage from "v-lazy-image";
import ApiDataBase from "./../../../shared/database/index";
import DragAndDropExcelProductsComponent from "./../components/lib/drag-and-drop-excel-products.components.vue";
import { Component, Vue } from "vue-property-decorator";
import FuzzySet from "fuzzyset.js";
import IShopProduct from "./../../../shared/models/IShopProduct.model";

@Component({
  components: { DragAndDropExcelProductsComponent },
  name: "AdminTitlePageComponent"
})
export default class AdminProductsPageComponent extends Vue {
  private isLoading: boolean = false;
  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private PRODUCTS: IShopProduct[] = [];

  private beforeMount() {
    this.apiDB.setDatabaseByName("SHOP-DB");
    this.db = this.apiDB.getDatabase();
  }

  private onDragAndDropStartProducts() {
    this.isLoading = true;
  }
  private onDragAndDropLoadProducts($products: any[]) {
    //this.DATA.shop = $products;
    const products = [];
    $products.map(($product: any) => {
      const product: IShopProduct = {
        ref: this.getProductRef($product),
        ref_code: this.getProductRefCode($product),
        ref_color_code: this.getProductRefColorCode($product),
        ref_size_code: this.getProductRefSizeCode($product),
        ref_photo_code: this.getProductRefPhotoCode($product),
        discount: this.getProductDiscount($product),
        description: this.getProductDescription($product),
        gender: this.getProductGender($product),
        category: this.getProductCategory($product).toUpperCase(),
        short_name: this.getProductShortName($product),
        barcode: this.getProductBarCode($product),
        price_cop: this.getProductPriceCOP($product),
        price_usd: this.getProductPriceUSD($product),
        line: this.getProductLine($product),
        color: this.getProductColor($product),
        height: this.getProductHeight($product),
        width: this.getProductWidth($product),
        depth: this.getProductDepth($product)
      };

      this.PRODUCTS.push(product);
    });
    this.isLoading = false;
  }
  private async save() {
    console.warn(
      "----------------------------------------------------------------------"
    );

    const PRODUCTS_GENDER_HOMBRE_CATEGORY_BILLETERAS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "BILLETERAS"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_BOLSOS_Y_MALETINES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "BOLSOS Y MALETINES"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_CINTURONES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "CINTURONES"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_LLAVEROS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "LLAVEROS"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_MONEDEROS_Y_TARJETEROS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" &&
        product.category === "MONEDEROS Y TARJETEROS"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_BILLETES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "PORTA BILLETES"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_COSMETICOS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "PORTA COSMÉTICOS"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_DOCUMENTOS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "PORTA DOCUMENTOS"
    );
    const PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_PASAPORTES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "HOMBRE" && product.category === "PORTA PASAPORTES"
    );

    const PRODUCTS_GENDER_DAMA_CATEGORY_BILLETERAS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "BILLETERAS"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_BOLSOS_Y_MALETINES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "BOLSOS Y MALETINES"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_CINTURONES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "CINTURONES"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_LLAVEROS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "LLAVEROS"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_MONEDEROS_Y_TARJETEROS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" &&
        product.category === "MONEDEROS Y TARJETEROS"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_BILLETES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "PORTA BILLETES"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_COSMETICOS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "PORTA COSMÉTICOS"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_DOCUMENTOS = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "PORTA DOCUMENTOS"
    );
    const PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_PASAPORTES = this.PRODUCTS.filter(
      (product: any) =>
        product.gender === "DAMA" && product.category === "PORTA PASAPORTES"
    );

    const PRODUCTS_TO_DB = [
      {
        gender: "HOMBRE",
        category: "BILLETERAS",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_BILLETERAS
      },
      {
        gender: "HOMBRE",
        category: "BOLSOS_Y_MALETINES",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_BOLSOS_Y_MALETINES
      },
      {
        gender: "HOMBRE",
        category: "CINTURONES",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_CINTURONES
      },
      {
        gender: "HOMBRE",
        category: "LLAVEROS",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_LLAVEROS
      },
      {
        gender: "HOMBRE",
        category: "MONEDEROS_Y_TARJETEROS",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_MONEDEROS_Y_TARJETEROS
      },
      {
        gender: "HOMBRE",
        category: "PORTA_BILLETES",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_BILLETES
      },
      {
        gender: "HOMBRE",
        category: "PORTA_COSMETICOS",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_COSMETICOS
      },
      {
        gender: "HOMBRE",
        category: "PORTA_DOCUMENTOS",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_DOCUMENTOS
      },
      {
        gender: "HOMBRE",
        category: "PORTA_PASAPORTES",
        data: PRODUCTS_GENDER_HOMBRE_CATEGORY_PORTA_PASAPORTES
      },
      {
        gender: "DAMA",
        category: "BILLETERAS",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_BILLETERAS
      },
      {
        gender: "DAMA",
        category: "BOLSOS_Y_MALETINES",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_BOLSOS_Y_MALETINES
      },
      {
        gender: "DAMA",
        category: "CINTURONES",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_CINTURONES
      },
      {
        gender: "DAMA",
        category: "LLAVEROS",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_LLAVEROS
      },
      {
        gender: "DAMA",
        category: "MONEDEROS_Y_TARJETEROS",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_MONEDEROS_Y_TARJETEROS
      },
      {
        gender: "DAMA",
        category: "PORTA_BILLETES",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_BILLETES
      },
      {
        gender: "DAMA",
        category: "PORTA_COSMETICOS",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_COSMETICOS
      },
      {
        gender: "DAMA",
        category: "PORTA_DOCUMENTOS",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_DOCUMENTOS
      },
      {
        gender: "DAMA",
        category: "PORTA_PASAPORTES",
        data: PRODUCTS_GENDER_DAMA_CATEGORY_PORTA_PASAPORTES
      }
    ];

    console.warn(
      "--                                                         --"
    );
    console.warn(
      "-- Beginig Uploading Productos                             --"
    );
    console.warn(
      "--                                                         --"
    );

    for (let i = 0; i < PRODUCTS_TO_DB.length; i++) {
      const collection_name = "PRODUCTS";
      const document_name = `PRODUCTS_GENDER_${
        PRODUCTS_TO_DB[i].gender
      }_CATEGORY_${PRODUCTS_TO_DB[i].category}`;
      const document_data = {
        gender: PRODUCTS_TO_DB[i].gender,
        category: PRODUCTS_TO_DB[i].category,
        products: JSON.stringify(PRODUCTS_TO_DB[i].data)
      };
      console.warn(document_name);
      const isLoaded = await this.db.setShopProducts(
        collection_name,
        document_name,
        document_data
      );
    }
  }
  private clear() {
    this.PRODUCTS = [];
  }

  private getProductRef(product: any): string {
    return product["REFERENCIA"];
  }
  private getProductRefCode(product: any): string {
    return product["REFERENCIA"].split("-")[0];
  }
  private getProductRefColorCode(product: any): string {
    return product["REFERENCIA"].split("-")[1].slice(0, 2);
  }
  private getProductRefSizeCode(product: any): string {
    return product["REFERENCIA"].split("-")[1].slice(2, 4);
  }
  private getProductRefPhotoCode(product: any): string {
    return (
      this.getProductRefCode(product) +
      "-" +
      this.getProductRefColorCode(product)
    );
  }
  private getProductDiscount(product: any): number {
    return product["DESCUENTO"];
  }
  private getProductDescription(product: any): string {
    return product["NOMBRE LARGO"];
  }
  private getProductGender(product: any): string {
    return this.getProductRefCode(product).slice(0, 1) === "D"
      ? "DAMA"
      : "HOMBRE";
  }
  private getProductCategory(product: any): string {
    const WORD = (product["NOMBRE LARGO"] as string).toUpperCase();
    const WORDS_BILLTERAS = ["BILLETERA", "CARTERA"];
    const WORDS_MORRALES = [
      "BOLSO",
      "ORGANIZADOR VIAJE",
      "MANOS LIBRES",
      "BOLSO CRUZADO",
      "MORRAL",
      "MALETA",
      "PAPELERA",
      "MALETIN"
    ];
    const WORDS_CINTURONES = ["CINTURONES"];
    const WORDS_LLAVEROS = ["LLAVERO", "LLAVEROS", "POTA LLAVES", "LLAVES"];
    const WORDS_MONEDEROS_Y_TARJETEROS = ["MONEDERO", "TARJETERO", "MONEDAS"];
    const WORDS_PORTA_BILLETES = [
      "PORTA BILLETES",
      "BILLETES",
      "PORTA BILLETE"
    ];
    const WORDS_PORTA_COSMETICOS = ["PORTA COSMÉTICOS", "COSMETICOS", "PORTA LAPICES"];
    const WORDS_PORTA_DOCUMENTOS = [
      "PORTA DOCUMENTOS",
      "DOCUMENTOS",
      "PORTA DOCUMENTO"
    ];
    const WORDS_PORTA_PASAPORTES = ["PASAPORTES", "PORTA PASAPORTE"];
    const FUZZY_SET_BILLETERA = FuzzySet(WORDS_BILLTERAS);
    const FUZZY_SET_MORRAL = FuzzySet(WORDS_MORRALES);
    const FUZZY_SET_CINTURON = FuzzySet(WORDS_CINTURONES);
    const FUZZY_SET_LLAVERO = FuzzySet(WORDS_LLAVEROS);
    const FUZZY_SET_MONEDERO = FuzzySet(WORDS_MONEDEROS_Y_TARJETEROS);
    const FUZZY_SET_PORTA_BILLETES = FuzzySet(WORDS_PORTA_BILLETES);
    const FUZZY_SET_PORTA_COSMETICOS = FuzzySet(WORDS_PORTA_COSMETICOS);
    const FUZZY_SET_PORTA_DOCUMENTOS = FuzzySet(WORDS_PORTA_DOCUMENTOS);
    const FUZZY_SET_PORTA_PASAPORTES = FuzzySet(WORDS_PORTA_PASAPORTES);
    const MATCH_BILLETERA = FUZZY_SET_BILLETERA.get(WORD);
    const MATCH_MORRAL = FUZZY_SET_MORRAL.get(WORD);
    const MATCH_CINTURON = FUZZY_SET_CINTURON.get(WORD);
    const MATCH_LLAVERO = FUZZY_SET_LLAVERO.get(WORD);
    const MATCH_MONEDERO = FUZZY_SET_MONEDERO.get(WORD);
    const MATCH_PORTA_BILLETES = FUZZY_SET_PORTA_BILLETES.get(WORD);
    const MATCH_PORTA_COSMETICOS = FUZZY_SET_PORTA_COSMETICOS.get(WORD);
    const MATCH_PORTA_DOCUMENTOS = FUZZY_SET_PORTA_DOCUMENTOS.get(WORD);
    const MATCH_PORTA_PASAPORTES = FUZZY_SET_PORTA_PASAPORTES.get(WORD);
    const MATCHES = [
      MATCH_BILLETERA,
      MATCH_MORRAL,
      MATCH_CINTURON,
      MATCH_LLAVERO,
      MATCH_MONEDERO,
      MATCH_PORTA_BILLETES,
      MATCH_PORTA_COSMETICOS,
      MATCH_PORTA_DOCUMENTOS,
      MATCH_PORTA_PASAPORTES
    ];
    const MATCHES_MAX_LIKEHOOD = MATCHES.map((matchs: any) => {
      if (matchs) {
        const matchs_sorted = matchs.sort(function(a: any, b: any) {
          return b[0] - a[0];
        });
        const matchs_max = matchs_sorted[0];
        return matchs_max;
      } else {
        return null;
      }
    });
    const MATCHES_MAX_LIKEHOOD_NO_NULL = MATCHES_MAX_LIKEHOOD.map(
      (match: any) => {
        if (match) {
          return match;
        } else {
          return [-1, "NO MATCH"];
        }
      }
    );
    const MATCHES_MAX_LIKEHOOD_NO_NULL_SORTED = MATCHES_MAX_LIKEHOOD_NO_NULL.sort(
      function(a: any, b: any) {
        return b[0] - a[0];
      }
    );
    const MATCHES_MAX_LIKEHOOD_NO_NULL_SORTED_MAX =
      MATCHES_MAX_LIKEHOOD_NO_NULL_SORTED[0];
    const MATCH_TARGET_WORD = MATCHES_MAX_LIKEHOOD_NO_NULL_SORTED_MAX[1];
    const MATCH_CATEGORY_LIST = {
      BILLETERAS: WORDS_BILLTERAS,
      MORRALES: WORDS_MORRALES,
      CINTURONES: WORDS_CINTURONES,
      LLAVEROS: WORDS_LLAVEROS,
      MONEDEROS_Y_TARJETEROS: WORDS_MONEDEROS_Y_TARJETEROS,
      PORTA_BILLETES: WORDS_PORTA_BILLETES,
      PORTA_COSMETICOS: WORDS_PORTA_COSMETICOS,
      PORTA_DOCUMENTOS: WORDS_PORTA_DOCUMENTOS,
      PORTA_PASAPORTES: WORDS_PORTA_PASAPORTES
    };
    const MATCH_CATEGORY_INDEX = Object.values(MATCH_CATEGORY_LIST).findIndex(
      (match: any) => {
        return match.includes(MATCH_TARGET_WORD);
      }
    );
    const MATCH_CATEGORY_WORD = Object.keys(MATCH_CATEGORY_LIST)[
      MATCH_CATEGORY_INDEX
    ];
    const MATCH_CATEGORY_STRING: any = {
      BILLETERAS: "Billeteras",
      MORRALES: "Bolsos y Maletines",
      CINTURONES: "Cinturones",
      LLAVEROS: "Llaveros",
      MONEDEROS_Y_TARJETEROS: "Monederos y Tarjeteros",
      PORTA_BILLETES: "Porta Billetes",
      PORTA_COSMETICOS: "Porta Cosméticos",
      PORTA_DOCUMENTOS: "Porta Documentos",
      PORTA_PASAPORTES: "Porta Pasaportes"
    };
    return MATCH_CATEGORY_STRING[MATCH_CATEGORY_WORD];
  }
  private getProductShortName(product: any): string {
    return product["NOMBRE CORTO"];
  }
  private getProductBarCode(product: any): string {
    return product["CODIGO BARRAS"];
  }
  private getProductPriceCOP(product: any): number {
    return parseFloat(product["PRECIO COP"]);
  }
  private getProductPriceUSD(product: any): number {
    return parseFloat(product["PRECIO USD"]);
  }
  private getProductLine(product: any): string {
    return product["LINEA"];
  }
  private getProductColor(product: any): string {
    return product["COLOR"];
  }
  private getProductHeight(product: any): string {
    return product["ALTO"];
  }
  private getProductWidth(product: any): string {
    return product["ANCHO"];
  }
  private getProductDepth(product: any): string {
    return product["PROFUNDO"];
  }
}
</script>


<style scoped lang="less">
.loader {
  width: 100vw;
  height: 100vh;
  background-color: rgba(50, 50, 50, 0.85);
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 10000000;
  filter: blur(1px);

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
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
form {
  display: block;
  width: 100%;
  border: none;
  box-sizing: border-box;
  padding: 1em;
}
div.input {
  display: block;
  width: 100%;
  border: none;
  position: relative;
  box-sizing: border-box;
  border: 1px solid rgba(100, 100, 100, 0.5);
  border-radius: 0.5em;
  padding: 0.5em;
  margin-bottom: 1em;
}

input {
  display: block;
  width: 100%;
  border: none;

  box-sizing: border-box;
  padding: 0.5em;
}

.buttons {
  width: 100%;
  box-sizing: border-box;
  padding: 1em;

  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
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
.button {
  display: block;
  border: 1px solid rgba(0, 0, 0, 0);
  border-radius: 1em;
  color: white;
  padding: 1em;
  margin: 0.5em;

  font-family: "Open Sans";
  font-weight: normal;
  font-style: normal;

  cursor: pointer;

  &.male,
  &.female {
    width: ~"calc(50% - 3.5em)";
    display: inline-block;
    padding: 0.25em;
    margin: 0.5em;
    border: 1px solid #6a8ebb;
    color: #6a8ebb;
    text-align: center;
    border-radius: 0.5em;
    &.active {
      background-color: #6a8ebb;
      color: white;
    }
  }

  &.remove {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 0em;
    margin: 0em;
    color: #000;
    padding: 0.5em;
    font-size: 1.24em;
  }

  &.add {
    position: absolute;
    top: 0px;
    right: 0px;
    padding: 0em;
    margin: 0em;
    color: #000;
    padding: 0.5em;
    font-size: 1.24em;
  }

  &.save {
    background-color: #34a853;
    color: white;
  }

  &.clear {
    background-color: #ea4335;
    color: white;
  }
}
</style>