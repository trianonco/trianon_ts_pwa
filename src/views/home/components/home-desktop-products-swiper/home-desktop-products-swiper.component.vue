<template>
  <div class="swiper home-desktop-products-swiper">
    <swiper :options="swiperOption" ref="homeProductSwiper">
      <!-- slides -->
      <swiper-slide v-for="(product, index) of products" v-bind:key="index">
        <div class="product-card" @click="goToProductView(product)">
          <div class="wrapper">
            <v-lazy-image
              :src="getPhotoURLs(product).hd"
              :src-placeholder="getPhotoURLs(product).thumb"
            />
            <div class="info">
              {{product.description}} {{product.line}}
              <br>
              <br>
              COLOR {{ product.color }}
            </div>
          </div>
        </div>
      </swiper-slide>
      <!-- Optional controls
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
      -->
    </swiper>
  </div>
</template>

<script lang="ts">
// -------------------------------------------------------- //
// -- Vue Resources & Core -------------------------------- //
// -------------------------------------------------------- //
import { Component, Vue } from "vue-property-decorator";
import VLazyImage from "v-lazy-image";
import HomeSwiperConfig from "./home-swiper.config";
import HomeSwiperMock from "./home-swiper.mock";
import ApiDataBase from "./../../../../shared/database/index";

// -------------------------------------------------------- //
/*

*/
@Component({
  components: {
    VLazyImage
  }
})
export default class HomeDesktopProductsSwiperComponent extends Vue {
  private swiperOption: any = HomeSwiperConfig;
  private swiperSlides: any[] = [];

  private apiDB: any = new ApiDataBase();
  private db: any = {};

  private productsDB: any[] = [];
  private products: any[] = [];

  private get swiper() {
    return (this.$refs.homeProductSwiper as any).swiper;
  }
  private goToProductView(product: any) {
    this.$router.push(
      `/product/gender/${product.gender}/category/${product.category}/ref/${
        product.ref_photo_code
      }`
    );
  }
  private getPhotoURLs(productObj: any) {
    const product_token = "c392cfe1-c92e-4bb8-97f1-cf815a641f01";
    const filename = `${productObj.ref_photo_code}-01.jpg`;
    const pathbase =
      "https://firebasestorage.googleapis.com/v0/b/trianon-co-pwa-dev.appspot.com/o/Shop-Products-Photos";
    const mediafile = `alt=media&token=${product_token}`;
    const photo_thumb_src = `${pathbase}%2Fthumb%2F${filename}?${mediafile}`;
    const photo_hd_src = `${pathbase}%2Fhd%2F${filename}?${mediafile}`;
    return {
      hd: photo_hd_src,
      thumb: photo_thumb_src
    };
  }

  private beforeMount() {
    this.apiDB.setDatabaseByName("SHOP-DB");
    this.db = this.apiDB.getDatabase();

    const gender = "HOMBRE";
    const category = "BILLETERAS";

    this.db
      .getProductsByGenderAndCategories(gender, category)
      .then(async (products: any) => {
        const unique = this.removeDuplicates(products, "ref_photo_code");
        this.productsDB = unique;
        this.products = this.productsDB.filter(
          (product: any) =>
            product.ref_photo_code.includes("HB1212-01") ||
            product.ref_photo_code.includes("HB1212-12") ||
            product.ref_photo_code.includes("HJ1255-01") ||
            product.ref_photo_code.includes("HJ1255-07") ||
            product.ref_photo_code.includes("HJ1256-01") ||
            product.ref_photo_code.includes("HM1206-04") ||
            product.ref_photo_code.includes("HT1242-04") ||
            product.ref_photo_code.includes("HT1251-01") ||
            product.ref_photo_code.includes("HT1251-04") ||
            product.ref_photo_code.includes("HT1252-04") ||
            product.ref_photo_code.includes("HT1252-15") ||
            product.ref_photo_code.includes("HT1251-01") ||
            product.ref_photo_code.includes("HT1241-15")
        );

        console.warn({
          productsDB: this.productsDB
        });
      });
  }

  private async mounted() {}

  private removeDuplicates(myArr: any[], prop: string) {
    return myArr.filter((obj, pos, arr) => {
      return arr.map(mapObj => mapObj[prop]).indexOf(obj[prop]) === pos;
    });
  }
}
</script>

<style lang="less">
@import "./home-desktop-products-swiper.style.less";
div.home-desktop-products-swiper {
  display: none;
}
@media (min-width: 600px) {
  #constructor-desktop-products-swiper();
}
</style>
